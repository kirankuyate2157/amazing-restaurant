import React from "react";

import Navbar from "./components/navbar/Navbar";
import AboutUs from "./containers/aboutUs/AboutUs";
import Awards from "./containers/awards/Awards";
import Chef from "./containers/chef/Chef";
import Footer from "./containers/footer/Footer";
import Gallery from "./containers/gallery/Gallery";
import Header from "./containers/header/Header";
import Intro from "./containers/intro/Intro";
import Location from "./containers/location/Location";
import Menu from "./containers/menu/Menu";
import "./App.css";
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
        <Gallery />
        <Location />
        <Footer />
      </div>
    </>
  );
};

export default App;
