import { Component } from "react";
import { toast } from "react-toastify";
import { Progress } from "reactstrap";

import auth from "../../services/auth";
import { displayText, displayDepartment } from "../../common/display";
import http from "../../services/httpServices";
import SidebarLogo from "../../common/SidebarLogo";
import MainTitle from "../../common/MainTitle";
import SidebarLinks from "../../common/SidebarLinks";

const url = "http://127.0.0.1:4000";

class SubmitGrades extends Component {
  state = {
    data: {
      year: "",
      department: "",
      semester: "",
    },
    teachingDepartment: "",
    teachingYear: [],
    selectedFile: null,
    loaded: 0,
    submitted: false,
  };

  componentDidMount() {
    if (!auth.isAuthenticated() || auth.getUser().studentId) return;

    const instructor = auth.getUser();

    this.setState({
      teachingDepartment: instructor.teachingDepartment,
      teachingYear: instructor.teachingYear,
    });
  }

  handleChange = ({ target }) => {
    const data = { ...this.state.data };

    data[target.id] = target.value;
    this.setState({ data });
  };

  handleFileUpload = (e) => {
    if (this.validateFile(e))
      this.setState({ selectedFile: e.target.files[0], loaded: 0 });
    else {
      toast.warning("Invalid file type");
    }
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const data = this.state.data;

    const dataToSend = new FormData();
    dataToSend.append("file", this.state.selectedFile);

    const apiUrl = `${url}/staff/${data.department}/grade/${data.year}/${data.semester}`;
    this.setState({ submitting: true });

    try {
      this.setState({ submitting: true });

      await http.post(apiUrl, dataToSend, {
        onUploadProgress: (ProgressEvent) => {
          this.setState({
            loaded: (ProgressEvent.loaded / ProgressEvent.total) * 100,
          });
        },
      });

      toast.success("Your grade is submitted successfully.");
    } catch (ex) {
      toast.error("Error occured");
    }
  };

  renderDropdownSemester = () => {
    return (
      <>
        <option>Semester</option>
        <option value="1">{displayText(1) + " semester"}</option>
        <option value="2">{displayText(2) + " semester"}</option>
        <option value="3">{displayText(3) + " semester"}</option>
        <option value="4">{displayText(4) + " semester"}</option>
      </>
    );
  };

  renderDropDownYear = () => {
    return this.state.teachingYear.map((year) => (
      <option key={year} value={year}>
        {year}
      </option>
    ));
  };

  renderDropdownDepartment = () => {
    return (
      <option value={this.state.teachingDepartment}>
        {displayDepartment(this.state.teachingDepartment)}
      </option>
    );
  };

  validateFile = (e) =>
    e.target.files[0].type ===
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      ? true
      : false;

  render() {
    if (!auth.isAuthenticated() || auth.getUser().studentId) {
      this.props.history.replace("/staff/login");
      return null;
    }

    const { year, department, semester } = this.state.data;

    return (
      <>
        <div className="row">
          <SidebarLogo />
          <MainTitle title="Enter grades" />
        </div>

        <div className="row">
          <SidebarLinks />

          <form onSubmit={this.handleSubmit} className="col s8 push-s1">
            <div className="row">
              <div className="col s12 l4 input-field">
                <select
                  style={{ borderRadius: 15 }}
                  id="department"
                  value={department}
                  onChange={this.handleChange}
                  className="browser-default"
                >
                  <option>Department</option>
                  {this.renderDropdownDepartment()}
                </select>
              </div>

              <div className="col s12 l4 input-field">
                <select
                  style={{ borderRadius: 15 }}
                  id="year"
                  value={year}
                  onChange={this.handleChange}
                  className="browser-default"
                >
                  <option>Year</option>
                  {this.renderDropDownYear()}
                </select>
              </div>

              <div className="col s12 l4 input-field">
                <select
                  style={{ borderRadius: 15 }}
                  className="browser-default"
                  id="semester"
                  value={semester}
                  onChange={this.handleChange}
                >
                  {this.renderDropdownSemester()}
                </select>
              </div>
            </div>

            <div className="row">
              <div className="col s6">
                <div className="file-field input-field">
                  <div className="btn btn-small">
                    <span>File</span>
                    <input
                      type="file"
                      id="file"
                      name="file"
                      onChange={this.handleFileUpload}
                    />
                  </div>

                  <div className="file-path-wrapper">
                    <input
                      className="file-path validate"
                      type="text"
                      placeholder="Browse grades"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col s5">
                <button type="submit" className="btn btn-primary">
                  Submit grades
                </button>

                {this.state.submitting && (
                  <Progress max="100" color="success" value={this.state.loaded}>
                    {Math.round(this.state.loaded, 2)}%
                  </Progress>
                )}
              </div>
            </div>
          </form>
        </div>
      </>
    );
  }
}
export default SubmitGrades;
