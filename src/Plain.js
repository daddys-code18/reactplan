import React from "react";

export default function Plain(props) {
  return (
    <>
      <li className="shadow p-2 my-2 col-sm-9">{props.value}</li>
      <button
        onClick={() => {
          props.sendData(props.id);
        }}
        className="btn btn-danger my-2 col-sm-2 offset-1"
      >
        Delete
      </button>
    </>
  );
}
