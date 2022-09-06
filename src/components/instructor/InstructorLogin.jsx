import { Component } from "react";

import SidebarLogo from "../../common/SidebarLogo";
import SidebarLinks from "../../common/SidebarLinks";
import MainTitle from "../../common/MainTitle";

import auth from "../../services/auth";
import http from "../../services/httpServices";

const url = "http://127.0.0.1:4000";

class StaffLogin extends Component {
  state = {
    data: {
      name: "",
      password: "",
      department: "accounting",
    },
  };

  handleChange = ({ target }) => {
    const data = { ...this.state.data };

    data[target.id] = target.value;
    this.setState({ data });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { department, name, password } = this.state.data;

    const apiUrl = `${url}/${department}/staff/login`;

    try {
      const { data } = await http.post(apiUrl, {
        password: password,
        name: name,
        department: department,
      });

      auth.setToken(data);
      this.props.history.replace("/staff/profile");
    } catch (ex) {
      if (ex.response && ex.response.status === 404) alert("Not found...");
      else if (ex.response && ex.response.status === 400)
        alert("Enter valid data..");
    }
  };

  render() {
    const { name, id, department } = this.state.data;

    if (auth.isAuthenticated() && !auth.getUser().studentId) {
      this.props.history.replace("/");

      return null;
    }

    return (
      <>
        <div className="row">
          <SidebarLogo />
          <MainTitle title="Staff Login" />
        </div>

        <div className="row">
          <SidebarLinks />
          <form onSubmit={this.handleSubmit} className="col s8 push-s1">
            <div className="row">
              <div className="text-input input-field col s12 l8">
                <input
                  type="text"
                  autoComplete="off"
                  id="name"
                  value={name}
                  onChange={this.handleChange}
                  required
                  style={{ border: "none" }}
                />
                <label htmlFor="name">Name</label>
              </div>
            </div>

            <div className="row">
              <div className="text-input input-field col s12 l8">
                <input
                  type="password"
                  autoComplete="off"
                  id="password"
                  value={id}
                  onChange={this.handleChange}
                  required
                  style={{ border: "none" }}
                />
                <label htmlFor="password">Password</label>
              </div>
            </div>

            <div className="row">
              <div className="text-input input-field col s12 l8">
                <select
                  className="browser-default"
                  name="department"
                  id="department"
                  value={department}
                  onChange={this.handleChange}
                  style={{ border: "none" }}
                >
                  <option value="accounting">Accounting and finance</option>
                  <option value="buad">Business Adminstration</option>
                  <option value="cs">Computer science</option>
                  <option value="management">Management</option>
                  <option value="marketing">Marketing Management</option>
                </select>
              </div>
            </div>

            <div className="input-field">
              <button
                className="btn waves-effect waves-light btn-large"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default StaffLogin;
