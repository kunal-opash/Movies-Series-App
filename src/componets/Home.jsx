import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import Data from "./sample.json";
import { useState } from "react";
function Home() {
  const filterData = Data.entries;
  const [item, setItem] = useState([]);
  const navigate = useNavigate();

  // console.log(filterData);
  const movieChnage = () => {
    navigate("/movie");
  };
  const seriesChange = () => {
    navigate("/series");
  };

  // const filterItem = (cateItem) => {
  //     const updateItem = filterData.filter((curele) => {
  //         // console.log(curele);
  //         return curele.programType === cateItem;
  //     });
  //     setItem(updateItem);
  //     console.log(updateItem);
  // }

  // const filterDataSeries = (cateItemSeries) => {
  //     const updateItemSeries = filterData.filter((curSeriesEle) => {
  //         return curSeriesEle.programType === cateItemSeries;
  //     })
  //     setItem(updateItemSeries);
  //     console.log(updateItemSeries);
  // }

  // const filterItem = (type) => {

  //     const updateData = filterData.filter((ele) => {
  //         // console.log("ele" , ele);
  //         return ele.programType === type;
  //     })
  //     setItem(updateData);
  //     // console.log(updateData);
  // }
  return (
    <div>
      <div
        className="container"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div className="card" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src="https://img.freepik.com/premium-vector/clapper-film-movie-icon-design_24877-23150.jpg"
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">Movie</h5>
            <p className="card-text"></p>
            <button
              onClick={(e) => movieChnage(e)}
              href="#"
              className="btn btn-primary"
            >
              Populer Movies
            </button>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src="https://img.freepik.com/premium-vector/clapper-film-movie-icon-design_24877-23150.jpg"
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">Series</h5>
            <p className="card-text"></p>
            <button
              onClick={(e) => seriesChange(e)}
              className="btn btn-primary"
            >
              Populer Series
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
