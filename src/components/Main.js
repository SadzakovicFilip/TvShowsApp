import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../App.css";

function Main({shows}) {
  const topFifty = shows.slice(0,48).map((show) => {
    return (
      <div className="topFiftySingle" key={show.id}>
        <Link className="link" to={`/shows/${show.id}`}>
          <article className="article" key={show.id}>
            <img src={show.image.medium}></img>
            <h2 className="showName">{show.name}</h2>
            <h5 className="showRating">Imdb rating : {show.rating.average} ★</h5>
          </article>
        </Link>
      </div>
    );
  });
  return <div className="gridShow">
    {topFifty}
    </div>;
}

export default Main;
