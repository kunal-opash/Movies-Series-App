import React, { useEffect, useState } from "react";
import Data from "./sample.json";
function Home2() {
  console.log(Data.entries);
  const [item, setItem] = useState(Data.entries);
  // console.log(data);
const [loading , setLoading] = useState(null);
  useEffect(() => {
    movieFuntion();
  }, [])




  function movieFuntion() {
    const updateMovieData = item.filter((value) => {
      return value.programType === "movie";
    })
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

export default Home2;
