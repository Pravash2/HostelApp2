//importing the packages for Loader
import React from "react";
import Loader from "react-loader-spinner";
import Bounce from "react-reveal/Bounce";
import Typography from "@material-ui/core/Typography";
export default class App extends React.Component {
  
  //other logic
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          flexDirection: "column"
        }}>
        <Loader type="Triangle" color="#00BFFF" height="100" width="100" />

        <Typography component="h1" variant="h5">
          <Bounce bottom cascade>
            Loading...
          </Bounce>
        </Typography>
      </div>
    );
  }
}
