import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api/v1",
});

export async function getAllAccounts(callBackFn) {
  try {
    const response = await api.get("/accounts");
    callBackFn(response.data.data);
  } catch (error) {}
}

export async function getUser(id, callBackFn) {
  try {
    const response = await api.get(`/users/${id}`);
    callBackFn(response.data.data);
  } catch (error) {}
}

export async function depositCash(id, amount) {
  try {
    await api.put(`/accounts/${id}`, { deposit: amount });
  } catch (error) {}
}

export async function withdrawCash(id, amount) {
  try {
    await api.put(`/accounts/${id}`, { withdraw: amount });
  } catch (error) {}
}

export async function updateCredit(id, credit) {
  try {
    await api.put(`/accounts/${id}`, { credit: credit });
  } catch (error) {}
}

export async function transferCash(id, to, amount) {
  try {
    await api.put(`/accounts/transfer/${id}`, { to: to, amount: amount });
  } catch (error) {}
}

export async function createUser(name, userID) {
  try {
    await api.post("/users", { name: name, userID: userID });
  } catch (error) {}
}

export async function createAccount(id, cash, credit) {
  try {
    await api.post("/accounts", { owner: id, cash: cash, credit: credit });
  } catch (error) {}
}
