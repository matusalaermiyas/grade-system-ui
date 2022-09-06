import { useState } from "react";
import MainTitle from "../../common/MainTitle";
import SidebarLinks from "../../common/SidebarLinks";
import SidebarLogo from "../../common/SidebarLogo";

function CreateInstructor() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [teachingYear, setTeachingYear] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(teachingYear);
  };

  const handleTeachingYear = (e) => {
    const index = teachingYear.indexOf(e.target.value);

    if (index < 0) teachingYear.push(e.target.value);
    else teachingYear.splice(index, 1);

    setTeachingYear(teachingYear);
  };

  return (
    <>
      <div className="row">
        <SidebarLogo />
        <MainTitle title="Add an instructor" />
      </div>

      <div className="row">
        <SidebarLinks />

        <form className="col s8 push-s1" onSubmit={handleSubmit}>
          <div className="row">
            <div className="text-input input-field col s12 l8">
              <input
                type="text"
                autoComplete="off"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                style={{ borderBottom: "none" }}
              />
              <label htmlFor="name">Instructor name</label>
            </div>
          </div>

          <div className="row">
            <div className="text-input input-field col s12 l8">
              <input
                type="text"
                autoComplete="off"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{ borderBottom: "none" }}
              />
              <label htmlFor="password">Instructor password</label>
            </div>
          </div>

          <div className="row">
            <div className="col s12 l8">
              <p style={{ fontWeight: "bold" }}>Teaching year</p>
              <p>
                <label>
                  <input
                    type="checkbox"
                    value="1"
                    onChange={handleTeachingYear}
                  />
                  <span>
                    1<sup>st</sup> year
                  </span>
                </label>
              </p>
              <p>
                <label>
                  <input
                    type="checkbox"
                    value="2"
                    onChange={handleTeachingYear}
                  />
                  <span>
                    2<sup>nd</sup> year
                  </span>
                </label>
              </p>
              <p>
                <label>
                  <input
                    type="checkbox"
                    value="3"
                    onChange={handleTeachingYear}
                  />
                  <span>
                    3<sup>rd</sup> year
                  </span>
                </label>
              </p>
              <p>
                <label>
                  <input
                    type="checkbox"
                    value="4"
                    onChange={handleTeachingYear}
                  />
                  <span>
                    4<sup>th</sup> year
                  </span>
                </label>
              </p>
            </div>
          </div>

          <div className="input-field">
            <button className="btn waves-effect waves-light" type="submit">
              Add instructor
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default CreateInstructor;
