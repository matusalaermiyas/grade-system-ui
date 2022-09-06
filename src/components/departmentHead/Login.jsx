import { useState } from "react";
import { toast } from "react-toastify";

import auth from "../../services/auth";
import http from "../../services/httpServices";

import MainTitle from "../../common/MainTitle";
import SidebarLinks from "../../common/SidebarLinks";
import SidebarLogo from "../../common/SidebarLogo";

function Login({ history }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [department, setDepartment] = useState("");

  const doSubmit = async (e) => {
    e.preventDefault();

    const apiUrl = `http://localhost:4000/${department}/dhead/login`;

    try {
      const { data } = await http.post(apiUrl, {
        name,
        password,
      });

      auth.setToken(data);

      history.replace("/dhead/profile");
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        toast.error("Invalid username, password, or department");
    }
  };

  return (
    <>
      <div className="row">
        <SidebarLogo />
        <MainTitle title="Department head login" />
      </div>

      <div className="row">
        <SidebarLinks />

        <form className="col s8 push-s1" onSubmit={doSubmit}>
          <div className="row">
            <div className="text-input input-field col s12 l8">
              <input
                id="name"
                type="text"
                autoComplete="off"
                onChange={(e) => setName(e.target.value)}
              />

              <label htmlFor="name">Name</label>
            </div>
          </div>

          <div className="row">
            <div className="text-input input-field col s12 l8">
              <input
                id="password"
                type="password"
                autoComplete="off"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <label htmlFor="password">Password</label>
            </div>
          </div>

          <div className="row">
            <div className="text-input input-field col s12 l8">
              <select
                className="browser-default"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
              >
                <option value="acc">Accounting and Finance</option>
                <option value="buad">Business Adminstration</option>
                <option value="cs">Computer Science</option>
                <option value="mgmt">Management</option>
                <option value="mkt">Marketing Management</option>
              </select>
            </div>
          </div>

          <div className="input-field">
            <button className="btn waves-effect waves-light" type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
