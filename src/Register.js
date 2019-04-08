import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";

import axios from "axios";

import Notifier, { openSnackbar } from "./SnackBar";

const style = {
  textfield: {
    marginTop: "2%"
  }
};

class Add extends React.Component {
  state = {
    mentor: "",
    parent: "",
    warden: ""
  };
  constructor(props) {
    super(props);
    this.handleSubmit1 = this.handleSubmit1.bind(this);
    this.handleSubmit2 = this.handleSubmit2.bind(this);
    this.handleSubmit3 = this.handleSubmit3.bind(this);
    this.handleSubmit4 = this.handleSubmit4.bind(this);
    this.handleSubmit5 = this.handleSubmit5.bind(this);
  }
  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
    this.setState({
      result: ""
    });
  };
  handleSubmit1(event) {
    event.preventDefault();
    axios
      .post("https://hostelapp2.herokuapp.com/parent/register", {
        name: this.state.name,
        email: this.state.email,
        phoneNo: this.state.phoneNo,
        password: this.state.password,
        parentId: this.state.parentId,
        type: "parent"
      })
      .then(res => {
        if (!res.data.error) {
          openSnackbar({
            message: `${res.data.name} is added as ${res.data.type}`
          });
          setTimeout(() => {
            this.props.history.goBack();
          }, 3000);
        }
        if (res.data.error) {
          openSnackbar({
            message: `${res.data.error}`
          });
        }
      })
      .catch(err => alert(err));
  }

  handleSubmit2(event) {
    event.preventDefault();
    axios
      .post("https://hostelapp2.herokuapp.com/mentor/register", {
        name: this.state.name,
        email: this.state.email,
        phoneNo: this.state.phoneNo,
        password: this.state.password,
        employeeId: this.state.employeeId,
        type: "mentor"
      })
      .then(res => {
        if (!res.data.error) {
          openSnackbar({
            message: `${res.data.name} is added as ${res.data.type}`
          });
          setTimeout(() => {
            this.props.history.goBack();
          }, 3000);
        }
        if (res.data.error) {
          openSnackbar({
            message: `${res.data.error}`
          });
        }
      })
      .catch(err => alert(err));
  }
  handleSubmit4(event) {
    event.preventDefault();
    axios
      .post("https://hostelapp2.herokuapp.com/warden/register", {
        name: this.state.name,
        email: this.state.email,
        phoneNo: this.state.phoneNo,
        password: this.state.password,
        employeeId: this.state.employeeId,
        type: "warden"
      })
      .then(res => {
        if (!res.data.error) {
          openSnackbar({
            message: `${res.data.name} is added as ${res.data.type}`
          });
          setTimeout(() => {
            this.props.history.goBack();
          }, 3000);
        }
        if (res.data.error) {
          openSnackbar({
            message: `${res.data.error}`
          });
        }
      })
      .catch(err => alert(err));
  }
  handleSubmit5(event) {
    event.preventDefault();
    axios
      .post("https://hostelapp2.herokuapp.com/securityguard/register", {
        name: this.state.name,
        email: this.state.email,
        phoneNo: this.state.phoneNo,
        password: this.state.password,
        employeeId: this.state.employeeId,
        type: "securityGuard"
      })
      .then(res => {
        if (!res.data.error) {
          openSnackbar({
            message: `${res.data.name} is added as ${res.data.type}`
          });
          setTimeout(() => {
            this.props.history.goBack();
          }, 3000);
        }
        if (res.data.error) {
          openSnackbar({
            message: `${res.data.error}`
          });
        }
      })
      .catch(err => alert(err));
  }

  handleSubmit3(event) {
    event.preventDefault();
    axios
      .post("https://hostelapp2.herokuapp.com/student/register", {
        name: this.state.name,
        password: this.state.password,
        registrationNumber: this.state.registrationNumber,
        rollNumber: this.state.rollNumber,
        branch: this.state.branch,
        year: this.state.year,
        course: this.state.course,
        group: this.state.group,
        section: this.state.section,
        type: "student",
        contactNumber: this.state.contactNumber
      })
      .then(res => {
        if (!res.data.error) {
          openSnackbar({
            message: `${res.data.name} is added as ${res.data.type}`
          });
          setTimeout(() => {
            this.props.history.goBack();
          }, 3000);
        }
        if (res.data.error) {
          openSnackbar({
            message: `${res.data.error}`
          });
        }
      })
      .catch(err => alert(err));
  }

  render() {
    const { classes } = this.props;
    return (
      <div
        style={{
          textAlign: "center",
          width: "80%",
          margin: "0 auto",
          marginTop: "10%"
        }}>
        <Notifier />
        {this.props.match.params.id == "parent" ? (
          <div>
            <h1>Parent</h1>
            <form onSubmit={this.handleSubmit1}>
              <TextField
                style={style.textfield}
                fullWidth
                color="primary"
                onChange={this.handleChange}
                variant="outlined"
                label="Name"
                name="parent"
                id="name"
              />
              <br />
              <TextField
                style={style.textfield}
                fullWidth
                color="primary"
                onChange={this.handleChange}
                variant="outlined"
                label="Email"
                name="parent"
                id="email"
              />
              <br />
              <TextField
                style={style.textfield}
                fullWidth
                color="primary"
                onChange={this.handleChange}
                variant="outlined"
                label="Phone No"
                name="parent"
                id="phoneNo"
                type="number"
              />
              <br />
              <TextField
                style={style.textfield}
                fullWidth
                color="primary"
                onChange={this.handleChange}
                variant="outlined"
                label="Password"
                name="parent"
                type="password"
                id="password"
              />
              <br />
              <TextField
                style={style.textfield}
                fullWidth
                color="primary"
                onChange={this.handleChange}
                variant="outlined"
                label="Parent Id"
                name="parent"
                id="parentId"
                type="number"
              />

              <br />
              <br />
              <Button
                style={{ margin: "auto", width: "210px" }}
                color="primary"
                variant="outlined"
                type="submit">
                Add Parent
              </Button>
            </form>
          </div>
        ) : (
          ""
        )}
        {this.props.match.params.id == "mentor" ? (
          <div>
            <h1>Mentor</h1>
            <form onSubmit={this.handleSubmit2}>
              <TextField
                style={style.textfield}
                fullWidth
                color="primary"
                onChange={this.handleChange}
                variant="outlined"
                label="Name"
                name="parent"
                id="name"
              />
              <br />
              <TextField
                style={style.textfield}
                fullWidth
                color="primary"
                onChange={this.handleChange}
                variant="outlined"
                label="Email"
                name="parent"
                id="email"
              />
              <br />
              <TextField
                style={style.textfield}
                fullWidth
                color="primary"
                onChange={this.handleChange}
                variant="outlined"
                label="Phone No"
                name="parent"
                id="phoneNo"
                type="number"
              />
              <br />
              <TextField
                style={style.textfield}
                fullWidth
                color="primary"
                onChange={this.handleChange}
                variant="outlined"
                label="Password"
                name="parent"
                id="password"
                type="password"
              />
              <br />
              <TextField
                style={style.textfield}
                fullWidth
                color="primary"
                onChange={this.handleChange}
                variant="outlined"
                label="Employee Id"
                name="parent"
                id="employeeId"
                type="number"
              />

              <br />
              <br />
              <Button
                style={{ margin: "auto", width: "210px" }}
                color="primary"
                variant="outlined"
                type="submit">
                Add Mentor
              </Button>
            </form>
          </div>
        ) : (
          ""
        )}
        {this.props.match.params.id == "student" ? (
          <div>
            <h1>Student</h1>
            <form onSubmit={this.handleSubmit3}>
              <TextField
                style={style.textfield}
                fullWidth
                color="primary"
                onChange={this.handleChange}
                variant="outlined"
                label="Name"
                id="name"
              />
              <br />
              <TextField
                style={style.textfield}
                fullWidth
                color="primary"
                onChange={this.handleChange}
                variant="outlined"
                label="Password"
                id="password"
                type="password"
                autoComplete="nope"
              />
              <br />
              <TextField
                style={style.textfield}
                fullWidth
                color="primary"
                onChange={this.handleChange}
                variant="outlined"
                label="Registration Number"
                id="registrationNumber"
              />
              <br />
              <TextField
                style={style.textfield}
                fullWidth
                color="primary"
                onChange={this.handleChange}
                variant="outlined"
                label="Roll Number"
                id="rollNumber"
              />
              <br />
              <TextField
                style={style.textfield}
                fullWidth
                color="primary"
                onChange={this.handleChange}
                variant="outlined"
                label="Branch"
                id="branch"
              />
              <br />
              <TextField
                style={style.textfield}
                fullWidth
                color="primary"
                onChange={this.handleChange}
                variant="outlined"
                label="Year"
                id="year"
                type="number"
              />
              <br />
              <TextField
                style={style.textfield}
                fullWidth
                color="primary"
                onChange={this.handleChange}
                variant="outlined"
                label="Section"
                id="section"
              />
              <br />
              <TextField
                style={style.textfield}
                fullWidth
                color="primary"
                onChange={this.handleChange}
                variant="outlined"
                label="Group"
                id="group"
              />
              <br />

              <TextField
                style={style.textfield}
                fullWidth
                color="primary"
                onChange={this.handleChange}
                variant="outlined"
                label="Contact Number"
                id="contactNumber"
                type="number"
              />
              <br />
              <br />
              <Button
                style={{ margin: "auto", width: "210px" }}
                color="primary"
                variant="outlined"
                type="submit">
                Add Student
              </Button>
            </form>
          </div>
        ) : (
          ""
        )}
        {this.props.match.params.id == "warden" ? (
          <div>
            <h1>Warden</h1>
            <form onSubmit={this.handleSubmit4}>
              <TextField
                style={style.textfield}
                fullWidth
                color="primary"
                onChange={this.handleChange}
                variant="outlined"
                label="Name"
                name="parent"
                id="name"
              />
              <br />
              <TextField
                style={style.textfield}
                fullWidth
                color="primary"
                onChange={this.handleChange}
                variant="outlined"
                label="Email"
                name="parent"
                id="email"
              />
              <br />
              <TextField
                style={style.textfield}
                fullWidth
                color="primary"
                onChange={this.handleChange}
                variant="outlined"
                label="Phone No"
                name="parent"
                id="phoneNo"
                type="number"
              />
              <br />
              <TextField
                style={style.textfield}
                fullWidth
                color="primary"
                onChange={this.handleChange}
                variant="outlined"
                label="Password"
                name="parent"
                id="password"
                type="password"
              />
              <br />
              <TextField
                style={style.textfield}
                fullWidth
                color="primary"
                onChange={this.handleChange}
                variant="outlined"
                label="Employee Id"
                name="parent"
                id="employeeId"
                type="number"
              />

              <br />
              <br />
              <Button
                style={{ margin: "auto", width: "210px" }}
                color="primary"
                variant="outlined"
                type="submit">
                Add Warden
              </Button>
            </form>
          </div>
        ) : (
          ""
        )}
        {this.props.match.params.id == "securityGuard" ? (
          <div>
            <h1>SecurityGuard</h1>
            <form onSubmit={this.handleSubmit5}>
              <TextField
                style={style.textfield}
                fullWidth
                color="primary"
                onChange={this.handleChange}
                variant="outlined"
                label="Name"
                name="parent"
                id="name"
              />
              <br />
              <TextField
                style={style.textfield}
                fullWidth
                color="primary"
                onChange={this.handleChange}
                variant="outlined"
                label="Email"
                name="parent"
                id="email"
              />
              <br />
              <TextField
                style={style.textfield}
                fullWidth
                color="primary"
                onChange={this.handleChange}
                variant="outlined"
                label="Phone No"
                name="parent"
                id="phoneNo"
                type="number"
              />
              <br />
              <TextField
                style={style.textfield}
                fullWidth
                color="primary"
                onChange={this.handleChange}
                variant="outlined"
                label="Password"
                name="parent"
                id="password"
                type="password"
              />
              <br />
              <TextField
                style={style.textfield}
                fullWidth
                color="primary"
                onChange={this.handleChange}
                variant="outlined"
                label="Employee Id"
                name="parent"
                id="employeeId"
                type="number"
              />

              <br />
              <br />
              <Button
                style={{ margin: "auto", width: "210px" }}
                color="primary"
                variant="outlined"
                type="submit">
                Add SecurityGuard
              </Button>
            </form>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Add;
