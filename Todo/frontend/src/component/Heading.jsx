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
      <form className="row g-2 align-items-center mb-4" onSubmit={handleSubmit}>
        <div className="col-12 col-md">
          <input
            type="text"
            name="task"
            className="form-control"
            placeholder="What needs doing?"
            required
          />
        </div>
        <div className="col-12 col-md-auto">
          <input className="form-control" type="date" name="date" />
        </div>
        <div className="col-12 col-md-auto">
          <button
            className="btn btn-primary add-task-button w-100"
            type="submit"
          >
            Add task
          </button>
        </div>
      </form>
    </>
  );
}

export default TaskInput;
