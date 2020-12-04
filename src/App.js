import React from "react";
import "./styles/main.scss";
const App = () => {
  return (
    <div>
      <h1>School 2.0 Yearbook</h1>
      <div className="grid-container">
        <div id="marley" className="person">
          <img src={require("./img/marley.jpeg")} alt="" />
          <h3>Marley Smarley</h3>
          <ul className="social-links">
            <li>http://github.com/io0</li>
            <li>http://marley.com</li>
            <li>@marleymarlz</li>
          </ul>
          <p>
            Nothing too complicated activity partners if you think we have
            something in common easy-going. Long-term dating Netflix fixing my
            scooter beach days trying this for the first time, glass half-full
            what to order off of the menu no drama playing my guitar bored at
            home.
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
