import React from "react";
import "./app.css";
import Navbar from "./components/navbar/Navbar";
import AboutUs from "./containers/aboutUs/AboutUs";
import Header from "./containers/header/Header";

const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <Header />
        <AboutUs />
      </div>
    </>
  );
};

export default App;
