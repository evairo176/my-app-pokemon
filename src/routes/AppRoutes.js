import React from "react";
import { Route, Routes } from "react-router-dom";
import MyPokemonList from "../pages/pokemon/MyPokemonList";
import PokemonDetails from "../pages/pokemon/PokemonDetails";
import { GoogleMeet, Home, Live } from "../pages";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pokemon/:id" element={<PokemonDetails />} />
      <Route path="/my-pokemon" element={<MyPokemonList />} />
      <Route path="/googlemeet" element={<GoogleMeet />} />
      <Route path="/live" element={<Live />} />
    </Routes>
  );
}

export default AppRoutes;
