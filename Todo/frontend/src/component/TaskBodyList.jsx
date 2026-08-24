import { clearAllTask, deleteTask, markComplete } from "../service/backendOps";
function TaskBodyList({data, setData}) {
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
    })
  }
  return (
    <>
      <div>
        <div>
          <span className="headMargin">Mark</span> |
          <span className="headMargin">Task</span> |
          <span className="headMargin">Deadline</span>
        </div>
        <div>
          <ul>
            {data.map((item) => (
              <li key={item._id}>
                <input
                  type="checkbox"
                  checked={item.isComplete}
                  onChange={() => handleMarkComplete(item._id)}
                />{" "}
                -<span>{item.task}</span> -<span>{item.date}</span> -
                <span>
                  <button onClick={() => submitDelete(item._id)}>Delete</button>
                </span>
              </li>
            ))}
          </ul>
        </div>
        <button onClick={handleClearAll}>Clear All</button>
      </div>
    </>
  );
}

export default TaskBodyList;
