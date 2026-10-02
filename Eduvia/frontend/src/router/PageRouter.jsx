import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRouter from "./ProtectedRouter";

import StuHome from "../pages/student/StuHome";
import StuProfile from "../pages/student/StuProfile";
import StuCourseDetails from "../pages/student/StuCourseDetails";
import MyCourses from "../pages/student/MyCourses";

import Home from "../pages/admin/Home";
import Profile from "../pages/admin/Profile";
import CourseDetails from "../pages/admin/CourseDetails";

import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Page404 from "../pages/PageNotFound";

function PageRouter() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<StuHome />} />
          <Route
            path="/profile"
            element={
              <ProtectedRouter>
                <StuProfile />
              </ProtectedRouter>
            }
          />
          <Route path="/course-details" element={<StuCourseDetails />} />
          <Route
            path="/mycourses"
            element={
              <ProtectedRouter>
                <MyCourses />
              </ProtectedRouter>
            }
          />
          <Route
            path="/admin/home"
            element={
              <ProtectedRouter>
                <Home />
              </ProtectedRouter>
            }
          />
          <Route
            path="/admin/profile"
            element={
              <ProtectedRouter>
                <Profile />
              </ProtectedRouter>
            }
          />
          <Route
            path="/admin/course-details"
            element={
              <ProtectedRouter>
                <CourseDetails />
              </ProtectedRouter>
            }
          />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default PageRouter;
