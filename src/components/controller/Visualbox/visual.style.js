//_____________________________________________ importing
import styled from 'styled-components';

 
//____________________________________________

export const Square = styled.div`
    height: 550px;
    width: 860px;
    margin-left: 60px;
    margin-top: 50px;
    padding: 0px;
    border-radius: 10px;
    background-color: #101820FF;//#00203FFF;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;



export const VisualText = styled.div`
    padding:10px;
    color: #FFF;
    margin : -25px auto;
    text-align: center;
`;

export const Label = styled.div`
    color: #FFF;
`;

export const VisualHeader = styled.div`
    background-color: #ADEFD1FF;
    border-radius:10px;
    height: 90%;
    justify-content: center;
    display: flex;
    flex-direction: row;
    padding-right:5px;
    padding-left:5px;
    align-items: flex-end;
`;

export const BarLine = styled.div`
    width:${(props) => props.width};//0.7%;
    margin-bottom:2px;
    height: ${(props) => props.height};
    background-color: ${(props) => (props.activeindex ?  "#FF00FF" : "#101820FF")};  
    margin-right: 2px;
    display:flex;
    align-items:center;
    justify-content: center;
`;
