import axios from "axios";
import config from "../../config/config";
import { setLoading, setPokemon, setPokemonDetail } from "./globalAction";
import { toast } from "react-toastify";

const getAllPokemonAction = (offset, limit) => (dispatch) => {
  dispatch(setLoading(true));
  axios
    .get(`${config.base_url}/pokemon?offset=${offset}&limit=${limit}`)
    .then((response) => {
      dispatch(setPokemon(response.data));
      dispatch(setLoading(false));
    })
    .catch((error) => {
      dispatch(setLoading(false));
      console.log(error);
    });
};

const getPokemonDetailAction = (id) => (dispatch) => {
  dispatch(setLoading(true));
  axios
    .get(`${config.base_url}/pokemon/${id}`)
    .then((response) => {
      dispatch(setPokemonDetail(response.data));
      dispatch(setLoading(false));
    })
    .catch((error) => {
      dispatch(setLoading(false));
      console.log(error);
    });
};

const addTomyListPokemon = (value) => (dispatch) => {
  dispatch(setLoading(true));
  axios
    .post(`${config.base_url_api}/pokemon/create`, value)
    .then((response) => {
      dispatch(setLoading(false));
      toast.success("Create Succesfully");
      console.log(response);
    })
    .catch((error) => {
      dispatch(setLoading(false));
      toast.success(error);
      console.log(error);
    });
};

export { getAllPokemonAction, getPokemonDetailAction, addTomyListPokemon };
