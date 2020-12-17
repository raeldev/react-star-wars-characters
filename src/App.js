import "./style.css";
import getPeople from "./services/swapi";
import Routes from "./routes";

import React, { useState, useEffect } from "react";

const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getPeople().then(list => {
      let orderedList = orderByName(list.results);
      setCharacters(orderedList);
    });
  }, []);

  const orderByName = array => {
    return array.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
  };

  const charListName = () =>
    characters.map(i => ({
      name: i.name,
      eye_color: i.eye_color
    }));

  const charList = () =>
    characters.map(i => ({
      name: i.name,
      eye_color: i.eye_color
    }));

  return (
    <div className="container-fluid">
      <div className="jumbotron">
        <Routes />
      </div>
    </div>
  );
};

export default App;
