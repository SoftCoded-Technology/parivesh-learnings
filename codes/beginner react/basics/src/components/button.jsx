import React from "react";

const Button = (props) => {
  return (
    <div>
      <button  type={props.type} className="btn btn-outline-danger">
        {props.text}
      </button>
    </div>
  );
};

export default Button;
