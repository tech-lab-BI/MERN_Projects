import { addTask } from "../service/backendOps";

function TaskInput({ data, setData }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const task = formData.get("task");
    const date = formData.get("date");

    addTask({ task, date }).then(({ newTask }) => {
      setData([newTask, ...data]);
      event.target.reset();
    });
  };
  return (
    <>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="task" required />
        <input type="date" name="date" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default TaskInput;
