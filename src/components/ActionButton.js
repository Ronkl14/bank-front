import React from "react";

const Button = ({ action, clickHandler, buttonsDisabled }) => {
  return (
    <td>
      <button onClick={clickHandler} disabled={buttonsDisabled}>
        {action}
      </button>
    </td>
  );
};

export default Button;
