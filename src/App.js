import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/Intro/Intro";
import Skills from "./Components/Skills/Skills";
import Project from "./Components/Project/Project";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Intro/>
    <Skills/>
    <Project/>
    <Contact/>
    </div>
  );
}

export default App;
