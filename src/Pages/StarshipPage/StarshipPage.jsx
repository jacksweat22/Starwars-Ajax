import React from "react";
import { Link } from "react-router-dom";
import "./StarshipPage.css";

const StarshipPage = ({ location }) => {
  const starship = location.state;
  return (
    <div className="StarshipContainer">
      {starship ? (
        <div className="StarshipPage">
          <div className="modelTitle">
          <span className="name" >NAME:</span>
          <span>{starship.name}</span>
          </div>
          <div className='modelNum'>
          <span className="name"> MODEL:</span>
          <span>{starship.model}</span>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <Link className="return" to="/">RETURN</Link>
        </div>
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
};

export default StarshipPage;