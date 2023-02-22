import React from "react";
import "./app.css";
import Navbar from "./components/navbar/Navbar";
import Header from "./containers/header/Header";

const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <Header />
      </div>
    </>
  );
};

export default App;
