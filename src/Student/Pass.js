import React from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

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
  handleSubmit1(event) {
    event.preventDefault();
    axios
      .post("https://hostelapp2.herokuapp.com/student/pass", this.state)
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
  }
  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <form
          style={{ width: "80%", margin: "auto" }}
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
      </div>
    );
  }
}

export default App;
