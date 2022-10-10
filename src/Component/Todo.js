import React from "react";
import { useState } from "react";
import ShowTodo from "./ShowTodo";

function Todo() {
  const [name, setName] = useState("");
  const [data, setData] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    name && setData([...data, name]);
    setName("");
  }

  function handleChange(e) {
    setName(e.target.value);
  }

  function deleteTask(a) {
    const remainingTasks = data.filter((curEle, index) => {
      return index != a;
    });
    setData(remainingTasks);
  }

  return (
    <div id="outer">

        <div className="mainForm">
          <form onSubmit={handleSubmit}>
            <div className="inputClass">
            <label className="add todo"> 
            <input
              type="text"
              onChange={handleChange}
              value={name}
              placeholder="Add Task"
            />
            <button className="btnSubmit" type="submit">
              Add
            </button>
            </label>
            </div>
          </form>
          </div>

        <div className="result">
          {data.map((value, index) => {
            return (
              <ShowTodo
                key={index}
                id={index}
                name={value}
                onSelect={deleteTask}
              />
            );
          })}
          </div>
        
    </div>
  );
}

export default Todo;
