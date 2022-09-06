import { Component } from "react";

import auth from "../../services/auth";
import http from "../../services/httpServices";
import MainTitle from "../../common/MainTitle";
import SidebarLinks from "../../common/SidebarLinks";
import SidebarLogo from "../../common/SidebarLogo";

const url = "http://127.0.0.1:4000";

class StudentLogin extends Component {
  state = {
    data: {
      name: "",
      id: "",
      year: "1",
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
    const { department, id, name, year } = this.state.data;

    const apiUrl = `${url}/${department}/login/${year}`;

    try {
      const { data } = await http.post(apiUrl, {
        id: id,
        name: name,
      });

      auth.setToken(data);
      this.props.history.replace("/student/profile");
    } catch (ex) {
      if (ex.response && ex.response.status === 404) alert("Not found...");
      else if (ex.response && ex.response.status === 400)
        alert("Enter valid data..");
    }
  };

  render() {
    const { name, id, year, department } = this.state.data;

    if (auth.isAuthenticated() && auth.getUser().studentId) {
      this.props.history.replace("/");
      return;
    }

    return (
      <>
        <div className="row">
          <SidebarLogo />
          <MainTitle title="Student Login" />
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
                  style={{ borderBottom: "none" }}
                />
                <label htmlFor="name">Name</label>
              </div>
            </div>

            <div className="row">
              <div className="text-input input-field col s12 l8">
                <input
                  type="text"
                  autoComplete="off"
                  id="id"
                  value={id}
                  onChange={this.handleChange}
                  required
                  style={{ borderBottom: "none" }}
                />
                <label htmlFor="id">ID</label>
              </div>
            </div>

            <div className="row">
              <div className="text-input input-field col s12 l8">
                <select
                  style={{ border: "none" }}
                  className="browser-default"
                  name="year"
                  id="year"
                  value={year}
                  onChange={this.handleChange}
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </div>
            </div>

            <div className="row">
              <div className="text-input input-field col s12 l8">
                <select
                  name="department"
                  id="department"
                  className="browser-default"
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

export default StudentLogin;
