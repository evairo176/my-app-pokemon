import axios from "axios";
import config from "../../config/config";
import { setPokemon, setPokemonDetail } from "./globalAction";
import { toast } from "react-toastify";

const getAllPokemonAction = (offset, limit) => (dispatch) => {
  axios
    .get(`${config.base_url}/pokemon?offset=${offset}&limit=${limit}`)
    .then((response) => {
      dispatch(setPokemon(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

const getPokemonDetailAction = (id) => (dispatch) => {
  axios
    .get(`${config.base_url}/pokemon/${id}`)
    .then((response) => {
      dispatch(setPokemonDetail(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

const addTomyListPokemon = (value) => (dispatch) => {
  axios
    .post(`${config.base_url_api}/pokemon/create`, value)
    .then((response) => {
      toast.success("Create Succesfully");
      console.log(response);
    })
    .catch((error) => {
      toast.success(error);
      console.log(error);
    });
};

export { getAllPokemonAction, getPokemonDetailAction, addTomyListPokemon };
