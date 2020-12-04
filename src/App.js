import React from "react";
import "./styles/main.scss";
import { data } from "./data";
import images from "./img/*.*";
const names = ["marley", "dmitri", "dhruvik"];
const App = () => {
  return (
    <div>
      <h1>School 2.0 Yearbook</h1>
      <div className="grid-container">
        {Object.entries(data).map(([name, info]) => {
          console.log("./img/" + info.image);
          return (
            <div id={name} className="person">
              <img src={Object.values(images[name])[0]} alt="" />{" "}
              <h3>{info.name}</h3>
              <ul className="social-links">
                {info.github && <li>http://github.com/io0</li>}
                {info.website && <li>http://marley.com</li>}
                {info.twitter && <li>@marleymarlz</li>}
              </ul>
              <p>{info.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
