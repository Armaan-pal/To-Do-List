import React from "react";

function ShowTodo(props) {
  console.log(props);

  return (
    <div>
      <div className="results">
        <div className="list">
          <h6>{props.name}</h6>
        </div>
        <div className="xbtn">
          <button type="button" onClick={() => props.onSelect(props.id)}>
            x
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShowTodo;
