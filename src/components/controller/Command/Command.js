//____________________________________ imports
import React, { Component } from "react";
 
import {
  Control,
  BarStyle,
  FieldStyle,
  PlayStyle,
  SelectForm,
  ResetStyle,
} from "./command.style";
// import { makeStyles } from '@material-ui/core/styles';
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import Fab from "@material-ui/core/Fab";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import { BarChart } from "@material-ui/icons";
import Button from "@material-ui/core/Button";
//_____________________________________________

class Command extends Component {
  render() {
    return (
      <Control>
        {/* {this.props.sort}
        {this.props.speed}
        {this.props.size} */}
        <SelectForm>
          <Select
            value={this.props.sort}
            variant="outlined"
            onChange={this.props.sortingChange}
            label="sorting"
          >
            <MenuItem value="None">Sorting</MenuItem>
            <MenuItem value={"Bubble Sort"}>Bubble Sort</MenuItem>
            {/* <MenuItem value={"Quick Sort"}>Quick Sort</MenuItem> */}
            {/* <MenuItem value={"Merge Sort"}>Merge Sort</MenuItem> */}
            <MenuItem value={"Insertion Sort"}>Insertion Sort</MenuItem>
            <MenuItem value={"Selection Sort"}>Selection Sort</MenuItem>
            {/* <MenuItem value={"Heap Sort"}>Heap Sort</MenuItem> */}
            {/* <MenuItem value={"Radix Sort"}>Radix Sort</MenuItem> */}
            {/* <MenuItem value={"Bucket Sort"}>Bucket Sort</MenuItem> */}
          </Select>
        </SelectForm>
        <SelectForm>
          <Select
            variant="outlined"
            value={this.props.speed}
            onChange={this.props.speedChange}
            label="speed"
          >
            <MenuItem value={"None"}>Speed</MenuItem>
            <MenuItem value={2000}>slow</MenuItem>
            <MenuItem value={200}>Normal</MenuItem>
            <MenuItem value={0}>fast</MenuItem>
          </Select>
        </SelectForm>

        <FieldStyle>
          <TextField
            id="arraysize"
            name="arraysize"
            label="Size"
            value={this.props.size}
            onChange={this.props.sizeChange}
          />
        </FieldStyle>

        <BarStyle>
          <Fab color="primary" aria-label="bar-chart">
            <BarChart onClick={this.props.randomList} />
          </Fab>
        </BarStyle>
        <PlayStyle>
          <Fab color="secondary" aria-label="play">
            <PlayArrowIcon onClick={this.props.playVisualizer} />
          </Fab>
        </PlayStyle>
        <ResetStyle>
          <Button
            variant="contained"
            onClick={() => window.location.reload(false)}
          >
            Reset
          </Button>
        </ResetStyle>
      </Control>
    );
  }
}

export default Command;

//           <BarStyle>
//             <Fab color="primary" aria-label="bar-chart">
//               <BarChart />
//             </Fab>
//           </BarStyle>
//           <PlayStyle>
//             <Fab color="secondary" aria-label="bar-chart">
//               <PlayArrowIcon />
//             </Fab>
//           </PlayStyle>

//           <ResetStyle>
//             <Button variant="contained" onClick={() => window.location.reload(false)}>Reset</Button>
//           </ResetStyle>
//     </Control>
//     </>
//   );
// }

//___________________________________________________________________________________
