import React from "react";
import "./app.css";
import Navbar from "./components/navbar/Navbar";
import AboutUs from "./containers/aboutUs/AboutUs";
import Awards from "./containers/awards/Awards";
import Chef from "./containers/chef/Chef";
import Header from "./containers/header/Header";
import Intro from "./containers/intro/Intro";
import Menu from "./containers/menu/Menu";

const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <Header />
        <AboutUs />
        <Menu />
        <Chef />
        <Intro />
        <Awards />
      </div>
    </>
  );
};

export default App;
