import axios from "axios";
import config from "../../config/config";

const getAllPokemonAction = () => () => {
  axios
    .get(`${config.base_url}/pokemon`)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

export { getAllPokemonAction };
