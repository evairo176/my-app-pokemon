import { createSlice } from "@reduxjs/toolkit";

const GlobalSlices = createSlice({
  name: "global",
  initialState: {
    isLoading: false,
    pokemon: [],
    pokemon_detail: [],
    my_pokemon: [],
    action: "",
  },
  reducers: {
    globalReducer: (state, action) => {
      switch (action.payload.type) {
        case "SET_LOADING":
          return {
            ...state,
            isLoading: action.payload.value,
          };
        case "SET_POKEMON":
          return {
            ...state,
            pokemon: action.payload.value,
          };
        case "SET_POKEMON_DETAIL":
          return {
            ...state,
            pokemon_detail: action.payload.value,
          };
        case "SET_MY_POKEMON":
          return {
            ...state,
            my_pokemon: action.payload.value,
          };
        case "SET_ACTION":
          return {
            ...state,
            action: action.payload.value,
          };
        default:
          return state;
      }
    },
  },
});

export const { globalReducer } = GlobalSlices.actions;
export default GlobalSlices.reducer;
