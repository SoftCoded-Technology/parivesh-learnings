import React, { useContext } from "react";
import { useReducer, useState } from "react";
import CounterReducer from "./reducer/CounteReducer";
import taskContext from "./context/TaskContext";
import LoginContext from "./context/LoginContext";

const Counter = () => {
  // const [value, dispatch] = useReducer(CounterReducer, 0);
  const { tasks } = useContext(taskContext);
  const { name } = useContext(LoginContext);

  return (
    <>
      {name ? name : null}
      Tasks : {tasks?.length}
      {/* <button
        onClick={() => dispatch({ type: "INCREASE" })}
        className="btn btn-primary mx-1"
      >
        Increase
      </button>
      <button
        onClick={() => dispatch({ type: "DECREASE" })}
        className="btn btn-primary mx-1"
      >
        Decrease
      </button> */}
    </>
  );
};

export default Counter;
