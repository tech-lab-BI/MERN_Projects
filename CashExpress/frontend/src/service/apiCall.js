const API_URL = import.meta.env.VITE_API_URL;

export function getAllData(userId) {
  return fetch(`${API_URL}/home/${userId}`).then((res) => {
    return res.json();
  });
}
export function login({ email, password }) {
  return fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  }).then((res) => {
    return res.json();
  });
}
export function signin(newUser) {
  return fetch(`${API_URL}/signin`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newUser),
  }).then((res) => {
    return res.json();
  });
}
export function addData(transection) {
  return fetch(`${API_URL}/add-data`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(transection),
  }).then((res) => {
    return res.json();
  });
}
export function editData(transection, transectionId) {
  return fetch(`${API_URL}/edit-data/${transectionId}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(transection),
  }).then((res) => {
    res.json();
  });
}
export function deleteData(transectionId) {
  return fetch(`${API_URL}/delete-data/${transectionId}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  }).then((res) => {
    res.json();
  });
}
