import './App.css';
import NavBar from './Components/NavBar'
import Presentation from './Components/Presentation';
import AboutMe from './Components/AboutMe'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Contact from './Components/Contact'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Presentation/>
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
