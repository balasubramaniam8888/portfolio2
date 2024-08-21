import { React } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About"
import Skills from "./Pages/Skills"
import Projects from "./Pages/Projects";
import ProfessionalExp from "./Pages/ProfessionalExp";
import Intrests from "./Pages/Intrests";

import Navbar from "./Navbar";



function App() {
  return (
    <>
       

      <BrowserRouter>

      <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>} />
         <Route path="/About" element={<About></About>} />
          <Route path="/Skills" element={<Skills></Skills>} />
            <Route path="/Projects" element={<Projects></Projects>} />
          <Route
            path="/ProfessionalExpreience"
            element={ <ProfessionalExp></ProfessionalExp>}
          />
          <Route path="/Intrests" element={<Intrests></Intrests>} /> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
