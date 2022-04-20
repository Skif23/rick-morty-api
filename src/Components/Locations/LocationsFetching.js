import React, { useState, useEffect } from "react";
import axios from "axios";
import LocationsCard from "./LocationsCard";
import "./locationsfetching.css";

function LocationsFetching() {
  const [posts, setPosts] = useState({ results: [] });
  const [id, setId] = useState("");

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${id}`)
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="locations">
      <div className="locations-heading-container">
        <h1 className="locations-heading">Locations</h1>
      </div>
      <ul>
        {posts.results.map((post) => (
          <LocationsCard key={post.id} location={post} />
        ))}
      </ul>
    </div>
  );
}

export default LocationsFetching;
