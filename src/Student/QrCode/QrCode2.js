import React, { Component } from "react";
import QrReader from "react-qr-reader";
import { Button } from "@material-ui/core";
import axios from "axios";
import Card from "./Card1";
import Card2 from "./Card2";
import Notifier, { openSnackbar } from "./snackBar";

class Test extends Component {
  state = {
    result2: "",
    resultt: ""
  };

  handleScan = data => {
    if (data) {
      this.setState({ resultt: data });
    }
  };
  handleError = err => {
    console.error(err);
  };
  onClickButton() {
    axios
      .post(`${this.state.resultt}`, {
        type: !this.state.result2.checking
          ? "out"
          : this.state.result2.checking[this.state.result2.checking.length - 1]
              .types == "in"
          ? "out"
          : "in"
      })
      .then(res => {
        if (this.state.result2) {
          alert(
            `You Register Sucessfully as ${
              this.state.result2.checking[
                this.state.result2.checking.length - 1
              ].types == "in"
                ? "Outing"
                : "InGoing"
            }`
          );
        } else {
          alert("You Register Successfully as Outing from Hostel");
          window.location.reload();
        }
      })
      .then(() => {
        axios
          .get(`http://localhost:3000/student/attendance`)
          .then(res => this.setState({ result2: res.data }))
          .catch(err => console.log(err));
      })
      .catch(
        err =>
          console.log(err) || alert("May QR Code Not Valid or NetWork ERROR")
      );
  }
  componentDidMount() {
    axios
      .get(`http://localhost:3000/student/attendance`)
      .then(res => this.setState({ result2: res.data }))
      .catch(err => console.log(err));
  }
  render() {
    if (this.state.result2) {
      if (!this.state.resultt) {
        return (
          <div>
            {" "}
            <QrReader
              delay={300}
              onError={this.handleError}
              onScan={this.handleScan}
              style={{ width: "100%" }}
            />{" "}
            <Card2 datas={this.state.result2} />
          </div>
        );
      } else {
        return (
          <div>
            {" "}
            <div
              style={{
                margin: "0 auto",
                marginTop: "10%",
                textAlign: "center"
              }}>
              <Button
                onClick={() => this.onClickButton(this)}
                color="secondary"
                variant="contained">
                {" "}
                Make Attendance
              </Button>{" "}
            </div>
            <Card2 datas={this.state.result2} />
          </div>
        );
      }
    } else {
      if (!this.state.resultt) {
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
          <div>
            {" "}
            <div
              style={{
                margin: "0 auto",
                marginTop: "10%",
                textAlign: "center"
              }}>
              <Button
                onClick={() => this.onClickButton(this)}
                color="secondary"
                variant="contained">
                {" "}
                Make Attendance
              </Button>{" "}
            </div>
          </div>
        );
      }
    }

    return <div>Hello</div>;
  }
}
export default Test;
