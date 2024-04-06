import "./App.css";
import About from "./Components/About/About";
import Cursor from "./Components/Cursor/Cursor";
import Intro from "./Components/Intro/Intro";
import Wave from "./Components/Waves/Wave";

function App() {
  return (
    <div className="App">
      <Cursor />
      <Intro />
      <About />
    </div>
  );
}

export default App;
