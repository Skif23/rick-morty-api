import React from "react";
import "./App.css";
import CharacterFetching from "./Components/Character/CharacterFetching";
import CharacterInfo from "./Components/Character/CharacterInfo";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import EpisodeFetching from "./Components/Episodes/EpisodesFetching";
import EpisodeInfo from "./Components/Episodes/EpisodeInfo";
import LocationsFetching from "./Components/Locations/LocationsFetching";
import LocationsInfo from "./Components/Locations/LocationsInfo";
import About from "./Components/About/About";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />}></Route>
          <Route path={"character"} element={<CharacterFetching />} />
          <Route path={"episode"} element={<EpisodeFetching />} />
          <Route path={"location"} element={<LocationsFetching />} />
          <Route path={"about"} element={<About />} />
          <Route path={"character/:id"} element={<CharacterInfo />} />
          <Route path={"episode/:id"} element={<EpisodeInfo />} />
          <Route path={"location/:id"} element={<LocationsInfo />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
