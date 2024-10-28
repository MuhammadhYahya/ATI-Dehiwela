import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import About from "./components/About";
import Home from "./components/Home";
import Footer from "./components/Footer";

import HNDA from "./pages/HNDA";
import HNDBA from "./pages/HNDBA";
import HNDBF from "./pages/HNDBF";
import HNDE from "./pages/HNDE";
import HNDIT from "./pages/HNDIT";
import HNDM from "./pages/HNDM";
import HNDTHM from "./pages/HNDTHM";

import "./styles/Header.css";
import "./styles/About.css";
import "./styles/Home.css";
import "./styles/Footer.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="/hnda" element={<HNDA />} />
          <Route path="/hndba" element={<HNDBA />} />
          <Route path="/hndbf" element={<HNDBF />} />
          <Route path="/hnde" element={<HNDE />} />
          <Route path="/hndit" element={<HNDIT />} />
          <Route path="/hndm" element={<HNDM />} />
          <Route path="/hndthm" element={<HNDTHM />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
