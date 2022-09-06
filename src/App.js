import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./Pages/Home/Homepage";
import Navbar from "./components/Sidebar/Sidebar.jsx";
import About from "./Pages/About/Aboutpage";
import Contact from "./Pages/Contact/Contactpage";
import Projects from "./Pages/Project/Projectpage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        {/* <Route path="/resume" element={<Resume />} /> */}
      </Routes>
    </div>
  );
}

export default App;
