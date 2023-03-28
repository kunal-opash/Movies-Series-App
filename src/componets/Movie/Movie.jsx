import React, { useEffect } from "react";
import { useState } from "react";
import Data from "../Dummy_Api/sample.json";

function Movie() {
  // console.log(Data);
  const [item, setItem] = useState(Data.entries);
  const [loading, setLoading] = useState(null);
  const [imageLoadError, setImageLoadError] = useState(true);

  useEffect(() => {
    movieData();
    movieAssending();
  }, []);

  const byDefaultImg =
    "https://previews.123rf.com/images/briang77/briang771602/briang77160200065/51883561-movie-film-reel.jpg";

  function movieData() {
    const updateMovieData = item.filter((value) => {
      return value.programType === "movie";
    });
    setItem(updateMovieData);
    setLoading(updateMovieData);
  }

  const movieAssending = () => {
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
        <h1 className="mb-0">Movies</h1>
      </blockquote>
      {loading ? (
        // loader with ternary operators
        <div
          className="container"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {item.map((items) => {
            return (
              <div className="card" style={{ width: "18rem", margin: "10px" }}>
                <img
                  className="card-img-top"
                  src={items.images["Poster Art"].url}
                  alt="Card image cap"
                  onError={(e) => {
                    if (imageLoadError) {
                      setImageLoadError(false);
                      e.target.src = byDefaultImg;
                    }
                  }}
                />
                <div className="card-body">
                  <p className="card-text">{items.title}</p>
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

export default Movie;
