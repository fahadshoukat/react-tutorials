import "./App.css";
import Greet from "./components/Greet";
import { Greet1 } from './components/Greet';
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      <h1>React Tutorials</h1>
      <Greet />
      <Greet1 />
      <Welcome />
    </div>
  );
}

export default App;
