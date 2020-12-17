import "./style.css";
import getPeople from "../../../services/swapi";
import Tabela from "../../Tabela";
import Formulario from "../../Formulario";

import React, { useState, useEffect } from "react";

const Flex = () => {
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
    <div className="container d-flex text-left text-md-center">
      <div className="col-md-12">
        <h1 className="display-4">SWAPI Explorer</h1>
        <p className="lead">
          This is a simple test, to show Star Wars Characters.
        </p>
        <hr className="my-4" />
        <Formulario optionList={charList()} />
        <hr className="my-4" />
        <Tabela list={charListName()} />
      </div>
    </div>
  );
};

export default Flex;
