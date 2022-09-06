import React from "react";
import { Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "./styles.css";

import Home from "./components/Home";
import Logout from "./components/Logout";
import MobileSidebar from "./common/MobileSidebar";

import DHeadLogin from "./components/departmentHead/Login";
import DHeadShowStudents from "./components/departmentHead/StudentsList";
import DHeadAddInstructor from "./components/departmentHead/CreateInstructor";
import DHeadRemoveInstructor from "./components/departmentHead/RemoveInstructor";
import DHeadProfile from "./components/departmentHead/Profile";

import StudentGrade from "./components/student/StudentGrade";
import StudentLogin from "./components/student/StudentLogin";
import StudentProfile from "./components/student/StudentProfile";

import StaffLogin from "./components/instructor/InstructorLogin";
import StaffProfile from "./components/instructor/InstructorProfile";
import SubmitGrades from "./components/instructor/SubmitGrades";
import StudentList from "./components/instructor/StudentsList";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <ToastContainer />

        {MobileSidebar()}

        <Switch>
          <Route path="/dhead/login" component={DHeadLogin} />
          <Route path="/dhead/see/students" component={DHeadShowStudents} />
          <Route path="/dhead/add/ins" component={DHeadAddInstructor} />
          <Route path="/dhead/remove/ins" component={DHeadRemoveInstructor} />
          <Route path="/dhead/profile" component={DHeadProfile} />

          <Route path="/ins/login" component={StaffLogin} />
          <Route path="/ins/profile" component={StaffProfile} />
          <Route path="/ins/submit/grades" component={SubmitGrades} />
          <Route path="/ins/see/students" component={StudentList} />

          <Route path="/student/login" component={StudentLogin} />
          <Route path="/student/profile" component={StudentProfile} />
          <Route path="/student/grade" component={StudentGrade} />
          <Route path="/student/courses" component={StudentLogin} />

          <Route path="/logout" component={Logout} />
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
