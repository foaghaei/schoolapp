import React from "react";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Admission from "./pages/Admission";
import Join from "./pages/Join";
import Contact from "./pages/Contact";
import Farsi from "./pages/Farsi";
import { Route, Routes } from "react-router-dom";




function App() {

  return (
    <div className="App">
      <header className="App-heade">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/join" element={<Join />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/farsi" element={<Farsi />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;