import React, { useEffect } from "react";
import { useState } from "react";
import Data from "./sample.json";
function Movie() {
  // console.log(Data);
  const [item, setItem] = useState(Data.entries);
  const [loading, setLoading] = useState(null);
  const [imageLoadError, setImageLoadError] = useState(true);
  const [hasError, setError] = React.useState(false);
  useEffect(() => {
    movieFunction();
  }, []);

  const fallbackImage =
    "https://previews.123rf.com/images/briang77/briang771602/briang77160200065/51883561-movie-film-reel.jpg";

  const numAssending = item.sort((a, b) => a.releaseYear - b.releaseYear);
  // console.log("numAssending", numAssending);

  const nameAssending = item.sort(function (a, b) {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  });
  // console.log("nameAssending", nameAssending);

  // function movieFunction() {
  //   const updateMovieData = item.filter((value) => {
  //     return value.programType === "movie";
  //   });
  //   setItem(updateMovieData);
  //   setLoading(true);
  // }
  function movieFunction(){
    const updateMovieData = item.filter((value) => {
      return value.programType === "movie";
    });
    setItem(updateMovieData);
    setLoading(updateMovieData);
  }
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
                      e.target.src = fallbackImage;
                      // console.clear();
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
        "Loading..."
      )}
    </div>
  );
}

export default Movie;
