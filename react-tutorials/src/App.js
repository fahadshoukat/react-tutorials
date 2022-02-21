import "./App.css";
import Greet from "./components/Greet";
import { Greet1 } from './components/Greet';
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <h1>React Tutorials</h1>
      <Counter />
      {/* <Message /> */}
      {/* <Greet />
      <Greet1 /> */}
      {/* <Welcome name="Sufyan" heroname="footballer">
        <p>this is children props</p>
      </Welcome>
      <Welcome name="Sufyan" heroname="footballer">
        <button>Click</button>
      </Welcome>
      <Welcome name="Sufyan" heroname="footballer" /> */}
      {/* <Hello name="Sufyan" heroname="footballer" />
      <Hello name="Ali" heroname="badmenten" />
      <Hello name="Muaz" heroname="cricketer" /> */}
    </div>
  );
}

export default App;
