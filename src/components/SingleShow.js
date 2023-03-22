import React, { useCallback, useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import axios from "axios";

function SingleShow({ shows }) {
  const [seasons, setSeasons] = useState([]);
  const [cast, setCast] = useState([]);
  const { showId } = useParams();

  const oneShow = shows.find((show) => show.id === Number(showId));

  const fetchData= useCallback(async()=>{
    const seasonsResponse = await axios.get(
      ` https://api.tvmaze.com/shows/${showId}/seasons`
    );
    const castResponse = await axios.get(
      ` https://api.tvmaze.com/shows/${showId}/cast`
    );
    setSeasons(seasonsResponse.data);
    setCast(castResponse.data);
  },[showId])

    useEffect(()=>{
      fetchData()
    },[showId])

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
      <div className="TvShowName">

        <h1>
          <i>{oneShow?.name}</i>
        </h1>

        <h2 className="rating">Rating {oneShow?.rating?.average} ★</h2>
        
      </div>
      <div className="showInfo">
        <div className="gridInfo">

          <img
            className="coverImg"
            src={oneShow?.image?.original}
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
          <i>{oneShow?.summary}</i>
        </p>

      </div>
    </div>
  );
}

export default SingleShow;
