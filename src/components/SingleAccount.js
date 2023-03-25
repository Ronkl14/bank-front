import React from "react";
import ActionButton from "./ActionButton";

const SingleAccount = ({ account }) => {
  return (
    <tr>
      <td>{account.id}</td>
      <td>{account.owner}</td>
      <td>{account.cash}</td>
      <td>{account.credit}</td>
      <ActionButton action="Deposit" />
      <ActionButton action="Withdraw" />
      <ActionButton action="Update Credit" />
      <ActionButton action="Transfer" />
    </tr>
  );
};

export default SingleAccount;
