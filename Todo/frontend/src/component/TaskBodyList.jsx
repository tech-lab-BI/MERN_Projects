import { clearAllTask, deleteTask, markComplete } from "../service/backendOps";
function TaskBodyList({ data, setData }) {
  const submitDelete = (taskId) => {
    deleteTask(taskId).then(() => {
      setData((data) => data.filter((item) => item._id !== taskId));
    });
  };

  const handleMarkComplete = (taskId) => {
    markComplete(taskId).then(() => {
      let newArr = [];
      for (let i = 0; i < data.length; i++) {
        if (data[i]._id === taskId) {
          newArr.push({
            ...data[i],
            isComplete: !data[i].isComplete,
          });
        } else {
          newArr.push(data[i]);
        }
      }
      setData(newArr);
    });
  };
  const handleClearAll = async () => {
    clearAllTask().then(() => {
      setData([]);
    });
  };
  return (
    <div className="border rounded">
      <div className="task-heading row g-0 px-3 py-2 border-bottom small fw-semibold text-uppercase">
        <span className="col-2 col-sm-1">Done</span>
        <span className="col">Task</span>
        <span className="col-4 col-sm-3 text-end">Deadline</span>
        <span className="col-2 col-sm-1 visually-hidden">Actions</span>
      </div>
      <div>
        <ul className="list-group list-group-flush">
          {data.map((item) => (
            <li
              className={`task-row row g-0 align-items-center px-3 py-3 ${item.isComplete ? "task-row-complete" : ""}`}
              key={item._id}
            >
              <div className="col-2 col-sm-1">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={item.isComplete}
                  onChange={() => handleMarkComplete(item._id)}
                />
              </div>
              <span
                className={`col text-break ${item.isComplete ? "text-decoration-line-through text-secondary" : ""}`}
              >
                {item.task}
              </span>
              <span className="col-4 col-sm-3 text-end small text-secondary text-break">
                {item.date || "No deadline"}
              </span>
              <span className="col-2 col-sm-1 text-end">
                <button
                  className="btn btn-link btn-sm text-danger p-0"
                  onClick={() => submitDelete(item._id)}
                >
                  Delete
                </button>
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="d-flex justify-content-end border-top px-3 py-3">
        <button
          className="btn btn-outline-secondary clear-button btn-sm"
          onClick={handleClearAll}
        >
          Clear all
        </button>
      </div>
    </div>
  );
}

export default TaskBodyList;
