import React from "react";
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";

import axios from "axios";
import setAuthToken from "./utils/setAuthToken";
import jwt_decode from "jwt-decode";

import CircularProgress from "@material-ui/core/CircularProgress";
import ButtonLoader from "./utils/buttonLoader";
import green from "@material-ui/core/colors/green";

import { Link } from "react-router-dom";
import Notifier, { openSnackbar } from "./SnackBar";

const styles = theme => ({
  main: {
    width: "auto",
    display: "block", // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    },
    marginTop: "30%"
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  },
  root: {
    display: "flex",
    alignItems: "center"
  },
  wrapper: {
    margin: theme.spacing.unit,
    position: "relative"
  },
  buttonSuccess: {
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[700]
    }
  },
  fabProgress: {
    color: green[500],
    position: "absolute",
    top: -6,
    left: -6,
    zIndex: 1
  },
  buttonProgress: {
    color: green[500],
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12
  }
});

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
   
  }
  state = {
    loading: false,
    success: false
  };

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  handleButtonClick = () => {};

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const app = "";
    if (!this.state.loading) {
      this.setState(
        {
          success: false,
          loading: true
        },
        () => {
          this.timer = setTimeout(() => {
            this.setState({
              loading: false,
              success: true
            });
          }, 10000);
        }
      );
    }

    const data = {
      registrationNumber: this.state.email,
      employeeId: this.state.email,
      parentId: this.state.email,
      password: this.state.password
    };

    axios
      .post(
        `https://hostelapp2.herokuapp.com/${this.props.match.params.id}/login`,
        data
      )
      .then(res => {
        // Save to localStorage
        const { token } = res.data;
        // Set token to ls
        localStorage.setItem("jwtToken", token);
        // Set token to Auth header
        setAuthToken();
        // Decode token to get user data
        const decoded = jwt_decode(token);
        this.props.history.push(`/${this.props.match.params.id}`);
      })
      .catch(function(err) {
        openSnackbar({
          message: `err`
        });
      });
  };

  render() {
    const { loading, success } = this.state;
    const { classes } = this.props;
    return (
      <main className={classes.main}>
        <Notifier />
        <CssBaseline />
        <Paper className={classes.paper}>
          <Avatar
            alt="Remy Sharp"
            src="https://media.glassdoor.com/sqll/609007/c-v-raman-college-of-engineering-squarelogo-1534916004379.png"
          />
          <Typography component="h1" variant="h5">
            {`${this.props.match.params.id.toUpperCase()} SIGN IN`}
          </Typography>
          <form onSubmit={this.handleSubmit} className={classes.form}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">User Id</InputLabel>
              <Input
                value={this.state.email}
                onChange={this.handleChange}
                id="email"
                name="email"
                autoComplete="email"
              />
            </FormControl>

            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                value={this.state.password}
                onChange={this.handleChange}
                name="password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </FormControl>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            {/* <Typography
              variant="caption"
              color="error"
              gutterBottom
              align="center">
              Invalid User id and Password
            </Typography> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              disabled={loading}
              className={classes.buttonClassname}>
              Submit
              {loading && (
                <CircularProgress
                  size={24}
                  className={classes.buttonProgress}
                />
              )}
            </Button>
          </form>
        </Paper>

        <div>
          <Typography
            style={{ textAlign: "center", marginTop: "10%" }}
            component="h1"
            variant="h5">
            {`Not have Account Yet ?`}
          </Typography>

          <Link
            style={{ textDecoration: "none" }}
            to={`/${this.props.match.params.id}/register`}>
            <Button
              type="submit"
              style={{ marginTop: "5%" }}
              fullWidth
              variant="outlined"
              color="primary"
              className={classes.buttonClassname}>
              Register
            </Button>
          </Link>
        </div>
      </main>
    );
  }
}
SignIn.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SignIn);
