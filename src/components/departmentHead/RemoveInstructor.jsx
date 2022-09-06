import { useState } from "react";

import MainTitle from "../../common/MainTitle";
import SidebarLinks from "../../common/SidebarLinks";
import SidebarLogo from "../../common/SidebarLogo";
import auth from "../../services/auth";
import http from "../../services/httpServices";

function RemoveInstructor() {
  const { departmentHeadOf } = auth.getUser();
  const [instructors, setInstructors] = useState([]);

  const fetchInstructors = () => {
    http
      .get(`http://localhost:4000/${departmentHeadOf}/dhead/insList`)
      .then(({ data }) => setInstructors(data))
      .catch(() => {});
  };

  const removeInstructor = async (id) => {
    const prevData = [...instructors];
    const index = instructors.findIndex((i) => i._id === id);

    instructors.splice(index, 1);

    setInstructors([...instructors]);

    try {
      const response = await http.delete(
        `http://localhost:4000/${departmentHeadOf}/dhead/removeIns/${id}`
      );

      console.log(response);
    } catch (ex) {
      setInstructors(prevData);
    }
  };

  return (
    <>
      <div className="row">
        <SidebarLogo />
        <MainTitle title="Remove instructors" />
      </div>

      <div className="row">
        <SidebarLinks />

        <div className="col s8 push-s1">
          <button className="btn" onClick={fetchInstructors}>
            Get instructors
          </button>

          {instructors.length !== 0 && (
            <table>
              <thead>
                <tr>
                  <td>Name</td>
                  <td>Teaching year</td>
                </tr>
              </thead>

              <tbody>
                {instructors.map((i) => (
                  <tr key={i._id}>
                    <td>{i.name}</td>
                    <td>2</td>
                    <td>
                      <button
                        className="btn btn-small"
                        onClick={() => removeInstructor(i._id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
}

export default RemoveInstructor;
