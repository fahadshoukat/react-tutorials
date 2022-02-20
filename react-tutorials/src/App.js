import "./App.css";
import Greet from "./components/Greet";
import { Greet1 } from './components/Greet';
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";

function App() {
  return (
    <div className="App">
      <h1>React Tutorials</h1>
      {/* <Greet />
      <Greet1 />
      <Welcome /> */}
      <Hello name="Sufyan" heroname="footballer" />
      <Hello name="Ali" heroname="badmenten" />
      <Hello name="Muaz" heroname="cricketer" />
    </div>
  );
}

export default App;
