import logo from './logo.svg';
import './App.css';
import { Buttons } from './components/Buttons';
import { InputArea } from './components/InputArea';

function App() {
  return (
    <div className="App">
      <div><h1>Calculator</h1></div>
      <InputArea></InputArea>
      <Buttons></Buttons>
    </div>
  );
}

export default App;
