import React, { Component } from "react";
import QrReader from "react-qr-reader";
import { Button } from "@material-ui/core";
import axios from "axios";
import Card from "./Card1";

class Test extends Component {
  state = { result: "", result2: "" };

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
      .post(`${this.state.result}`)
      .then(res => this.setState({ result2: res.data }))
      .catch(err => console.log(err));
  }
  componentDidMount() {
    axios
      .get(`https://hostelapp2.herokuapp.com/student/food`)
      .then(res => this.setState({ result2: res.data }))
      .catch(err => console.log(err));
  }
  render() {
    if (
      Date(this.state.result2.Token)
        .toString()
        .substring(0, 15) ===
      Date(Date.now())
        .toString()
        .substring(0, 15)
    ) {
      if (
        parseInt(
          Date(this.state.result2.Token)
            .toString()
            .substring(15, 18)
        ) > 6 &&
        parseInt(
          Date(this.state.result2.Token)
            .toString()
            .substring(15, 18)
        ) < 10
      ) {
        return <Card data={this.state.result2} />;
      }
      if (
        parseInt(
          Date(this.state.result2.Token)
            .toString()
            .substring(15, 18)
        ) > 11 &&
        parseInt(
          Date(this.state.result2.Token)
            .toString()
            .substring(15, 18)
        ) < 14
      ) {
        return <Card data={this.state.result2} />;
      }
      if (
        parseInt(
          Date(this.state.result2.Token)
            .toString()
            .substring(15, 18)
        ) > 18 &&
        parseInt(
          Date(this.state.result2.Token)
            .toString()
            .substring(15, 18)
        ) < 23
      ) {
        return <Card data={this.state.result2} />;
      }
    } else {
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
              Click To Generate
            </Button>{" "}
          </div>
        );
      }
    }
    return <div>Hello</div>;
  }
}
export default Test;
