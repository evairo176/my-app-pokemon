import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default AppRoutes;
