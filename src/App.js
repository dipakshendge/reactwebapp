import React from "react";
import './index.css';
import Home from "./routes/home.js";
import Contact from "./routes/contact";
import Project from "./routes/project";
import About from "./routes/about";
import Navbar from "./componant/Navbar/navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./componant/footer/footer";
function App() {
  return (
    <>
        <Navbar />
        <Routes>
         <Route path="/" element={<Home />} />
         <Route path="PortfolioReact/about" element={<About />} />
         <Route path="PortfolioReact/project" element={<Project />} />
         <Route path="PortfolioReact/contact" element={<Contact />} />
        </Routes>
        <Footer />
    </>
  );
}

export default App;
