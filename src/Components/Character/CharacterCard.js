import React from "react";
import { useNavigate } from "react-router-dom";
import "./charactercard.css";

const CharacterCard = ({ character }) => {
  let navigate = useNavigate();
  return (
    
    <div
      className="card"
      onClick={() => {
        navigate(`/character/${character.id}`);
      }}
    >
      <div className="container">
        <div className="character-image">
          <img alt={character.name} src={character.image}></img>
          <p className="character-status" data-status={character.status && character.status.toLowerCase()}>{character.status}</p>
        </div>

        <div className="character-info">
          <p className="character-name">{character.name}</p>
          <p className="character-species">{character.species}</p>
        </div>
      </div>
    </div>
    
  );
};

export default CharacterCard;
