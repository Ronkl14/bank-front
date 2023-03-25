import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import SingleAccount from "./SingleAccount";

const AccountList = () => {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    async function getAllAccounts() {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/v1/accounts"
        );
        setAccounts(response.data.data);
        console.log(accounts);
      } catch (err) {}
    }
    getAllAccounts();
  }, []);

  return (
    <table>
      <tr>
        <th>ID</th>
        <th>Owner</th>
        <th>Cash</th>
        <th>Credit</th>
      </tr>
      {accounts.length === 0
        ? ""
        : accounts.map((account) => <SingleAccount account={account} />)}
    </table>
  );
};

export default AccountList;
