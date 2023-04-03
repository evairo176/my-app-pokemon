import { globalReducer } from "../slices/GlobalSlices";

const setLoading = (value) => {
  return globalReducer({ type: "SET_LOADING", value });
};

const setPokemon = (value) => {
  return globalReducer({ type: "SET_POKEMON", value });
};

const setPokemonDetail = (value) => {
  return globalReducer({ type: "SET_POKEMON_DETAIL", value });
};

export { setLoading, setPokemon, setPokemonDetail };
