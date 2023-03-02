import React from "react";
import "./app.css";
import Navbar from "./components/navbar/Navbar";
import AboutUs from "./containers/aboutUs/AboutUs";
import Chef from "./containers/chef/Chef";
import Header from "./containers/header/Header";
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
      </div>
    </>
  );
};

export default App;
