import React, { Component } from "react";
import QrReader from "react-qr-reader";
import { Button } from "@material-ui/core";
import axios from "axios";
class Test extends Component {
  state = { result: "No result", result2: "" };
  handleScan = data => {
    if (data) {
      this.setState({ result: data });
    }
  };
  handleError = err => {
    console.error(err);
  };
  onClickButton() {
    axios
      .get(`${this.state.result}`)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }
  componentDidMount() {
    axios
      .get(``)
      .then(res => this.setState({ result2: res.data }))
      .catch(err => console.log(err));
  }
  render() {
    if (!this.state.result2) {
      if (!this.state.result) {
        return (
          <div>
            {" "}
            <QrReader
              delay={300}
              onError={this.handleError}
              onScan={this.handleScan}
              style={{ width: "100%" }}
            />{" "}
          </div>
        );
      } else {
        return (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh"
            }}
          >
            {" "}
            <Button
              onClick={() => this.onClickButton()}
              color="secondary"
              variant="contained"
            >
              {" "}
              {this.state.result}{" "}
            </Button>{" "}
          </div>
        );
      }
    } else {
      return <div>Card</div>;
    }
  }
}
export default Test;
