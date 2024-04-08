import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Cursor from "./Components/Cursor/Cursor";
import Education from "./Components/Education/Education";
import Internships from "./Components/Internships/Internships";
import Intro from "./Components/Intro/Intro";
import Projects from "./Components/Projects/Projects";

import "./App.css";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Cursor />
      <Intro />
      <About />
      <Education />
      <Internships />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
