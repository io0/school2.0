import React, { useEffect, useState } from "react";
import "./styles/main.scss";
import { data } from "./data";
import { css } from "@emotion/core";
import images from "./img/*.*";
import PersonHover from "./PersonHover";
import Stick from "./Stick";
import TaylorComponent from "./styles/TaylorComponent";

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
      setOverlayStyles(`background-image: url(${getImagePath("swiss_miss")})`);
    } else if (activePerson === "geffen") {
      setOverlayStyles(`background-image: url(${getImagePath("galaxy")})`);
    } else if (activePerson === "santi") {
      setOverlayStyles(`background-image: url(${getImagePath("onion")})`);
    } else if (activePerson === "felipe") {
      setOverlayStyles(
        `background-image: url(https://lh3.googleusercontent.com/proxy/LVCs9Cy8_X4aSS-_4HV-Ny4fTNZY5djRZEiCxDJDDMuntV2X9DMcWWb7O-HJZGzEIur-KIuaCUneIj0TVsNcUHTaZPBBRNihSw)`
      );
    } else if (activePerson === "harshu") {
      setOverlayStyles(`background-image: url(${getImagePath("covid")})`);
    } else {
      setOverlayStyles("");
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
          <div id="vincent-hey" className="noHover">
            Rubik's cube helped this founder leave his coconut farm in India and
            get $3 million in funding for his startup in less than two years
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
      case "steve":
        return (
          <>
            {steves.map((el) => (
              <div
                css={css`
                  position: fixed;
                  left: ${el.n * 50}px;
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
            start having more babies.
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
          <iframe
            src="https://blog.noahtren.com/note/0738d304/"
            css={css`
              width: 90%;
              height: 90vh;
              margin: 5%;
              // margin: 0 auto;
              // display: table;
            `}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default App;
