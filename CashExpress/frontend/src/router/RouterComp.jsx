import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "../pages/SigninPage";
import Login from "../pages/LoginPage";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Error from "../components/Error";
import TransectionForm from "../components/TransectionForm";
import ProtectedRouter from "../components/ProtectedRouter";

function RouterComp() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/home"
            element={
              <ProtectedRouter>
                <Home />
              </ProtectedRouter>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRouter>
                <Profile />
              </ProtectedRouter>
            }
          />
          <Route path="/transectionform" element={<TransectionForm />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default RouterComp;
