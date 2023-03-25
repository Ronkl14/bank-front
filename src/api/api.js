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
