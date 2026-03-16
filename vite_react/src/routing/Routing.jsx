import React from "react";
import { Route, Routes } from "react-router";
import Home from "../pages/home/Home";
import Navbar from "../components/Navbar";

const Routing = () => {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default Routing;
