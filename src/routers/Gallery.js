import React from "react";
import Corousel from "../components/Corousel";
import {countries} from "../components/Data.js"
import Navbar from "../components/Navbar.js";

const Gallery = () => {
  return (
    <>
      <Navbar />
      <Corousel images={countries} />
    </>
  );
};

export default Gallery;
