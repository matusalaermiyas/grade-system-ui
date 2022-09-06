import { useState } from "react";

import auth from "../../services/auth";
import http from "../../services/httpServices";
import MainTitle from "../../common/MainTitle";
import SidebarLogo from "../../common/SidebarLogo";

function StudentsList() {
  const { departmentHeadOf } = auth.getUser();

  const [year, setYear] = useState(1);
  const [students, setStudents] = useState([]);

  const handleClick = () => {
    http
      .get(`http://localhost:4000/${departmentHeadOf}/dhead/students/${year}`)
      .then(({ data }) => setStudents(data))
      .catch((ex) => {
        console.log(ex);
      });
  };

  return (
    <>
      <div className="row">
        <SidebarLogo />
        <MainTitle title="Students in department" />
      </div>

      <div className="row">
        <form className="col s8 push-s1">
          <div className="row">
            <div className="col s12 l4 input-field">
              <select
                className="browser-default"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>

            <div className="col s12 l4">
              <button className="btn" onClick={handleClick} type="button">
                Get students
              </button>
            </div>
          </div>
        </form>
      </div>

      {students.length !== 0 && (
        <div className="row">
          <div className="col s8 push-s1">
            <ul className="collection">
              {students.map((student) => (
                <li key={student._id} className="collection-item">
                  {student.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default StudentsList;
