import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import MyPokemonList from "../pages/pokemon/MyPokemonList";
import PokemonDetails from "../pages/pokemon/PokemonDetails";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pokemon/:id" element={<PokemonDetails />} />
      <Route path="/my-pokemon" element={<MyPokemonList />} />
    </Routes>
  );
}

export default AppRoutes;
