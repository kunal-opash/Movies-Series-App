import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Data from "../Dummy_Api/sample.json";

function Series() {
  // console.log(Data);

  const [item, setItem] = useState(Data.entries);
  const [imageLoadError, setImageLoadError] = useState(true);
  const [loading, setLoading] = useState(null);

  const navigate = useNavigate();
  console.log(navigate);

  function seriesData() {
    const updateSeriesData = item.filter((value) => {
      return value.programType === "series";
    });
    setItem(updateSeriesData);
    setLoading(updateSeriesData);
  }

  useEffect(() => {
    seriesData();
    seriesAssending();
  }, []);

  const byDefaultImg =
    "https://previews.123rf.com/images/briang77/briang771602/briang77160200065/51883561-movie-film-reel.jpg";

  const seriesAssending = () => {
    let sortedItems = item.sort((p1, p2) =>
      p1.releaseYear < p2.releaseYear
        ? -1
        : p1.releaseYear > p2.releaseYear
        ? 1
        : 0
    );
    console.log(sortedItems);
  };

  return (
    <div>
      <blockquote className="blockquote text-center">
        <h1 className="mb-0">Series</h1>
      </blockquote>
      {loading ? (
        <div
          className="container"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {item.map((ele) => {
            return (
              <div className="card" style={{ width: "18rem", margin: "10px" }}>
                <img
                  className="card-img-top"
                  src={ele.images["Poster Art"].url}
                  alt="Card image cap"
                  onError={(e) => {
                    if (imageLoadError) {
                      setImageLoadError(false);
                      e.target.src = byDefaultImg;
                    }
                  }}
                />

                <div className="card-body">
                  <p className="card-text">{ele.title}</p>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
}
export default Series;
