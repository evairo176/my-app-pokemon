import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";

function MyPokemonList() {
  const navigate = useNavigate();
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
          <div className="card-body">dwadw</div>
        </div>
      </div>
    </Fragment>
  );
}

export default MyPokemonList;
