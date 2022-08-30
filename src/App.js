import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./Pages/Homepage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} /> */}
      </Routes>
    </div>
  );
}

export default App;
