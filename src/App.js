import React from "react";
import { FaHome } from "react-icons/fa";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import hero1 from "./components/hero1";
import { ParallaxProvider } from "react-scroll-parallax";

// import { useStateContext } from "./contexts/ContextProvider";
import { Route, Routes } from "react";

const App = () => {
  return (
    <>
      <Navbar />
      <ParallaxProvider>
        <hero1 />
      </ParallaxProvider>
      <Home />
      <Footer />
    </>
  );
};

export default App;
