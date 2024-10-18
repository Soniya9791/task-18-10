import React from "react";
import Login from "./login";
import Table from "./Table";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Services from "./Services";
import About from "./About";
import Contact from "./Contact";
import { BrowserRouter,Route,Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      {/* <Header/>
      <Home/>
      <Services/>
      <About/>
      <Contact/>
      <Footer/> */}
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
};

export default App;
