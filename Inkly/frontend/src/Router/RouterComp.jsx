import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Dasboard from "../Pages/Dashboard";
import PageNotFound from "../Pages/404PageNotFound"

function RouterComp() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/dashboard" element={<Dasboard/>} />
          <Route path="*" element={<PageNotFound/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default RouterComp;
