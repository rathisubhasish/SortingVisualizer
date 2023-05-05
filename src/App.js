//_________________________________________________importing
import React, { useState, useEffect } from "react";
import ScaleLoader from "react-spinners/ScaleLoader";
import { css } from "@emotion/react";
import Header from "./components/controller/Header/Header";
import Visual from "./components/controller/Visualbox/Visual";
import Command from "./components/controller/Command/Command";
import "./App.style.css";

//_______________________________________________  Main Code
function App() {
  //________________________________________ for loading animation
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  const override = css`
    display: block;
    margin: 0 auto;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
  `;
  //_____________________________________________________________________

  const [speed, setSpeed] = useState("None");
  const [size, setSize] = useState("");
  const [sort, setSorting] = useState("None");
  const [arr, setArr] = useState([]);
  const [indexnow, setIndexNow] = useState();
  const [indexnext, setIndexNext] = useState();

  const updateList = (size) => {
    const randomArr = Array.from({ length: size }, () =>
      generateRandomInteger(50, 500)
    );
    setArr(randomArr);
  };

  const generateRandomInteger = (min, max) => {
    return Math.floor(Math.random() * (max + 1 - min));
  };

  const speedChange = (e) => {
    var changeSpeed = e.target.value;
    if (changeSpeed === "None") {
      alert("select speed !");
    } else {
      setSpeed(changeSpeed);
    }
  };

  const sizeChange = (e) => {
    var changeSize = e.target.value;
    if (changeSize < 0 || changeSize > 400) {
      alert("to see proper visualizing put input in 2 - 200!");
    } else {
      setSize(changeSize);
      updateList(changeSize);
    }
  };

  const sortingChange = (e) => {
    var changeSorting = e.target.value;
    if (changeSorting === "None") {
      alert("select sorting technique!");
    } else {
      setSorting(changeSorting);
    }
  };

  const generateRandomList = () => {
    const sizeOfList = generateRandomInteger(5, 100);
    const randomArr = Array.from({ length: sizeOfList }, () =>
      generateRandomInteger(50, 500)
    );
    setArr(randomArr);
  };

  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };
 
  const bubbleSort = async () => {
    console.log(arr);
    for (var i = 0; i < arr.length; i++) {
      // Last i elements are already in place
      setIndexNow(i);
      setIndexNext(i + 1);
      for (var j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          // If the condition is true then swap them
          var temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          setIndexNow(j);
          setIndexNext(j + 1);
          await sleep(20);
        }
      }
      await sleep(speed);
    }
    setArr([...arr]);
    setIndexNow(null);
    setIndexNext(null);
  };

  const insertionSort = async () => {
    let n = arr.length;
    for (let i = 1; i < n; i++) {
      // Choosing the first element in our unsorted subarray
      let current = arr[i];
      // The last element of our sorted subarray
      let j = i - 1;
      
      setIndexNow(i);
      setIndexNext(j+1);
      while (j > -1 && current < arr[j]) {
        arr[j + 1] = arr[j];
        setIndexNow(i);
        setIndexNext(j+1);
        j--;
        await sleep(30);
      }
      arr[j + 1] = current;
      setIndexNow(j+1);
      setIndexNext(i);
      await sleep(30);
    }
    setArr([...arr]);
    setIndexNow(null);
    setIndexNext(null);
  };

  const selectionSort = async () => {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
      // Finding the smallest number in the subarray
      let min = i;
      for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[min]) {
          min = j;
        }
      }
      setIndexNow(i);
      setIndexNext(min);
      await sleep(40);
      if (min !== i) {
        // Swapping the elements
        let tmp = arr[i];
        arr[i] = arr[min];
        arr[min] = tmp;
        setIndexNow(i);
        setIndexNext(min);
        await sleep(40);  
      }
    }
    setArr([...arr]);
    setIndexNow(null);
    setIndexNext(null);
  };

  // create max heap
  function maxHeap(input, i) {
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    let max = i;

    if (left < arr.Length && input[left] > input[max]) {
      max = left;
    }

    if (right < arr.length && input[right] > input[max]) {
      max = right;
    }

    if (max !== i) {
      swap(input, i, max);
      maxHeap(input, max);
    }
  }

  function swap(input, indexA, indexB) {
    const temp = input[indexA];

    input[indexA] = input[indexB];
    input[indexB] = temp;
  }

  const heapSort = () => {
    var arrLength = arr.length;

    for (let i = Math.floor(arrLength / 2); i >= 0; i -= 1) {
      maxHeap(arr, i);
    }

    for (let i = arr.length - 1; i > 0; i--) {
      swap(arr, 0, i);
      arrLength--;

      maxHeap(arr, 0);
    }
    console.log(arr);
  };

  const playVisualizer = () => {
    const typeOfSort = sort;
    if (typeOfSort === "Bubble Sort") {
      bubbleSort();
    } else if (typeOfSort === "Insertion Sort") {
      insertionSort();
    } else if (typeOfSort === "Selection Sort") {
      selectionSort();
    } else if (typeOfSort === "Heap Sort") {
      heapSort();
    }
  };

  return (
    <div className="App">
      {loading ? (
        <ScaleLoader
          css={override}
          size={100}
          color={"darkred"}
          loading={loading}
        />
      ) : (
        <>
          <div>
            <Header />
          </div>
          <div>
            <Visual
              data={arr}
              sort={sort}
              indexnow={indexnow}
              indexnext={indexnext}
            />
          </div>
          <Command
            speed={speed}
            sort={sort}
            size={size}
            speedChange={speedChange}
            sizeChange={sizeChange}
            sortingChange={sortingChange}
            randomList={generateRandomList}
            playVisualizer={playVisualizer}
          />
        </>
      )}
    </div>
  );
}

export default App;
//__________________________________________________________
