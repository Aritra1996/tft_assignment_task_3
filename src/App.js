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
    this.setState({value: value})
  }

  render() {
    return (
      <div className="App">
        <div><h1>Calculator</h1></div>
        <InputArea value={this.state.value}></InputArea>
        <Buttons handleClick={this.handleClick} exp={this.state.value}></Buttons>
      </div>
    );
  }
}

export default App;
