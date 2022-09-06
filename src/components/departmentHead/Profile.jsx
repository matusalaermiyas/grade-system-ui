import SidebarLogo from "../../common/SidebarLogo";
import MainTitle from "../../common/MainTitle";
import SidebarLinks from "../../common/SidebarLinks";

function Profile() {
  return (
    <>
      <div className="row">
        <SidebarLogo />
        <MainTitle title="Your profile" />
      </div>

      <div className="row">
        <SidebarLinks />
        <div className="col s8 push-s1">
          <ul className="collection">
            <li className="collection-item">
              <a href="/dhead/see/students">Students In My Department</a>
            </li>
            <li className="collection-item">
              <a href="/dhead/add/ins">Add Instructors</a>
            </li>
            <li className="collection-item">
              <a href="/dhead/remove/ins">Remove Instructors</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Profile;
