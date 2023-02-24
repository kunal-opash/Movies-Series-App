import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Data from "./sample.json";
function Series() {
    // console.log(Data);
    const [item , setItem] = useState(Data.entries);
    const navigate = useNavigate();  
    const [imageLoadError, setImageLoadError] = useState(true);
    const [loading , setLoading] = useState(null);
    useEffect(() => {
      seriesFunction();
    },[])

    const fallbackImage =
    "https://previews.123rf.com/images/briang77/briang771602/briang77160200065/51883561-movie-film-reel.jpg";

    if(item.length === 0){
      navigate("/");
    }

    // assending order release Year 
    const numAssendingSeries = item.sort((a , b) => a.releaseYear - b.releaseYear);

    // name assending oeder    
    const nameAssendingSeries = item.sort((function (a , b) {
      if(a.title < b.title) {return -1};
      if(a.title > b.title) {return 1};
      return 0;
    }))

    function seriesFunction() {
      const updateSeriesData = item.filter((value) => {
        return value.programType === "series";
      })
      setItem(updateSeriesData);
      setLoading(updateSeriesData);
    }
    return (
        <div> 
        <blockquote className="blockquote text-center">
        <h1 className="mb-0">
          Series
        </h1>
      </blockquote>
      {loading ?   <div className="container" style={{display : "flex" , flexWrap : "wrap" , justifyContent : "space-between" }}>
            
      {
          item.map((ele) => {
              return (
                  <div className="card" style={{ width: "18rem" , margin : "10px" }}>
              <img className="card-img-top" src={ele.images["Poster Art"].url} alt="Card image cap" onError={(e) => {
                    if (imageLoadError) {
                      setImageLoadError(false);
                      e.target.src = fallbackImage;
                      // console.clear();
                    }
                  }} />
              
              <div className="card-body">
                <p className="card-text">
                  {ele.title}
                </p>
              </div>
            </div>
              );
              
          })
      }

      </div> : <h6><b>Loading...</b></h6>}
        </div>
    );
}
export default Series;