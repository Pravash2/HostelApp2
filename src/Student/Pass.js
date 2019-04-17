import React from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

import Loader from "../Loader";
import Card from "./Card";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit1 = this.handleSubmit1.bind(this);
    this.state = {
      indate: "2019-03-26",
      outdate: "2019-03-27",
      purpose: ""
    };
  }
  componentDidMount() {
    axios
      .get("https://hostelapp2.herokuapp.com/student/pass")
      .then(res => this.setState({ pass: res.data }));
  }
  handleSubmit1(event) {
    event.preventDefault();
    axios
      .post("https://hostelapp2.herokuapp.com/student/pass", this.state)
      .then(() => {
        axios
          .get("https://hostelapp2.herokuapp.com/student/pass")
          .then(res => this.setState({ pass: res.data }));
      })
      .catch(err => console.log(err));
  }
  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };
  render() {
    if (!this.state.pass) {
      return (
        <div style={{ textAlign: "center" }}>
          <Paper style={{ padding: "10%" }}>
            <Typography variant="h5" gutterBottom>
              Outing Pass Form
            </Typography>
            <form
              style={{ width: "100%", margin: "auto", marginTop: "10%" }}
              onSubmit={this.handleSubmit1}>
              <TextField
                id="outdate"
                label="OutDate"
                type="date"
                fullWidth
                onChange={this.handleChange}
                defaultValue="2019-04-25"
                InputLabelProps={{
                  shrink: true
                }}
              />
              <br />
              <br />
              <TextField
                id="indate"
                label="Indate"
                type="date"
                fullWidth
                onChange={this.handleChange}
                defaultValue="2019-04-28"
                InputLabelProps={{
                  shrink: true
                }}
              />
              <br />
              <br />
              <TextField
                color="primary"
                onChange={this.handleChange}
                variant="outlined"
                label="Purpose"
                name="purpose"
                multiline
                rows="4"
                id="purpose"
                fullWidth
              />
              <br />
              <br />
              <br />
              <Button
                style={{ margin: "auto", width: "60%" }}
                color="primary"
                variant="outlined"
                type="submit">
                Submit
              </Button>
            </form>
          </Paper>
        </div>
      );
    } else {
      return <Card />;
    }
    return <Loader />;
  }
}

export default App;
