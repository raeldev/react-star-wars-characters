import React from "react";

const Formulario = props => {
  const { optionList } = props;
  return (
    <div className="input-group">
      <select className="custom-select">
        <option defaultValue>Choose...</option>
        {optionList.map((char, index) => {
          return <option key={index}>{char.name}</option>;
        })}
      </select>
      <div className="input-group-append">
        <button className="btn btn-outline-secondary" type="button">
          &#127776;
        </button>
      </div>
    </div>
  );
};

export default Formulario;
