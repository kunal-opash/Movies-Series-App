import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import Data from "../Dummy_Api/sample.json";

function Home() {
  const filterData = Data.entries;
  console.log(filterData);

  const navigate = useNavigate();

  const movieClick = () => {
    navigate("/movie");
  };
  const seriesClick = () => {
    navigate("/series");
  };

  return (
    <div>
      <div className="container" style={{ display: "flex", marginTop: "12px" }}>
        <div
          className="card"
          style={{
            width: "18rem",
            marginRight: "30px",
            backgroundColor: "gray",
          }}
        >
          <img
            className="card-img-top"
            src="https://img.freepik.com/premium-vector/clapper-film-movie-icon-design_24877-23150.jpg"
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title"> Populer Movies</h5>
            <p className="card-text"></p>
            <button
              onClick={(e) => movieClick(e)}
              href="#"
              className="btn btn-dark"
            >
              Movies
            </button>
          </div>
        </div>
        <div
          className="card"
          style={{ width: "18rem", backgroundColor: "gray" }}
        >
          <img
            className="card-img-top"
            src="https://img.freepik.com/premium-vector/clapper-film-movie-icon-design_24877-23150.jpg"
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">Populer Series</h5>
            <p className="card-text"></p>
            <button onClick={(e) => seriesClick(e)} className="btn btn-dark">
              Series
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
