import React from "react";
import { useEffect, useState } from "react";
import SingleAccount from "./SingleAccount";
import Modal from "./Modal";
import { getAllAccounts } from "../api/api";

const AccountList = () => {
  const [accounts, setAccounts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalProps, setModalProps] = useState({});
  const [buttonsDisabled, setButtonDisabled] = useState(false);

  useEffect(() => {
    getAllAccounts(setAccounts);
  }, []);

  function toggleModal() {
    setShowModal(true);
    setButtonDisabled(true);
  }

  function newUser() {
    toggleModal();
    setModalProps({
      action: "user",
      title: "Create new user",
      inputs: [
        { type: "text", name: "name" },
        { type: "text", name: "id" },
        { type: "number", name: "cash" },
        { type: "number", name: "credit" },
      ],
    });
  }

  function newAccount() {
    toggleModal();
    setModalProps({
      action: "account",
      title: "Create new account",
      inputs: [
        { type: "text", name: "id" },
        { type: "number", name: "cash" },
        { type: "number", name: "credit" },
      ],
    });
  }

  return (
    <>
      <table>
        <tr>
          <th>ID</th>
          <th>Owner</th>
          <th>Owner name</th>
          <th>Cash</th>
          <th>Credit</th>
        </tr>
        {accounts.length === 0
          ? ""
          : accounts.map((account) => (
              <SingleAccount
                key={account.id}
                account={account}
                setShowModal={setShowModal}
                setModalProps={setModalProps}
                setButtonDisabled={setButtonDisabled}
                buttonsDisabled={buttonsDisabled}
              />
            ))}
      </table>
      <button onClick={newUser}>Create New User</button>
      <button onClick={newAccount}>Create New Account</button>
      <div>
        {showModal ? (
          <Modal
            setAccounts={setAccounts}
            modalProps={modalProps}
            setShowModal={setShowModal}
            setButtonDisabled={setButtonDisabled}
          />
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default AccountList;
