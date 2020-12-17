import React from "react";
import Personagem from "../Personagem";

const Tabela = props => {
  const { list } = props;
  return (
    <>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Eye Color</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {list.map((p, index) => {
            return (
              <Personagem
                key={index}
                name={p.name}
                color={p.eye_color}
                key_id={index}
              />
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Tabela;
