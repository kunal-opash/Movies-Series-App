import React from "react";
import { useNavigate } from "react-router-dom";
import "../componets/css/style.css"
// import { useNavigate } from "react-router-dom";
function Header() {
  
  // const navigate = useNavigate();
  // function handleChange() {
  //   navigate("/");
  // }
    return (

<div>
        <div className="header" style={{display : "flex"}}>
  <h2  className="header_in" style={{marginRight : "1450px" , cursor: "pointer"}}>DEMO Streaming</h2>
</div>
<div className="title" >
  <h2  className="title_in" style={{marginRight : "1500px"  , cursor: "pointer"}}>Populer Titles</h2>
</div>
</div> 
    );
}
export default Header;