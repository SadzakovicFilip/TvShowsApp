import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios, { all } from "axios";

function SingleShow({ shows }) {
  const { showId } = useParams();
  const num = parseFloat(showId);
  const oneShow = shows.find((show) => show.id === num);
  const [seasons, setSeasons] = useState([]);
  const [cast, setCast] = useState([]);
  useEffect(
    () => async () => {
      const seasons1 = await axios.get(
        ` https://api.tvmaze.com/shows/${showId}/seasons`
      );
      const cast1 = await axios.get(
        ` https://api.tvmaze.com/shows/${showId}/cast`
      );
      setSeasons(seasons1.data);
      setCast(cast1.data);
    },
    []
  );
    console.log(cast)
  const seasonsDate = seasons.map((item) => {
    return (
      <li key={item.id}>
        <i>Premiered on</i> {item.premiereDate} / <i>Ended on</i> {item.endDate}
      </li>
    );
  });
  const allCast = cast.map((item) => {
    return <li key={item.id}>{item.person.name}</li>;
  });

  return (
    <div>
      <Link
        to="/"
        style={{ textDecoration: "none", fontSize: "2vw" }}
      >{`← Go Back`}</Link>
        <div className="TvShowName">
          <h1>{oneShow.name}</h1>
          <h2 className="rating">Rating {oneShow.rating.average} ★</h2>
        </div>
      <div className="showInfo">
        <div className="gridInfo">
          <img
            src={oneShow.image.original}
            className="coverImg"
            alt="coverImg"
          ></img>
          
            <div className="seasons">
              <b>Seasons:({`${seasons.length}`})</b>
              <ol style={{ fontSize: "1.3vw" }}>{seasonsDate}</ol>
            
            </div>
            
            <div className="cast">
                <b>Cast</b>
              <ul className="castList">{allCast}</ul>
            </div>
         
        </div>
        <p className="Plot">
          <strong>Plot:</strong>
          <i>{oneShow.summary}</i>
        </p>
      </div>
    </div>
  );
}

export default SingleShow;
