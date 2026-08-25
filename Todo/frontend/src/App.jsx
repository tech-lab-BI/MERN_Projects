import { useEffect, useState } from "react";
import Heading from "./component/Heading";
import TaskBody from "./component/TaskBody";
import { fetchAllTask } from "./service/backendOps";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchAllTask().then((data) => {
      setData(data);
    });
  }, []);

  return (
    <main className="app-shell container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-9 col-xl-8">
          <div className="todo-card card shadow-sm">
            <div className="card-body p-4">
              <h1 className="card-title h3 mb-4">Todo List</h1>
              <Heading data={data} setData={setData} />
              <TaskBody data={data} setData={setData} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
