import React from "react";
import ReactDOM from "react-dom";

class Index extends React.Component {
  render() {    
    return (
      <div>
       Hello React!
        <h1>{1+1}</h1>    
      </div>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById("index"));

