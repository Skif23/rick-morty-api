import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import "./characterinfo.css";

function CharacterInfo() {
  const params = useParams();
  const [character, setCharacter] = useState({});
  useEffect(() => {
    console.log(params);
    axios
      .get(`https://rickandmortyapi.com/api/character/${params.id}`)
      .then((res) => {
        console.log(res);
        setCharacter(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="info-holder">
      <div className="character-info-image">
        <img alt={character.name} src={character.image}></img>
      </div>
      <div className="character-info-holder">
        <p className="character-info-name">Name: {character.name}</p>
        <p className="character-infos">
          <span className="bold-info">Status:</span> {character.status}
        </p>
        <p className="character-infos">
          <span className="bold-info">Gender:</span> {character.gender}
        </p>
        <p className="character-infos">
          <span className="bold-info">Type:</span> {character.type || "--"}
        </p>
        <p className="character-infos">
          <span className="bold-info">Origin: </span>
          {character.origin ? character.origin.name : ""}
        </p>
      </div>
    </div>
  );
}

export default CharacterInfo;
