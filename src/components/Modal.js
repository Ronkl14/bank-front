import React from "react";
import {
  depositCash,
  getAllAccounts,
  withdrawCash,
  updateCredit,
  transferCash,
  createAccount,
  createUser,
} from "../api/api";
import { useState, useEffect } from "react";

const Modal = ({
  modalProps,
  setShowModal,
  setButtonDisabled,
  setAccounts,
}) => {
  const [values, setValues] = useState({
    amount: null,
    credit: null,
    to: "",
    name: "",
    id: "",
  });

  function changeHandler(e) {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
    console.log(values);
  }

  function closeModal() {
    setShowModal(false);
    setButtonDisabled(false);
    getAllAccounts(setAccounts);
  }

  async function actionHandler() {
    switch (modalProps.action) {
      case "deposit":
        await depositCash(modalProps.account.id, values.amount);
        closeModal();
        return;
      case "withdraw":
        await withdrawCash(modalProps.account.id, values.amount);
        closeModal();
        return;
      case "credit":
        await updateCredit(modalProps.account.id, values.credit);
        closeModal();
        return;
      case "transfer":
        await transferCash(modalProps.account.id, values.to, values.amount);
        closeModal();
        return;
      case "user":
        await createUser(values.name, values.id);
        await createAccount(values.id, values.cash, values.credit);
        closeModal();
        return;
      case "account":
        await createAccount(values.id, values.cash, values.credit);
        closeModal();
        return;
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
