import React, { useEffect, useState } from "react";
import "./styles/main.scss";
import { data } from "./data";
import { css } from "@emotion/core";
import images from "./img/*.*";

const App = () => {
  const [activePerson, setActivePerson] = useState("");
  const [steves, setSteves] = useState([]);

  const onPersonHover = (name) => {
    setActivePerson(name);
  };

  const onPersonHoverRemoved = () => {
    setActivePerson("");
  };

  useEffect(() => {
    let timeoutIDs = [];
    if (activePerson == "steve" && !steves.length) {
      timeoutIDs = [...Array(10).keys()].map((n) => {
        window.setTimeout(() => {
          console.log(n);
          setSteves([...Array(n).keys()].map((el) => ({ n: el })));
        }, n * 100);
      });

      return () => timeoutIDs.map((id) => window.clearTimeout(id));
    } else {
      timeoutIDs.map((id) => window.clearTimeout(id));
      setSteves([]);
    }
  }, [activePerson]);
  console.log("active", data?.[activePerson]?.backgroundColor);
  console.log("steves", steves);
  return (
    <div
      css={css`
        font-family: "Nunito", Helvetica, sans-serif;
        background-color: ${data?.[activePerson]?.backgroundColor ||
        "rgb(241, 241, 241)"};
      `}
    >
      <div
        css={css`
          max-width: 1000px;
          margin: 0 auto;
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
            // console.log("./img/" + info.image);
            return (
              <div
                id={name}
                className="person"
                onMouseOver={() => onPersonHover(name)}
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
          <div id="poggers" className="noHover">
            POGGERS
          </div>
          <div id="dev" className="noHover">
            9.2X developer
          </div>
          <div id="vincent-hey" className="noHover">
            heyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
          </div>
          <div id="india" className="noHover">
            India.
          </div>
          <div class="box">
            <b></b>
            <b></b>
            <b></b>
            <b></b>
            <b id="myboy"></b>
          </div>
          {steves.map((el) => (
            <div
              css={css`
                position: fixed;
                left: ${el.n * 100}px;
                width: 100px;
              `}
              className="noHover"
            >
              <img
                css={css`
                  width: ${100 + el.n * 10}px;
                `}
                src={Object.values(images["steve"])[0]}
                alt=""
                className="noHover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
