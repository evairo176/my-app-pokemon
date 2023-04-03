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

const setMyPokemon = (value) => {
  return globalReducer({ type: "SET_MY_POKEMON", value });
};

const setAction = (value) => {
  return globalReducer({ type: "SET_ACTION", value });
};

export { setLoading, setPokemon, setPokemonDetail, setMyPokemon, setAction };
