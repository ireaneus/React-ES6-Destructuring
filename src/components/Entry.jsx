import React from "react";

function Entry(props) {
  return (
    <tr>
      <td>{props.model}</td>
      <td>{props.topColor}</td>
      <td>{props.topSpeed}</td>
    </tr>
  );
}

export default Entry;
