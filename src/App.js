import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import Avatar from "@material-ui/core/Avatar";

import SnackBar from "./SnackBar";

import Fade from "react-reveal/Fade";
import Typist from "react-typist";

import { Link } from "react-router-dom";

import "./App.css";

const styles = theme => ({
  root: {
    flexDirection: "row",
    display: "flex",
    margin: "auto",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.background.paper
  },
  list_item: {
    padding: "20px"
  }
});

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

function SimpleList(props) {
  const { classes } = props;
  return (
    <div>
      <Avatar
        style={{ margin: "10% auto" }}
        alt="CVRCE"
        src="https://media.glassdoor.com/sqll/609007/c-v-raman-college-of-engineering-squarelogo-1534916004379.png"
      />
      <Fade top cascade>
        <h1 style={{ textAlign: "center" }}>Welcome to CVRCE</h1>
      </Fade>
      <Typist stdTypingDelay={20} startDelay={2500}>
        <h3 style={{ textAlign: "center", color: "gray" }}>
          Select Your Position
        </h3>
      </Typist>
      <div className={classes.root}>
        <Fade bottom>
          <List component="nav">
            <Divider />
            <Link to="/student/login" style={{ textDecoration: "none" }}>
              <ListItem className={classes.list_item} button>
                <ListItemText className="flex-item" primary="Student" />
              </ListItem>
            </Link>
            <Divider />
            <Link to="/parent/login" style={{ textDecoration: "none" }}>
              <ListItem className={classes.list_item} button>
                <ListItemText primary="Parent" />
              </ListItem>
            </Link>
            <Divider />
            <Link to="/mentor/login" style={{ textDecoration: "none" }}>
              <ListItem className={classes.list_item} button>
                <ListItemText primary="Mentor" />
              </ListItem>
            </Link>
            <Divider />
            <Link to="/warden/login" style={{ textDecoration: "none" }}>
              <ListItem className={classes.list_item} button>
                <ListItemText primary="Warden" />
              </ListItem>
            </Link>
            <Divider />
            <Link to="/securityGuard/login" style={{ textDecoration: "none" }}>
              <ListItem className={classes.list_item} button>
                <ListItemText primary="Guards" />
              </ListItem>
            </Link>
            <Divider />
          </List>
        </Fade>
      </div>
    </div>
  );
}

SimpleList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleList);
