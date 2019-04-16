import React from "react";
import AppBar from "./AppBar";
import Bottom from "./BottomNavbar";
import setAuthToken from "../utils/setAuthToken";

import axios from "axios";
import Loader from "../Loader";
class App extends React.Component {
  state = {
    student: null
  };
  componentDidMount() {
    setAuthToken();
    axios
      .get(`https://hostelapp2.herokuapp.com/student/current`)
      .then(res => this.setState({ student: res.data }))
      .catch(err => console.log(err));
  }
  render() {
    if (this.state.student)
      return (
        <div>
          <AppBar student={this.state.student} />

          <Bottom student={this.state.student} />
        </div>
      );
    return (
      <div>
        <Loader />
      </div>
    );
  }
}

export default App;
