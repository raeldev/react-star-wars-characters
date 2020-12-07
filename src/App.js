import "./style.css";
import getPeople from "./services/swapi";
import React, { useState, useEffect } from "react";

const App = () => {
  const [peopleList, setPeopleList] = useState([]);

  useEffect(() => {
    getPeople().then(list => {
      let orderedList = orderByName(list.results);
      setPeopleList(orderedList);
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

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some happen :)</p>
      {peopleList.map((p, index) => {
        return <p key={index}> {p.name} </p>;
      })}
    </div>
  );
};

export default App;
