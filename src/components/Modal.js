import React from "react";
import { depositCash } from "../api/api";
import { useState, useEffect } from "react";

const Modal = ({ modalProps, setShowModal, setButtonDisabled }) => {
  const [values, setValues] = useState({ amount: null, credit: null, to: "" });

  function changeHandler(e) {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
    console.log(values);
  }

  function closeModal() {
    setShowModal(false);
    setButtonDisabled(false);
  }

  function actionHandler() {
    switch (modalProps.action) {
      case "deposit":
        console.log(modalProps.account.id, values.amount);
        depositCash(modalProps.account.id, values.amount);
    }
  }

  return (
    <div>
      <h2>{modalProps.title}</h2>
      {modalProps.inputs.map((input) => (
        <div>
          <label htmlFor={input.name}>{input.name}: </label>
          <input
            type={input.type}
            name={input.name}
            id={input.name}
            onChange={changeHandler}
          />
        </div>
      ))}
      <button onClick={actionHandler}>Submit</button>
      <button onClick={closeModal}>Cancel</button>
    </div>
  );
};

export default Modal;
