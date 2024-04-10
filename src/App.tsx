import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Cursor from "./Components/Cursor/Cursor";
import Education from "./Components/Education/Education";
import Internships from "./Components/Internships/Internships";
import Projects from "./Components/Projects/Projects";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <div className="App">
      <Cursor />
      <ScrollToTop />
      <About />
      <Education />
      <Internships />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
