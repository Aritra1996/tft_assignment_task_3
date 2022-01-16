import logo from './logo.svg';
import './App.css';
import { Buttons } from './components/Buttons';
import { InputArea } from './components/InputArea';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0, operation: null, val1: null, displayValue: ''};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(value) {
    if(value==='+' || value==='-' || value==='*' || value==='/') {
      if(this.state.operation===null) {
        this.setState({val1: this.state.value, operation: value,
        value:0, displayValue: this.state.displayValue+value});      
      }// else {
      //   let latestValue;
      //   if(this.state.operation==='+') {
      //     latestValue = this.state.val1+this.state.value
      //   } else if(this.state.operation==='-') {
      //     latestValue = this.state.val1-this.state.value
      //   } else if(this.state.operation==='*') {
      //     latestValue = this.state.val1*this.state.value
      //   } else if(this.state.operation==='/') {
      //     latestValue = parseFloat((this.state.val1/this.state.value).toFixed(4))
      //   }
      //   this.setState({displayValue: latestValue.toString() + value, value: latestValue, operation: value})  
      // }
    } else if(value==='=') {
      let latestValue;
      if(this.state.operation==='+') {
        latestValue = this.state.val1+this.state.value
      } else if(this.state.operation==='-') {
        latestValue = this.state.val1-this.state.value
      } else if(this.state.operation==='*') {
        latestValue = this.state.val1*this.state.value
      } else if(this.state.operation==='/') {
        latestValue = parseFloat((this.state.val1/this.state.value).toFixed(4))
      }
      this.setState({displayValue: latestValue.toString(), value: latestValue, operation: null})
    }
     else {
      const latestValue = this.state.value*10 + parseInt(value)
      this.setState({value: latestValue, displayValue: this.state.displayValue + value.toString()});
    }
  }

  render() {
    return (
      <div className="App">
        <div><h1>Calculator</h1></div>
        <InputArea value={this.state.displayValue}></InputArea>
        <Buttons handleClick={this.handleClick}></Buttons>
      </div>
    );
  }
}

export default App;
