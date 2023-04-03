import { globalAction } from "../global/GlobalSlices";

const setLoading = (value) => {
  return globalAction({ type: "SET_LOADING", value });
};

export { setLoading };
