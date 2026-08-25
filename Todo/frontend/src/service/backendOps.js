const API_URL = import.meta.env.VITE_API_URL;

export function addTask({ task, date }) {
  return fetch(`${API_URL}/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ task, date }),
  }).then((res) => res.json());
}

export function deleteTask(taskId) {
  return fetch(`${API_URL}/delete/${taskId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json());
}

export function fetchAllTask() {
  return fetch(`${API_URL}/getalltask`).then((res) => res.json());
}

export function clearAllTask() {
  return fetch(`${API_URL}/clearall`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });
}

export function markComplete(taskId) {
  return fetch(`${API_URL}/markcomplete/${taskId}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });
}