import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Main({ shows }) {
  const topFifty = shows.slice(0, 49).map((show) => {
    return (
      <div className="topFiftySingle" key={show.id}>
        <Link className="link" to={`/shows/${show.id}`}>
          <article className="article" key={show.id}>
            <img src={show.image.medium}></img>
            <h2 className="showName">{show.name}</h2>
            <h5 className="showRating">
              Imdb rating : {show.rating.average} ★
            </h5>
          </article>
        </Link>
      </div>
    );
  });

  return (
    <div className="body">
      <h1 className="title">
        <i>Comfy Nest tv Shows</i>{" "}
      </h1>
      <div className="logoDiv">
        <img src="../logos/comfy.png" alt="logo" className="comfyLogo" />
      </div>
      <div className="gridShow">{topFifty}</div>;
    </div>
  );
}

export default Main;
