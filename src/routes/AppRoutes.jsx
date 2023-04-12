import React from "react";
import { Route, Routes } from "react-router-dom";
import MyPokemonList from "../pages/pokemon/MyPokemonList";
import PokemonDetails from "../pages/pokemon/PokemonDetails";
import { Home } from "../pages";

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
