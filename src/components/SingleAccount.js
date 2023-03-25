import React from "react";
import ActionButton from "./ActionButton";
import { useState, useEffect } from "react";
import { getUser } from "../api/api";

const SingleAccount = ({
  account,
  setShowModal,
  setModalProps,
  setButtonDisabled,
  buttonsDisabled,
}) => {
  const [user, setUser] = useState({});
  useEffect(() => {
    getUser(account.owner, setUser);
  }, []);

  function showModal() {
    setShowModal(true);
    setButtonDisabled(true);
  }

  function depositCash() {
    showModal();
    setModalProps({
      account: account,
      action: "deposit",
      title: "Deposit cash",
      inputs: [{ type: "number", name: "amount" }],
    });
  }

  function withdrawCash() {
    showModal();
    setModalProps({
      account: account,
      action: "withdraw",
      title: "Withdraw cash",
      inputs: [{ type: "number", name: "amount" }],
    });
  }

  function updateCredit() {
    showModal();
    setModalProps({
      account: account,
      action: "credit",
      title: "Update credit",
      inputs: [{ type: "number", name: "credit" }],
    });
  }

  function transferCash() {
    showModal();
    setModalProps({
      account: account,
      action: "transfer",
      title: "Transfer cash",
      inputs: [
        { type: "text", name: "to" },
        { type: "number", name: "amount" },
      ],
    });
  }

  return (
    <tr>
      <td>{account.id}</td>
      <td>{account.owner}</td>
      {user[0] ? <td>{user[0].name}</td> : ""}
      <td>{account.cash}</td>
      <td>{account.credit}</td>
      <ActionButton
        action="Deposit"
        clickHandler={depositCash}
        buttonsDisabled={buttonsDisabled}
      />
      <ActionButton
        action="Withdraw"
        clickHandler={withdrawCash}
        buttonsDisabled={buttonsDisabled}
      />
      <ActionButton
        action="Update Credit"
        clickHandler={updateCredit}
        buttonsDisabled={buttonsDisabled}
      />
      <ActionButton
        action="Transfer"
        clickHandler={transferCash}
        buttonsDisabled={buttonsDisabled}
      />
    </tr>
  );
};

export default SingleAccount;
