import "./App.css";
import Aboutme from "./components/Aboutme/Aboutme";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/NavBar/Navbar";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Aboutme />
      <Resume />
      <Projects />
    </>
  );
}

export default App;
