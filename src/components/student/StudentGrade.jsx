import React, { Component } from "react";
import _ from "lodash";

import auth from "../../services/auth";
import { displayText } from "../../common/display";
import http from "../../services/httpServices";
import SidebarLogo from "../../common/SidebarLogo";
import MainTitle from "../../common/MainTitle";
import SidebarLinks from "../../common/SidebarLinks";

const url = "http://127.0.0.1:4000";

class StudentGrade extends Component {
  state = {
    grade: {
      year: 1,
      semester: 1,
    },
    data: [],
    year: 1,
  };

  async componentDidMount() {
    if (!auth.isAuthenticated() || !auth.getUser().studentId) return;

    const student = auth.getUser();
    const apiUrl = `${url}/${student.department}/grade`;
    const year = student.year;

    console.log(auth.getUser());

    try {
      const { data } = await http.get(apiUrl);
      this.setState({ data, year });
    } catch (ex) {
      console.log("Error occured ...");
    }
  }

  render() {
    if (!auth.isAuthenticated() || !auth.getUser().studentId)
      this.props.history.replace("/student/login");

    return (
      <>
        <div className="row">
          <SidebarLogo />
          <MainTitle title="Your grades" />
        </div>

        <div className="row">
          <SidebarLinks />

          <div className="col s3 input-field">{this.displayYear()}</div>

          <div className="col s3 input-field">{this.displaySemester()}</div>

          <div className="col s8">{this.renderGrades()}</div>
        </div>
      </>
    );
  }

  handleChange = ({ target }) => {
    const grade = { ...this.state.grade };

    grade[target.id] = target.value;
    this.setState({ grade });
  };

  displayYear = () => {
    const years = _.range(1, this.state.year + 1);

    return (
      <select
        value={this.state.grade.year}
        onChange={this.handleChange}
        id="year"
        className="browser-default"
      >
        {years.map((year) => (
          <option value={year} key={year}>
            {displayText(year) + " year"}
          </option>
        ))}
      </select>
    );
  };

  displaySemester = () => {
    return (
      <select
        value={this.state.grade.semester}
        onChange={this.handleChange}
        id="semester"
        className="browser-default"
      >
        {_.range(1, 4).map((semester) => (
          <option key={semester} value={semester}>
            {displayText(semester) + " semester"}
          </option>
        ))}
      </select>
    );
  };

  renderGrades = () => {
    const { data, grade } = this.state;
    const grades = data[grade.year - 1];

    if (grades != null)
      return (
        <table className="striped respsonsive-table" style={{ marginTop: 10 }}>
          <thead>
            <tr>
              <th>Coursename</th>
              <th>Credit Hour</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            {grades[grade.semester - 1].map((g) => (
              <tr key={g._id}>
                <td>{g.coursename}</td>
                <td>{g.creditHour}</td>
                <td>{"A"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
  };
}

export default StudentGrade;
