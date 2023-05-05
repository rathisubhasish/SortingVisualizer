//____________________________________ imports
import React, { Component } from "react";
import { Square, VisualHeader, VisualText, BarLine } from "./visual.style";
 
// import Button from '@material-ui/core/Button';
//_____________________________________________

class Visual extends Component {
  render() {
    const width = window.screen.width / this.props.data.length;
    const indexnow = this.props.indexnow;
    const indexnext = this.props.indexnext;
    return (
      <>
        <Square>
          <VisualHeader>
            {this.props.data.map((size, i) => (
              <>
                <BarLine
                  height={`${size}px`}
                  width={`${width}px`}
                  key={i}
                  activeindex={indexnow === i}
                  style={
                    indexnext === i ? { backgroundColor: "#CC0033" } : null
                  }
                >
                  {/* {this.props.size > 20 && <Label>{size}</Label>}   */}
                </BarLine>
              </>
            ))}
          </VisualHeader>
          <VisualText>
            <h1>{this.props.sort}</h1>
          </VisualText>
        </Square>
      </>
    );
  }
}

export default Visual;
