import React from "react";
import "./about.css";
function About() {
  return (
    <div className="about-container">
      <div className="about">
        <div className="container">
          <div className="text-group">
            <h2 className="text-group-heading">About this Project</h2>
            <p>
              Here you will find all the characters, locations and episodes from
              the TV show Rick and Morty. You can get additional information by
              clicking on the cards. This is a project that I did for my web
              development portfolio. This project utilizes the Rick and Morty
              API by Axel Fuhrmann, you can learn more about it by clicking on
              the link below. Also this template is taken from a friend who was
              the same layout credits to{" "}
              <a
                href="https://github.com/ordance0208"
                target={"_blank"}
                className="ord"
              >
                Ordan
              </a>
              .
            </p>
            <strong>
              Rick and Morty is created by Justin Roiland and Dan Harmon for
              Adult Swim. The data and images are used without claim of
              ownership and belong to their respective owners.
            </strong>
          </div>
          <div className="text-group">
            <h2 className="text-group-heading">About me</h2>
            <p>
              My name is Stefan Talevski and I am an entry level Frontend
              Developer with constantly expanding knowledge in the Web
              Development industry. This is and will be a project for my
              portfolio Website and I am looking forward for getting an
              intership in this amazing industry.
            </p>
          </div>
          <div className="text-group">
            <h2 className="text-group-heading">Links</h2>
            <a
              href="https://www.linkedin.com/in/stefan-talevski-53337a238/"
              target={"_blank"}
              className="link"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Skif23"
              target={"_blank"}
              className="link"
            >
              GitHub Profile
            </a>
            <a
              href="https://github.com/Skif23/rick-morty-api"
              target="_blank"
              className="link"
            >
              GitHub Repository
            </a>
            <a
              href="https://rickandmortyapi.com/"
              target="_blank"
              className="link"
            >
              Rick and Morty API
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
