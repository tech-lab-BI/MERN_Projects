const API_URL = import.meta.env.VITE_API_URL;

export const login = (user) => {
  return fetch(`${API_URL}/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
};

export const signup = (newUser) => {
  return fetch(`${API_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  });
};

export const logout = () => {
  console.log("log out");
};

export const fetchNotes = () => {
  const token = localStorage.getItem("token");
  return fetch(`${API_URL}/getallnotes`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => response.json());
};

export const addNote = (note) => {
  const token = localStorage.getItem("token");
  return fetch(`${API_URL}/addnote`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(note),
  });
};

export const deleteNote = (id) => {
  const token = localStorage.getItem("token");
  return fetch(`${API_URL}/deletenote/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
