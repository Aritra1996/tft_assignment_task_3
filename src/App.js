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
        let expression = "return " + this.state.value
        this.setState({value: Function(expression)(), newStart: true, operatorAtLast: false})
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
        if(value==='+'||value==='-'||value==='*'||value==='/') {
          this.setState({value: this.state.value + value, newStart: false, operatorAtLast: true});
        } else {
          this.setState({ value: value, newStart: false})
        }
      } else {
        if(value==='+'||value==='-'||value==='*'||value==='/') {
          if(this.state.operatorAtLast) {
            let newValue = this.state.value.substring(0, this.state.value.length-1) + value
            this.setState({value: newValue, operatorAtLast: true});
          } else {
            this.setState({value: this.state.value + value, operatorAtLast: true});
          }
        } else {
          this.setState({value: this.state.value + value, operatorAtLast: false});
        }
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
