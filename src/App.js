import React, { useState } from "react";
import "./styles/main.scss";
import { data } from "./data";
import { css } from "@emotion/core";
import images from "./img/*.*";

const App = () => {
  const [activePerson, setActivePerson] = useState("");

  const onPersonHover = (name) => {
    setActivePerson(name);
  };

  const onPersonHoverRemoved = () => {
    setActivePerson("");
  };

  return (
    <div
      css={css`
        max-width: 1000px;
        margin: 0 auto;
        font-family: "Nunito", Helvetica, sans-serif;
        background-color: rgb(241, 241, 241);
      `}
    >
      <h1
        css={css`
          text-align: center;
          font-size: 48px;
          padding: 25px 0;
        `}
      >
        {activePerson || `School 2.0 Yearbook`}
      </h1>
      <div className="grid-container">
        {Object.entries(data).map(([name, info]) => {
          console.log("./img/" + info.image);
          return (
            <div
              id={name}
              className="person"
              onMouseOver={() => onPersonHover(info.name)}
              onMouseOut={onPersonHoverRemoved}
            >
              <img src={Object.values(images[name])[0]} alt="" />{" "}
              <h2>{info.name}</h2>
              <ul className="social-links">
                {info.github && (
                  <li>
                    <a href={info.github}>{info.github}</a>
                  </li>
                )}
                {info.website && (
                  <li>
                    <a href={info.website}>{info.website}</a>
                  </li>
                )}
                {info.twitter && (
                  <li>
                    <a href={`https://twitter.com/{info.twitter}`}>
                      {info.twitter}
                    </a>
                  </li>
                )}
              </ul>
              <p>{info.description}</p>
            </div>
          );
        })}
        <div id="poggers">POGGERS</div>
        <div id="dev">9.2X developer</div>
      </div>
    </div>
  );
};

export default App;
