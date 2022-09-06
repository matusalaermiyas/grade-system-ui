import { Link } from "react-router-dom";

import auth from "../../services/auth";
import SidebarLogo from "../../common/SidebarLogo";
import MainTitle from "../../common/MainTitle";
import SidebarLinks from "../../common/SidebarLinks";

function StaffProfile(props) {
  if (!auth.isAuthenticated() || auth.getUser().studentId) {
    props.history.replace("/staff/login");
    return null;
  }

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
            <Link to="/staff/grade">Enter grade</Link>
          </p>
          <p>
            <Link to="/staff/students">Students</Link>
          </p>
          <p>
            <Link to="/logout">Logout</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default StaffProfile;
