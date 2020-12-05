import React, { useEffect, useState } from "react";
import "./styles/main.scss";
import { data } from "./data";
import { css } from "@emotion/core";
import images from "./img/*.*";
import PersonHover from "./PersonHover";

const App = () => {
  const [activePerson, setActivePerson] = useState("");
  const [steves, setSteves] = useState([]);
  const [overlayStyles, setOverlayStyles] = useState("");

  const [timeoutIDs, setTimeoutIDs] = useState([]);
  const onPersonHover = (name) => {
    setActivePerson(name);
  };

  const onPersonHoverRemoved = () => {
    setActivePerson("");
  };

  const getImagePath = (name) => {
    return Object.values(images[name])[0];
  };

  useEffect(() => {
    if (activePerson === "noah") {
      setOverlayStyles(`background-image: url(${getImagePath("india")})`);
    } else if (activePerson === "raffi") {
      setOverlayStyles(
        `background-image: url(https://4.bp.blogspot.com/-Gmx13XLzHo0/Tj4eRdB-6YI/AAAAAAAAB40/sNpJse1nBLY/s500/Swiss+Miss+logo+2010.jpg)`
      );
    } else {
      setOverlayStyles("");
    }
  }, [activePerson]);

  const getDecorations = (name) => {
    switch (name) {
      case "raffi":
        return <div id="choco" className="noHover"></div>;
      case "jonathan":
        return (
          <div id="poggers" className="noHover">
            POGGERS
          </div>
        );
        break;
      case "liam":
        return (
          <div id="dev" className="noHover">
            9.2X developer
          </div>
        );
      case "vincent":
        return (
          <div id="vincent-hey" className="noHover">
            heyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
          </div>
        );
      case "noah":
        return (
          <div id="india" className="noHover">
            India.
          </div>
        );
      case "marley":
        return (
          <div class="box">
            <b></b>
            <b></b>
            <b></b>
            <b></b>
            <b></b>
            <b></b>
            <b></b>
            <b></b>
          </div>
        );
      default:
        return null;
    }
  };
  useEffect(() => {
    if (activePerson === "steve" && !steves.length) {
      const timeoutIDs = [...Array(10).keys()].map((n) => {
        window.setTimeout(() => {
          console.log(n);
          setSteves([...Array(n).keys()].map((el) => ({ n: el })));
        }, n * 100);
      });
      setTimeoutIDs(timeoutIDs);

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
        id="overlay"
        css={css`
          ${overlayStyles}
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
                <div className="person">
                  <img
                    id={name}
                    src={Object.values(images[name])[0]}
                    alt=""
                    onMouseOver={() => onPersonHover(name)}
                    onMouseOut={onPersonHoverRemoved}
                  />
                  {getDecorations(name)}
                  <h2>{info.name}</h2>
                  <ul className="social-links">
                    {info.github && (
                      <li>
                        <a
                          href={`https://github.com/${info.github}`}
                          target="_blank"
                        >
                          <i class="fab fa-github"></i>
                        </a>
                      </li>
                    )}
                    {info.website && (
                      <li>
                        <a href={`https://${info.website}`} target="_blank">
                          <i class="fas fa-link"></i>
                        </a>
                      </li>
                    )}
                    {info.twitter && (
                      <li>
                        <a
                          href={`https://twitter.com/${info.twitter}`}
                          target="_blank"
                        >
                          <i class="fab fa-twitter"></i>
                        </a>
                      </li>
                    )}
                  </ul>
                  <p>{info.description}</p>
                </div>
              );
            })}
          </div>
          {/* <PersonHover active={activePerson === "jonathan"}>
            <div id="poggers" className="noHover">
              POGGERS
            </div>
          </PersonHover> */}
          {/* <PersonHover active={activePerson === "liam"}>
            <div id="dev" className="noHover">
              9.2X developer
            </div>
          </PersonHover> */}
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
                  position: fixed;
                  left: ${el.n * 100}px;
                  width: 100px;
                `}
                className="noHover"
              />
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
