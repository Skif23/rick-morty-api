import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import "./charactercard.css";

function DataFetching() {
  const [posts, setPosts] = useState({ results: [] });
  const [id, setId] = useState("");

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="characters">
      <div className="heading-container">
        <h1 className="character-heading">Characters</h1>
      </div>
      <ul>
        {posts.results.map((post) => (
          <CharacterCard key={post.id} character={post} />
        ))}
      </ul>
    </div>
  );
}

export default DataFetching;
