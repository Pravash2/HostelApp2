import React from "react";
import Loader from "react-loader-spinner";
export default class App extends React.Component {
  //other logic
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh"
        }}>
        <Loader type="Triangle" color="#00BFFF" height="100" width="100" />
      </div>
    );
  }
}
