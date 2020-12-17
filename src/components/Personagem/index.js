import React from "react";

const Personagem = props => {
  const { key_id, name, color } = props;
  return (
    <tr>
      <th scope="row" style={{ color: color }}>
        {key_id}
      </th>
      <td style={{ color: color }}>{name}</td>
      <td style={{ color: color }}>{color}</td>
      <td>
        <button type="button" className="btn btn-dark">
          &#128640;
        </button>
      </td>
    </tr>
  );
};

export default Personagem;
