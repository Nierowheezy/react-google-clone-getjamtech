import React from "react";
import "./App.css";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";
import MainBody from "./Layout/Main/MainBody";

const App = () => {
  return (
    <div className="App">
      <Header />
      <MainBody />
      <Footer />
    </div>
  );
};

export default App;
