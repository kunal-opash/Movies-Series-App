import React from "react";
import "../css/style.css";
// import { useNavigate } from "react-router-dom";
function Header() {
  // const navigate = useNavigate();
  // function handleChange() {
  //   navigate("/");
  // }

  return (
    <>
      <div className="header-title">
        <div className="header" style={{ display: "flex" }}>
          <h2 className="header_in" style={{ cursor: "pointer" }}>
            DEMO Streaming
          </h2>
         
        </div>
        <div className="title" style={{ display: "flex" }}>
          <h2 className="title_in" style={{ cursor: "pointer" }}>
            Populer Titles
          </h2>
        </div>
      </div>
    </>
  );
}
export default Header;
