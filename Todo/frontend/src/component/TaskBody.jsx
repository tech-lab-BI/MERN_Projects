import TaskBodyList from "./TaskBodyList";
import NoTaskMsg from "./NoTaskMsg";

function TaskBody({ data, setData }) {
  return (
    <>
      <p>-------------------</p>
      {data.length === 0? <NoTaskMsg/> : <TaskBodyList data={data} setData={setData}/>}
      
    </>
  );
}

export default TaskBody;
