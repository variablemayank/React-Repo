import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.add = this.add.bind(this);
    this.state = {
      value:0,
      prev:0
    }
  }
  add(e){
    e.preventDefault();
    const val1 = parseInt(e.target.val1.value,10);
    const val2 = parseInt(e.target.val2.value,10);
    const val3 = val1+val2;
    this.setState((prevState) => {
      return {
      prev:prevState.value,
      value:val3
    };
  });
    console.log(val3);
  }
  render(){
    return(
    <div>
   <form onSubmit = {this.add}>
  <input type = "number" placeholder = "Enter the value of a" name = "val1"></input>
  <input type = "number" placeholder = "Enter the value of b" name = "val2"></input>
  <button>calculate</button>
   </form>
   <h1>Value is = {this.state.value} Previous Value is {this.state.prev}</h1>
   </div>
);
}
}
export default App;
