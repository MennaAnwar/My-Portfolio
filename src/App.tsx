import "./App.css";
import About from "./Components/About/About";
import Cursor from "./Components/Cursor/Cursor";
import Education from "./Components/Education/Education";
import Intro from "./Components/Intro/Intro";
import Wave from "./Components/Waves/Wave";

function App() {
  return (
    <div className="App">
      <Cursor />
      <Intro />
      <About />
      <Education />
    </div>
  );
}

export default App;
