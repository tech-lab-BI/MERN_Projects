import { useEffect, useState } from "react";
import Heading from "./component/Heading";
import TaskBody from "./component/TaskBody";
import "./App.css";
import {fetchAllTask } from "./service/backendOps";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchAllTask().then((data) => {
      setData(data);
    });
  }, []);

  return (
    <>
      <Heading data={data} setData={setData} />
      <TaskBody data={data} setData={setData} />
    </>
  );
}

export default App;
