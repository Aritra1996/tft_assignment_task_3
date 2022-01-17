import './App.css';
import { Buttons } from './components/Buttons';
import { InputArea } from './components/InputArea';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '', newStart: false};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(value) {
    if(value==='=') {
      try { 
        let result = Function("return " + this.state.value)
        this.setState({value: Function("return " + this.state.value)(), newStart: true})
      } catch(e) {
        console.log(e)
        if(e instanceof SyntaxError) {
          alert('Invalid expression')
        } else {
          alert('Error occured')
        }
      }
      
    } else if(value==='CE') {
      let newValue;
      if(this.state.value.length>1) {
        newValue = this.state.value.substring(0, this.state.value.length-1)
        this.setState({value: newValue})
      } else {
        this.setState({value: ''})
      }
    } else {
      if(this.state.newStart) {
        this.setState({ value: value, newStart: false})
      } else {
        this.setState({value: this.state.value + value});
      }
    }
  }

  render() {
    return (
      <div className="App">
        <div><h1>Calculator</h1></div>
        <InputArea value={this.state.value}></InputArea>
        <Buttons handleClick={this.handleClick}></Buttons>
      </div>
    );
  }
}

export default App;
