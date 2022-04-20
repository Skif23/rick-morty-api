import React from "react";
import { useNavigate } from "react-router-dom";
import "./episodescard.css";

const EpisodeCard = ({ episode }) => {
  let navigate = useNavigate();
  return (
    <div
      className="episode"
      onClick={() => {
        navigate(`/episode/${episode.id}`);
      }}
    >
      <div className="episode-container">
        <div className="card-list">
          <div className="card-container">
            <div className="episode-info">
              <p className="episode-name">{episode.name}</p>
              <p className="episode-date">{episode.air_date}</p>
              <p className="episode-number">{episode.episode}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EpisodeCard;
