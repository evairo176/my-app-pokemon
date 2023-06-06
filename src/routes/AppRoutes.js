import React from "react";
import { Route, Routes } from "react-router-dom";
import { Portofolio } from "../pages";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Portofolio />} />
    </Routes>
  );
}

export default AppRoutes;
