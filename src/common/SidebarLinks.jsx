import { Link } from "react-router-dom";
import auth from "../services/auth";

function SidebarLinks() {
  let user = "notLogged";

  if (auth.isAuthenticated()) user = auth.getUserType();

  return (
    <div className="col s3 hide-on-med-and-down">
      <ul className="collection" style={{ borderRadius: 10 }}>
        {user === "notLogged" && (
          <>
            <li className="collection-item">
              <a href="/dhead/login">Department Head Login</a>
            </li>

            <li className="collection-item">
              <a href="/instructor/login">Instructor Login</a>
            </li>

            <li className="collection-item">
              <a href="/student/login">Student Login</a>
            </li>

            <li className="collection-item">
              <a href="/branches">Branches</a>
            </li>

            <li className="collection-item">
              <Link to="/about">About</Link>
            </li>

            <li className="collection-item">
              <Link to="/contact">Contact</Link>
            </li>
          </>
        )}

        {user === "instructor" && (
          <>
            <li className="collection-item">
              <a href="/ins/see/students">Students List</a>
            </li>

            <li className="collection-item">
              <a href="/ins/submit/grades">Enter Grades</a>
            </li>

            <li className="collection-item">
              <a href="/logout">Logout</a>
            </li>
          </>
        )}

        {user === "student" && (
          <>
            <li className="collection-item">
              <a href="/student/grade">Your Grades</a>
            </li>

            <li className="collection-item">
              <a href="/student/courses">Courses You Will Take</a>
            </li>
          </>
        )}

        {user === "departmentHead" && (
          <>
            <li className="collection-item">
              <a href="/students">Students In Department</a>
            </li>
            <li className="collection-item">
              <a href="/students">Add Instructors</a>
            </li>

            <li className="collection-item">
              <a href="/students">Remove Instructors</a>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}

export default SidebarLinks;
