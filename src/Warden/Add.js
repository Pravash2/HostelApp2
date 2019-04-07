import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";

import axios from "axios";

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
      .post("http://localhost:3000/parent/register", {
        name: this.state.name,
        email: this.state.email,
        phoneNo: this.state.phoneNo,
        password: this.state.password,
        parentId: this.state.parentId,
        type: "parent"
      })
      .then(res => alert(`${res.data.name} is added as ${res.data.type}`))
      .catch(err => console.log(err));
    window.location.reload();
  }

  handleSubmit2(event) {
    event.preventDefault();
    axios
      .post("http://localhost:3000/mentor/register", {
        name: this.state.name,
        email: this.state.email,
        phoneNo: this.state.phoneNo,
        password: this.state.password,
        employeeId: this.state.employeeId,
        type: "mentor"
      })
      .then(res => alert(`${res.data.name} is added as ${res.data.type}`))
      .catch(err => console.log(err));
    window.location.reload();
  }
  handleSubmit3(event) {
    event.preventDefault();
    axios
      .post("http://localhost:3000/student/register", {
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
      .then(res => alert(`${res.data.name} is added as ${res.data.type}`))
      .catch(err => console.log(err));
    window.location.reload();
  }

  render() {
    const { classes } = this.props;

    return (
      <div style={{ textAlign: "center" }}>
        <h1>Parent</h1>
        <form onSubmit={this.handleSubmit1}>
          <TextField
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
        <br />
        <br />
        <h1>Mentor</h1>
        <form onSubmit={this.handleSubmit2}>
          <TextField
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
        <br />
        <br />
        <h1>Student</h1>
        <form onSubmit={this.handleSubmit3}>
          <TextField
            fullWidth
            color="primary"
            onChange={this.handleChange}
            variant="outlined"
            label="Name"
            id="name"
          />
          <br />
          <TextField
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
            fullWidth
            color="primary"
            onChange={this.handleChange}
            variant="outlined"
            label="Registration Number"
            id="registrationNumber"
          />
          <br />
          <TextField
            fullWidth
            color="primary"
            onChange={this.handleChange}
            variant="outlined"
            label="Roll Number"
            id="rollNumber"
          />
          <br />
          <TextField
            fullWidth
            color="primary"
            onChange={this.handleChange}
            variant="outlined"
            label="Branch"
            id="branch"
          />
          <br />
          <TextField
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
            fullWidth
            color="primary"
            onChange={this.handleChange}
            variant="outlined"
            label="Section"
            id="section"
          />
          <br />
          <TextField
            fullWidth
            color="primary"
            onChange={this.handleChange}
            variant="outlined"
            label="Group"
            id="group"
          />
          <br />

          <TextField
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
        <br />
      </div>
    );
  }
}

export default Add;
