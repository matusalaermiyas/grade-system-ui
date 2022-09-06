import { Link } from "react-router-dom";
import logo from "../logo.png";
import auth from "../services/auth";

function MobileSidebar() {
  let user = "notLogged";

  if (auth.isAuthenticated()) user = auth.getUserType();

  console.log(user);

  return (
    <>
      <ul id="slide-out" className="sidenav sidenav-close">
        <li>
          <img src={logo} alt="Unity University" />
        </li>

        {user === "notLogged" && (
          <>
            <li>
              <a href="/login">Department head login</a>
            </li>

            <li>
              <a href="/login">Instructor login</a>
            </li>

            <li>
              <a href="/login">Student login</a>
            </li>

            <li>
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
            <li>
              <a href="/students">Students list</a>
            </li>

            <li>
              <a href="/grades">Enter grades</a>
            </li>

            <li>
              <a href="/logout">Logout</a>
            </li>
          </>
        )}

        {user === "student" && (
          <>
            <li>
              <a href="/grades">Your grades</a>
            </li>

            <li>
              <a href="/courses">Courses you will take</a>
            </li>
          </>
        )}

        {user === "departmentHead" && (
          <>
            <li>
              <a href="/students">Students in department</a>
            </li>
            <li>
              <a href="/students">Add instructors</a>
            </li>

            <li>
              <a href="/students">Remove instructors</a>
            </li>
          </>
        )}
      </ul>

      <a
        href="d"
        data-target="slide-out"
        className="hide-on-large-only sidenav-trigger"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
        </svg>
      </a>
    </>
  );
}

export default MobileSidebar;
