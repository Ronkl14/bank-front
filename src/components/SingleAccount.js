import React from "react";
import ActionButton from "./ActionButton";
import { useState } from "react";

const SingleAccount = ({
  account,
  setShowModal,
  setModalProps,
  setButtonDisabled,
  buttonsDisabled,
}) => {
  function depositCash() {
    setShowModal(true);
    setButtonDisabled(true);
    setModalProps({
      account: account,
      action: "deposit",
      title: "Deposit cash",
      inputs: [{ type: "number", name: "amount" }],
    });
  }

  function withdrawCash() {
    setShowModal(true);
    setButtonDisabled(true);
    setModalProps({
      action: "withdraw",
      title: "Withdraw cash",
      inputs: [{ type: "number", name: "amount" }],
    });
  }

  function updateCredit() {
    setShowModal(true);
    setButtonDisabled(true);
    setModalProps({
      action: "credit",
      title: "Update credit",
      inputs: [{ type: "number", name: "credit" }],
    });
  }

  function transferCash() {
    setShowModal(true);
    setButtonDisabled(true);
    setModalProps({
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
