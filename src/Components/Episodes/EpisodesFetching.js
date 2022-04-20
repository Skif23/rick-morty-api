import React, { useState, useEffect } from "react";
import axios from "axios";
import EpisodesCard from "./EpisodesCard";
import "./episodefetching.css";

function EpisodeFetching() {
  const [posts, setPosts] = useState({ results: [] });
  const [id, setId] = useState("");

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/episode/${id}`)
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="episodes">
      <div className="heading-container">
        <h1 className="episodes-heading">Episodes</h1>
      </div>
      <ul>
        {posts.results.map((post) => (
          <EpisodesCard key={post.id} episode={post} />
        ))}
      </ul>
    </div>
  );
}

export default EpisodeFetching;
