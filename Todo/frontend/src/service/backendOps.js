export function addTask({ task, date }) {
  fetch("http://localhost:3001/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ task, date }),
  })
    .then((res) => res.json())
    .then((msg) => {
      console.log(msg);
    });
}
