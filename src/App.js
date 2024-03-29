import React, { useEffect, useState } from "react";
import "./styles/main.scss";
import { data } from "./data";
import { css } from "@emotion/core";
import images from "./img/*.*";
import dhruvikvideo from "./video/dhruvik.mp4";
import PersonHover from "./PersonHover";
import Stick from "./Stick";
import Cube from "./Cube";
import TaylorComponent from "./styles/TaylorComponent";
const CuriusSvg = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 126 123"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="25.2"
      y="22.05"
      width="100.8"
      height="100.8"
      rx="20"
      fill="#FEE533"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M80.8 8H20C13.3726 8 8 13.3726 8 20V80.8C8 87.4274 13.3726 92.8 20 92.8H80.8C87.4274 92.8 92.8 87.4274 92.8 80.8V20C92.8 13.3726 87.4274 8 80.8 8ZM20 0C8.95431 0 0 8.9543 0 20V80.8C0 91.8457 8.9543 100.8 20 100.8H80.8C91.8457 100.8 100.8 91.8457 100.8 80.8V20C100.8 8.95431 91.8457 0 80.8 0H20Z"
      fill="black"
    />
  </svg>
);

const App = () => {
  const [activePerson, setActivePerson] = useState("");
  const [steves, setSteves] = useState([]);
  const [overlayStyles, setOverlayStyles] = useState("");
  const [drupey, setDrupey] = useState(null);

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
      setOverlayStyles(`background-image: url(${getImagePath("swiss_miss")})`);
    } else if (activePerson === "geffen") {
      setOverlayStyles(`background-image: url(${getImagePath("galaxy")})`);
    } else if (activePerson === "bonnie") {
      setOverlayStyles(
        `background-image: url(${getImagePath(
          "bonniebkgd"
        )}); background-size: 531px 334px`
      );
    } else if (activePerson === "santi") {
      setOverlayStyles(`background-image: url(${getImagePath("onion")})`);
    } else if (activePerson === "harshu") {
      setOverlayStyles(`background-image: url(${getImagePath("covid")})`);
    } else if (activePerson === "dhruvik") {
      setOverlayStyles(`background-image: url(${getImagePath("drupey")})`);
    } else if (activePerson === "david") {
      setOverlayStyles(
        `background-image: linear-gradient(135deg, rgb(42, 60, 173), rgb(59, 153, 199));
        font-family: "Croissant One";
        font-size: 14px;`
      );
    } else if (activePerson === "athena") {
      setOverlayStyles(
        `background-image: url(${getImagePath("pineapple_athena")})`
      );
    } else if (activePerson === "azlen") {
      setOverlayStyles(
        `background-image: url(${getImagePath("garlic_bread_azlen")})`
      );
    } else if (activePerson === "amanda") {
      setOverlayStyles(
        `background-image: url(${getImagePath("keyboard_amanda")})`
      );
    } else if (activePerson === "marley") {
      setOverlayStyles(`background-image: url(${getImagePath("geometric")})`);
    } else if (activePerson === "ethan") {
      setOverlayStyles(
        `background-image: url(${getImagePath("keyboard_ethan")})`
      );
    } else if (activePerson === "felipe") {
      setOverlayStyles(`background-image: url(${getImagePath("salsa2")})`);
    } else {
      setOverlayStyles("");
    }
  }, [activePerson]);

  // just for dhruvik
  useEffect(() => {
    if (activePerson === "dhruvik") {
      setDrupey(
        <div id="dhruvik-swag" className="noHover">
          {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
          <video width="852" height="480" autoPlay="autoplay">
            <source src={dhruvikvideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      );
    } else {
      setDrupey(null);
    }
  }, [activePerson]);

  const getDecorations = (name) => {
    switch (name) {
      case "bonnie":
        return (
          <div id="bonnie-beer" className="noHover">
            {[...Array(10).keys()].map((el) => (
              <div>
                <img
                  css={css`
                    width: 70px !important;
                  `}
                  src={getImagePath("beer")}
                  alt=""
                />
              </div>
            ))}
          </div>
        );
      case "raffi":
        return <div id="choco" className="noHover"></div>;
      case "jonathan":
        return (
          <div id="poggers" className="noHover">
            POGGERS
          </div>
        );
        break;
      // case "matt":
      //   return (
      //     <div id="scooby" className="noHover">
      //       <img>
      //     </div>
      //   );
      case "liam":
        return (
          <div id="dev" className="noHover">
            9.2X developer
          </div>
        );
      case "vincent":
        return (
          <div id="vincent-hey" className="noHover">
            heyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
          </div>
        );
      case "taylor":
        return <TaylorComponent />;
      case "kesava":
        return (
          <div id="kesava-magic" className="noHover">
            <div id="kesava-text">
              Rubik's cube helped this founder leave his coconut farm in India
              and get $3 million in funding for his startup in less than two
              years
            </div>

            <Cube />
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
          <div className="box">
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
      case "steve":
        return (
          <>
            {steves.map((el) => (
              <div
                css={css`
                  position: fixed;
                  left: ${el.n * 55}px;
                  transform: rotate(${el.n * 15}deg);
                  top: 100px;
                  width: 100px;
                `}
                className="noHover"
              >
                <img
                  css={css`
                    width: ${100 + el.n * 10}px !important;
                  `}
                  src={Object.values(images["steve"])[0]}
                  alt=""
                  // className="noHover"
                />
              </div>
            ))}
          </>
        );
      case "geffen":
        return (
          <div id="geffen-text" className="noHover">
            I am an artist! I am a builder! I cannot just be flipping burgers!
          </div>
        );
      case "felipe":
        return (
          <div id="vincent-hey" className="noHover">
            Hi! I'm Felipe, your local handsome effective altruist. So, let me
            get started by telling you about longtermism, and why we need to
            start having more babies. Also, I can salsa like a boss!
          </div>
        );
      case "william":
        return (
          <div id="william-text" className="noHover">
            <div>Drop down and give me 20</div>
            <div>
              <img
                css={css`
                  width: 100px !important;
                `}
                src={getImagePath("pngegg")}
                alt=""
              />
            </div>
            <div>♫MONEY♫</div>
            <div>
              <img
                css={css`
                  width: 300px !important;
                `}
                src={getImagePath("manEvolution")}
                alt=""
              />
            </div>
            <div>
              <img
                css={css`
                  width: 500px !important;
                `}
                src={getImagePath("money")}
                alt=""
              />
            </div>
          </div>
        );
      case "dmitri":
        return <Stick />;
      case "emma":
        return (
          <div id="emma-text" className="noHover">
          </div>
        );
      case "dhruvik":
        return drupey;
      case "chris":
        return (
          <div id="chris-decoration" className="noHover">
            <img src={getImagePath("chris")} alt="" />
          </div>
        );
      default:
        return null;
    }
  };
  useEffect(() => {
    if (activePerson === "steve" && !steves.length) {
      const timeoutIDs = [...Array(23).keys()].map((n) => {
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
  // console.log("active", data?.[activePerson]?.backgroundColor);
  // console.log("steves", steves);
  return (
    <div
      css={css`
        font-family: "Nunito", Helvetica, sans-serif;
        background-color: ${data?.[activePerson]?.backgroundColor ||
        "rgb(250,250,250)"};
      `}
    >
      {/* <meta name="og:image" content={getImagePath("library")} />
      <meta property="twitter:image" content={getImagePath("library")} /> */}
      <div
        id="overlay"
        css={css`
          ${overlayStyles}
        `}
      >
        <div
          css={css`
            text-align: center;
            font-size: 32px;
            padding: 20px 0;
            padding-bottom: 10px;
            position: fixed;
            width: 100%;
            ${overlayStyles && `color: #eee;`};
            background-color: ${data?.[activePerson]?.backgroundColor ||
            (overlayStyles && "transparent") ||
            "rgb(250,250,250)"};
          `}
        >
          {data[activePerson]?.name || `School 2.0 Bio Page`}
          <div
            css={css`
              font-size: 14px;
              font-family: verdana;
              padding-top: 5px;
              color: grey;
            `}
          >
            Hover over the pictures to learn more!
          </div>

          <div
            css={css`
              position: absolute;
              right: 10px;
              top: 20px;
              font-size: 12px;
              color: grey;
              text-decoration: none;
            `}
          >
            <a href="https://school2point0.com" target="_blank">
              What is School 2.0?
            </a>
          </div>
        </div>
        <div
          css={css`
            max-width: 1000px;
            margin: 0 auto;
          `}
        >
          <div className="grid-container">
            {Object.entries(data).map(([name, info]) => {
              // console.log("./img/" + info.image);
              return (
                <div className="person">
                  <img
                    id={name}
                    src={
                      activePerson === "tiago" && name !== "tiago"
                        ? getImagePath("ycombinator")
                        : activePerson === name
                        ? Object.values(images[name + "2"])[0]
                        : Object.values(images[name])[0]
                    }
                    alt=""
                    onMouseOver={() => onPersonHover(name)}
                    onMouseOut={onPersonHoverRemoved}
                  />
                  {getDecorations(name)}
                  <h2>
                    {activePerson === "tiago" && name !== "tiago"
                      ? "So when I was in YC..."
                      : info.name}
                  </h2>
                  <ul className="social-links">
                    {info.github && (
                      <li>
                        <a
                          href={`https://github.com/${info.github}`}
                          target="_blank"
                        >
                          <i className="fab fa-github"></i>
                        </a>
                      </li>
                    )}
                    {info.website && (
                      <li>
                        <a href={`https://${info.website}`} target="_blank">
                          <i className="fas fa-link"></i>
                        </a>
                      </li>
                    )}
                    {info.twitter && (
                      <li>
                        <a
                          href={`https://twitter.com/${info.twitter}`}
                          target="_blank"
                        >
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                    )}
                    {info.curius && (
                      <li>
                        <a
                          href={`https://curius.app/${info.curius}`}
                          target="_blank"
                          title="currently reading"
                        >
                          <CuriusSvg
                            css={css`
                              && {
                                rect {
                                  fill: #ccc;
                                }
                              }
                            `}
                          />
                        </a>
                      </li>
                    )}
                  </ul>
                  <p>
                    <span style={{ color: "black" }}>
                      {info.description.split(".")[0]}.
                    </span>
                    <span>
                      {info.description.split(".").slice(1).join(".")}
                    </span>
                  </p>
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
          {/* <iframe
            src="https://blog.noahtren.com/note/0738d304/"
            css={css`
              width: 90%;
              height: 90vh;
              margin: 5%;
              // margin: 0 auto;
              // display: table;
            `}
          ></iframe> */}
        </div>
      </div>
    </div>
  );
};

export default App;
