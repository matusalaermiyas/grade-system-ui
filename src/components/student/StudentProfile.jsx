import { Link } from "react-router-dom";
import auth from "../../services/auth";
import MainTitle from "../../common/MainTitle";
import SidebarLinks from "../../common/SidebarLinks";
import SidebarLogo from "../../common/SidebarLogo";

function StudentProfile(props) {
  if (!auth.isAuthenticated() || !auth.getUser().studentId)
    props.history.replace("/student/login");

  return (
    <>
      <div className="row">
        <SidebarLogo />
        <MainTitle title="Profile" />
      </div>

      <div className="row">
        <SidebarLinks />

        <div className="col s6 push-s1">
          <p>
            <a href="/student/grade">Watch grades</a>
          </p>
          <p>
            <Link to="/student/account">Account</Link>
          </p>
          <p>
            <Link to="/logout">Logout</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default StudentProfile;
