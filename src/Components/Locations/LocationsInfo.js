import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import "./locationsinfo.css"

function LocationsInfo() {
  const params = useParams();
  const [location, setLocation] = useState({});
  useEffect(() => {
    console.log(params);
    axios
      .get(`https://rickandmortyapi.com/api/location/${params.id}`)
      .then((res) => {
        console.log(res);
        setLocation(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="info-holder">
      <div className="locations-info-holder">
        <p className="locations-info-name">Name: {location.name}</p>
        <p className="locations-info-type">Type: {location.type}</p>
        <p className="locations-info-dimension">
          Dimension: {location.dimension}
        </p>
      </div>
    </div>
  );
}

export default LocationsInfo;
