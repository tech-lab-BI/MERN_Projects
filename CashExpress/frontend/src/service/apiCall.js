const API_URL = import.meta.env.VITE_API_URL;
const token = localStorage.getItem("token");

export function getAllData(userId) {
  console.log(token);
  return fetch(`${API_URL}/home/${userId}`, {
    headers: {
      Authorization: token,
    },
  }).then((res) => {
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
    headers: {
      Authorization: token,
    },
    body: JSON.stringify(transection),
  }).then((res) => {
    return res.json();
  });
}
export function editData(transection, transectionId) {
  return fetch(`${API_URL}/edit-data/${transectionId}`, {
    method: "POST",
    headers: {
      Authorization: token,
    },
    body: JSON.stringify(transection),
  }).then((res) => {
    res.json();
  });
}
export function deleteData(transectionId) {
  return fetch(`${API_URL}/delete-data/${transectionId}`, {
    method: "POST",
    headers: {
      Authorization: token,
    },
  }).then((res) => {
    res.json();
  });
}
