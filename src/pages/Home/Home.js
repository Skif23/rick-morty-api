import React from "react";
import "./home.css";
function Home() {
  return (
    <div>
      <div className="home-container">
        <div className="home-image"></div>
        <h1 className="home-title">The Rick & Morty Library</h1>
        <p>
          Welcome to the Rick & Morty library where you can find any character,
          episode and location from the TV series
        </p>
      </div>
    </div>
  );
}

export default Home;
