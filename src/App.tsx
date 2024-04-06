import "./App.css";
import Cursor from "./Components/Cursor/Cursor";
import Girl from "./Components/GIRL/Girl";
import Intro from "./Components/Intro/Intro";
import Wave from "./Components/Waves/Wave";

function App() {
  return (
    <div className="App">
      <Cursor />
      <Intro />
      <Wave upperFill="#2c3e50" LowerFill="#d8b2e1" />
      <Girl />
    </div>
  );
}

export default App;
