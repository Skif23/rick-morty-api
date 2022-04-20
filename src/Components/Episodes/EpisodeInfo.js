import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import "./episodeinfo.css";

function EpisodeInfo() {
  const params = useParams();
  const [episode, setepisode] = useState({});
  useEffect(() => {
    console.log(params);
    axios
      .get(`https://rickandmortyapi.com/api/episode/${params.id}`)
      .then((res) => {
        console.log(res);
        setepisode(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="info-holder">
      <div className="episode-info-holder">
        <p className="episode-info-name">Name: {episode.name}</p>
        <p className="episode-info-name">Air-Date: {episode.air_date}</p>
        <p className="episode-info-name">Episode: {episode.episode}</p>
      </div>
    </div>
  );
}

export default EpisodeInfo;
