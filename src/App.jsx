import "./app.css";
import Aboutme from "./components/Aboutme/Aboutme";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/NavBar/Navbar";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Aboutme />
      <Resume />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
