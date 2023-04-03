import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getPokemonDetailAction } from "../../redux/action/pokemonAction";

function PokemonDetails() {
  const dispatch = useDispatch();
  const storeData = useSelector((store) => store?.global);
  const { pokemon_detail } = storeData;
  const navigate = useNavigate();
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    const getPokemonDetail = async () => {
      dispatch(getPokemonDetailAction(id));
    };

    getPokemonDetail();
  }, [dispatch, id]);

  return (
    <Fragment>
      <div className="container mt-3">
        <div className="card">
          <div className="card-header">
            {" "}
            <div
              className="njdwadj"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>Pokemon Detail</div>
              <button className="btn btn-danger" onClick={() => navigate("/")}>
                Back
              </button>
            </div>
          </div>
          <div className="card-body">
            <div className="content-body">
              <div className="items">
                <b>ID</b>: <span>{pokemon_detail?.id}</span>
              </div>
              <div className="items">
                <b>Name</b>: <span>{pokemon_detail?.name}</span>
              </div>
              <div className="items">
                <b>Order</b>: <span>{pokemon_detail?.order}</span>
              </div>
              <div className="items">
                <b>Weight</b>: <span>{pokemon_detail?.weight}</span>
              </div>
              <div className="items">
                <b>Is Default</b>:{" "}
                <span>{pokemon_detail?.is_default ? "true" : "false"}</span>
              </div>
              <div className="items">
                <b>Base Experients</b>:{" "}
                <span>{pokemon_detail?.base_experience}</span>
              </div>
              <div className="items">
                <b>Sprites</b>:{" "}
                <span>
                  <ul>
                    <li>
                      {" "}
                      <div>back_female:</div>
                      <div>
                        {pokemon_detail?.sprites?.back_female && (
                          <img
                            src={pokemon_detail?.sprites?.back_female}
                            className="App-logo"
                            alt="back_female"
                          />
                        )}
                      </div>
                    </li>
                    <li>
                      {" "}
                      <div>back_shiny:</div>
                      {pokemon_detail?.sprites?.back_shiny && (
                        <img
                          src={pokemon_detail?.sprites?.back_shiny}
                          className="App-logo"
                          alt="back_female"
                        />
                      )}
                    </li>
                    <li>
                      {" "}
                      <div>back_shiny_female: </div>
                      {pokemon_detail?.sprites?.back_shiny_female && (
                        <img
                          src={pokemon_detail?.sprites?.back_shiny_female}
                          className="App-logo"
                          alt="back_female"
                        />
                      )}
                    </li>
                    <li>
                      <div>front_default:</div>
                      {pokemon_detail?.sprites?.front_default && (
                        <img
                          src={pokemon_detail?.sprites?.front_default}
                          className="App-logo"
                          alt="back_female"
                        />
                      )}
                    </li>
                    <li>
                      {" "}
                      <div>front_shiny:</div>
                      {pokemon_detail?.sprites?.front_shiny && (
                        <img
                          src={pokemon_detail?.sprites?.front_shiny}
                          className="App-logo"
                          alt="back_female"
                        />
                      )}
                    </li>
                    <li>
                      <div>front_female:</div>
                      {pokemon_detail?.sprites?.front_female && (
                        <img
                          src={pokemon_detail?.sprites?.front_female}
                          className="App-logo"
                          alt="back_female"
                        />
                      )}
                    </li>
                    <li>
                      {" "}
                      <div>
                        back_default:{" "}
                        <image src={pokemon_detail?.sprites?.back_default} />
                      </div>
                      {pokemon_detail?.sprites?.back_default && (
                        <img
                          src={pokemon_detail?.sprites?.back_default}
                          className="App-logo"
                          alt="back_female"
                        />
                      )}
                    </li>
                    <li>
                      <div>front_shiny_female: </div>
                      {pokemon_detail?.sprites?.front_shiny_female && (
                        <img
                          src={pokemon_detail?.sprites?.front_shiny_female}
                          className="App-logo"
                          alt="back_female"
                        />
                      )}
                    </li>
                  </ul>
                </span>
              </div>
              <div className="items">
                <b>Abilities</b>:{" "}
                <span>
                  <ul>
                    {pokemon_detail?.abilities
                      ? pokemon_detail?.abilities?.map((row, key) => {
                          return (
                            <Fragment>
                              <li>
                                <div>Name: {row?.ability?.name}</div>
                                <div>
                                  {row?.is_hidden
                                    ? "is hidden: true"
                                    : "is hidden: false"}
                                </div>
                                <div>
                                  {" slot: "}
                                  {row?.slot}
                                </div>
                              </li>
                            </Fragment>
                          );
                        })
                      : "Empty"}
                  </ul>
                </span>
              </div>
              <div className="items">
                <b>Types</b>:{" "}
                <span>
                  <ul>
                    {pokemon_detail?.types
                      ? pokemon_detail?.types?.map((row, key) => {
                          return (
                            <Fragment>
                              <li>
                                <div>Name: {row?.type?.name}</div>
                              </li>
                            </Fragment>
                          );
                        })
                      : "Empty"}
                  </ul>
                </span>
              </div>
              <div className="items">
                <b>Forms</b>:{" "}
                <span>
                  <ul>
                    {pokemon_detail?.forms
                      ? pokemon_detail?.forms?.map((row, key) => {
                          return (
                            <Fragment>
                              <li>
                                <div>Name: {row?.name}</div>
                              </li>
                            </Fragment>
                          );
                        })
                      : "Empty"}
                  </ul>
                </span>
              </div>
              <div className="items">
                <b>Game Indices</b>:{" "}
                <span>
                  <ul>
                    {pokemon_detail?.game_indices
                      ? pokemon_detail?.game_indices?.map((row, key) => {
                          return (
                            <Fragment>
                              <li>
                                <div>Game Index: {row?.game_index}</div>
                                <div>version: {row?.version?.name}</div>
                              </li>
                            </Fragment>
                          );
                        })
                      : "Empty"}
                  </ul>
                </span>
              </div>
              <div className="items">
                <b>Moves</b>:{" "}
                <span>
                  <ul>
                    {pokemon_detail?.moves
                      ? pokemon_detail?.moves?.map((row, key) => {
                          return (
                            <Fragment>
                              <li>
                                <div>Name: {row?.move?.name}</div>
                                <div>
                                  version group detail:
                                  <ul>
                                    {row?.version_group_details?.map(
                                      (vgd, key) => {
                                        return (
                                          <Fragment>
                                            <li>
                                              {" "}
                                              Version grup Name{" "}
                                              {vgd?.version_group?.name}
                                            </li>
                                            <li>
                                              level_learned_at :{" "}
                                              {vgd?.level_learned_at}
                                            </li>
                                          </Fragment>
                                        );
                                      }
                                    )}
                                  </ul>
                                </div>
                              </li>
                            </Fragment>
                          );
                        })
                      : "Empty"}
                  </ul>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default PokemonDetails;
