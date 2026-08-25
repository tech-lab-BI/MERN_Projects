import TaskBodyList from "./TaskBodyList";
import NoTaskMsg from "./NoTaskMsg";

function TaskBody({ data, setData }) {
  return (
    <section>
      {data.length === 0 ? (
        <NoTaskMsg />
      ) : (
        <TaskBodyList data={data} setData={setData} />
      )}
    </section>
  );
}

export default TaskBody;
