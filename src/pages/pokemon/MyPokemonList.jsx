import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getMyPokemonListAction,
  releaseMyPokemonListAction,
  renameMyPokemonListAction,
} from "../../redux/action/pokemonAction";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function MyPokemonList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const storeData = useSelector((store) => store?.global);
  const { my_pokemon, action } = storeData;

  const [number, setNumber] = useState("");
  const [dataUp, setDataUp] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    const getMyPokemonList = async () => {
      dispatch(await getMyPokemonListAction());
    };

    getMyPokemonList();
  }, [dispatch, action]);

  const releaseHandle = async (id) => {
    const data = {
      number: number,
    };

    dispatch(await releaseMyPokemonListAction(id, data));
    handleClose();
  };

  const renameHandle = async (id) => {
    const data = {
      name: name,
    };

    dispatch(await renameMyPokemonListAction(id, data));
    handleClose();
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (value) => {
    setDataUp(value);
    setShow(true);
  };

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
              <div>My Pokemon List</div>
              <button className="btn btn-danger" onClick={() => navigate("/")}>
                Back
              </button>
            </div>
          </div>
          <div className="card-body">
            <table className="table">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>Release</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {my_pokemon?.map((row, key) => {
                  return (
                    <tr key={key}>
                      <td>{key + 1}</td>
                      <td>{row?.name}</td>
                      <td>
                        {row?.release ? (
                          <span
                            className="release"
                            style={{
                              background: "#0eda0e",
                              padding: "2px 4px",
                              borderRadius: "15px",
                            }}
                          >
                            release
                          </span>
                        ) : (
                          <button
                            className="btn btn-primary"
                            onClick={() =>
                              handleShow({
                                id: row?.id,
                                name: row?.name,
                                type: "1",
                              })
                            }
                          >
                            Klik to Release
                          </button>
                        )}
                      </td>
                      <td>
                        <button
                          className="btn btn-warning"
                          onClick={() => {
                            handleShow({
                              id: row?.id,
                              name: row?.name,
                              type: "2",
                            });
                            setName(row?.name);
                          }}
                        >
                          Edit Name
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {dataUp?.type === "1" ? "Make a Release " : "Rename "}
            {dataUp?.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {dataUp?.type === "1" ? (
            <p className="text-danger">
              Input number prime, if number not prime then error
            </p>
          ) : (
            ""
          )}

          <form action="">
            {dataUp?.type === "1" ? (
              <input
                type="number"
                className="form-control"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            ) : (
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            )}
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              if (dataUp?.type === "1") {
                releaseHandle(dataUp?.id);
              } else {
                renameHandle(dataUp?.id);
              }
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
}

export default MyPokemonList;
