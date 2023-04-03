import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PaginationComponent from "../../components/moleculars/PaginationComponent";
import {
  addTomyListPokemon,
  getAllPokemonAction,
} from "../../redux/action/pokemonAction";

function Home() {
  const [offset, setOffset] = useState(20);
  const limit = 20;
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const storeData = useSelector((store) => store?.global);
  const { pokemon } = storeData;

  useEffect(() => {
    const getPokemon = async () => {
      dispatch(await getAllPokemonAction(offset, limit));
    };

    getPokemon();
  }, [dispatch, offset]);

  const addPokemon = async (value) => {
    const data = {
      name: value,
    };
    dispatch(await addTomyListPokemon(data));
  };

  return (
    <Fragment>
      <div className="container mt-3">
        <div className="card">
          <div className="card-header">
            <div
              className="njdwadj"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>Pokemon List</div>
              <button
                className="btn btn-secondary"
                onClick={() => navigate("/my-pokemon")}
              >
                My Pokemon List
              </button>
            </div>
          </div>
          <div className="card-body">
            <table className="table">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>Detail</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {pokemon.results?.map((row, key) => {
                  return (
                    <tr key={key}>
                      <td>{offset - 20 + key + 1}</td>
                      <td>{row?.name}</td>
                      <td>
                        <button
                          className="btn btn-warning"
                          onClick={() =>
                            navigate(`/pokemon/${row?.url.substr(34, 2)}`)
                          }
                        >
                          {/* https://pokeapi.co/api/v2/pokemon/ */}
                          More Information
                        </button>
                      </td>
                      <td>
                        <button
                          className="btn btn-primary"
                          onClick={() => addPokemon(row?.name)}
                        >
                          {/* https://pokeapi.co/api/v2/pokemon/ */}
                          Add to list pokemon
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <PaginationComponent total={pokemon?.count} setOffset={setOffset} />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Home;
