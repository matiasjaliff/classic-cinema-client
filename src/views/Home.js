import React from "react";

import Navbar from "../components/Navbar";
import Featured from "../components/Featured";
import Carrousel from "../components/Carrousel";

const Home = () => {
  return (
    <div id="home">
      <div id="navbar">
        <Navbar />
      </div>
      <div id="content">
        <Featured />
        <Carrousel />
      </div>
    </div>
  );
};

export default Home;
