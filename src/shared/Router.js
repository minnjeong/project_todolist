import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Page from "../pages/Page";
import Home from "../pages/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/page/:id" element={<Page />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
