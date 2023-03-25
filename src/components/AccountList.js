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

  return (
    <>
      <table>
        <tr>
          <th>ID</th>
          <th>Owner</th>
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
