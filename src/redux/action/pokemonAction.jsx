import axios from "axios";
import config from "../../config/config";
import {
  setAction,
  setLoading,
  setMyPokemon,
  setPokemon,
  setPokemonDetail,
} from "./globalAction";
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

const addTomyListPokemonAction = (value) => (dispatch) => {
  dispatch(setLoading(true));
  axios
    .post(`${config.base_url_api}/pokemon/create`, value)
    .then((response) => {
      dispatch(setLoading(false));
      toast.success("Add My Pokemon Succesfully");
      console.log(response);
    })
    .catch((error) => {
      dispatch(setLoading(false));
      toast.error(error);
      // console.log(error);
    });
};

const getMyPokemonListAction = () => (dispatch) => {
  dispatch(setLoading(true));
  axios
    .get(`${config.base_url_api}/pokemon`)
    .then((response) => {
      dispatch(setLoading(false));
      dispatch(setMyPokemon(response.data.pokemon));
      // console.log(response);
    })
    .catch((error) => {
      dispatch(setLoading(false));
      console.log(error);
    });
};

const releaseMyPokemonListAction = (id, data) => (dispatch) => {
  dispatch(setLoading(true));
  axios
    .post(`${config.base_url_api}/pokemon/release/${id}`, data)
    .then((response) => {
      dispatch(setLoading(false));
      dispatch(setAction(response.data.pokemon));
      toast.success(response.data.message);
      // console.log(response);
    })
    .catch((error) => {
      dispatch(setLoading(false));
      toast.error(error.response.data.message);
      console.log(error);
    });
};

const renameMyPokemonListAction = (id, data) => (dispatch) => {
  dispatch(setLoading(true));
  axios
    .post(`${config.base_url_api}/pokemon/rename/${id}`, data)
    .then((response) => {
      dispatch(setLoading(false));
      dispatch(setAction(response.data.pokemon));
      toast.success(response.data.message);
      // console.log(response);
    })
    .catch((error) => {
      dispatch(setLoading(false));
      toast.error(error.response.data.message);
      console.log(error);
    });
};

export {
  getAllPokemonAction,
  getPokemonDetailAction,
  addTomyListPokemonAction,
  getMyPokemonListAction,
  releaseMyPokemonListAction,
  renameMyPokemonListAction,
};
