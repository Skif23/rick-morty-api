import React from "react";
import { useNavigate } from "react-router-dom";
import "./locationscard.css";

const LocationsCard = ({ location }) => {
  let navigate = useNavigate();
  return (
    <div
      className="location"
      onClick={() => {
        navigate(`/location/${location.id}`);
      }}
    >
      <div className="location-container">
        <div className="card-list">
          <div className="card-container">
            <div className="location-info">
              <p className="location-name">{location.name}</p>
              <p className="location-type">{location.type}</p>
              <p className="location-dimension">{location.dimension}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationsCard;
