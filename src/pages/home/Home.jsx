import React, { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllPokemonAction } from "../../redux/action/pokemonAction";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getPokemon = async () => {
      dispatch(await getAllPokemonAction());
    };

    getPokemon();
  }, [dispatch]);

  return (
    <Fragment>
      <div className="container-pokemon">
        <div className="container-content">dwd</div>
      </div>
    </Fragment>
  );
}

export default Home;
