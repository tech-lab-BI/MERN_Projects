export function addTask({ task, date }) {
  return fetch("http://localhost:3001/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ task, date }),
  }).then((res) => res.json());
}

export function deleteTask(taskId) {
  return fetch(`http://localhost:3001/delete/${taskId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((msg) => console.log(msg));
}

export function fetchAllTask() {
  return fetch("http://localhost:3001/getalltask").then((res) => res.json());
}

export function clearAllTask() {
  return fetch("http://localhost:3001/clearall", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });
}

export function markComplete(taskId) {
  return fetch(`http://localhost:3001/markcomplete/${taskId}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });
}