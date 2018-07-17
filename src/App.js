import React from 'react'

class App extends React.Component {



    constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
      this.state = {
        clickCounter:0,
        currentTimestamp: new Date(),
      }
    }

  handleClick = () => {
    this.setState((prevState) => {
      return {clickCounter: prevState.clickCounter + 1};
    });
  }

  componentDidMount() {
    setInterval(() =>{
      this.setState({currentTimestamp:new Date()})},1000);
    }
  render(){
    return (
      <div>
      <button onClick = {this.handleClick} >Click </button>
        <p>Clicked: {this.state.clickCounter}</p>
        <p>Time is :{this.state.currentTimestamp.toLocaleString()}</p>
      </div>

    );
  }

}

export default App;
