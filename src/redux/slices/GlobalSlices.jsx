import { createSlice } from "@reduxjs/toolkit";

const GlobalSlices = createSlice({
  name: "global",
  initialState: {
    isLoading: false,
  },
  reducers: {
    globalReducer: (state, action) => {
      switch (action.payload.type) {
        case "SET_LOADING":
          return {
            ...state,
            isLoading: action.payload.value,
          };
        default:
          return state;
      }
    },
  },
});

export const { globalReducer } = GlobalSlices.actions;
export default GlobalSlices.reducer;
