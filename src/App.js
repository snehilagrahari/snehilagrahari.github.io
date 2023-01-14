import About from "./Components/About";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import './App.css'
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Stats from "./Components/Stats";
import Projects from "./Components/Projects";



function App() {
  return (
    <div className="App">
       <Navbar />
       <Home />
       <About />
       <Skills />
       <Stats />
       <Projects />
       <Contact />
    </div>
  );
}

export default App;
