//importing the packages
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
import Spin from "react-reveal/Spin";
import Fade from "react-reveal/Fade";
import Typist from "react-typist";
import { Link } from "react-router-dom";

//importing the pages
import SnackBar from "./SnackBar";
import "./App.css";
import Logo from "./logo.png";

//declaring the styles
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

//Adding ListItem to Link property
function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

//Creating Simple List function
function SimpleList(props) {
  const { classes } = props;
  return (
    <div>
      <Spin>
        <Avatar style={{ margin: "10% auto" }} alt="CVRCE" src={Logo} />
      </Spin>
      <Fade top cascade>
        <h1 id="welcome" style={{ textAlign: "center", textIndent: "2px" }}>
          Welcome to CVRCE
        </h1>
      </Fade>
      <Typist stdTypingDelay={20} startDelay={2500}>
        <h3
          id="welcome-small"
          style={{
            color: "gray",
            textIndent: "10px",
            textAlign: "center",
            letterSpacing: "3px"
          }}>
          Select Your Position
        </h3>
      </Typist>
      <div className={classes.root}>
        <Fade bottom>
          <List component="nav">
            <Divider />
            <Link to="/student/login" style={{ textDecoration: "none" }}>
              <ListItem className={classes.list_item} button>
                <ListItemText className="flex-item" primary="STUDENT" />
              </ListItem>
            </Link>
            <Divider />
            <Link to="/parent/login" style={{ textDecoration: "none" }}>
              <ListItem className={classes.list_item} button>
                <ListItemText primary="PARENT" />
              </ListItem>
            </Link>
            <Divider />
            <Link to="/mentor/login" style={{ textDecoration: "none" }}>
              <ListItem className={classes.list_item} button>
                <ListItemText primary="MENTOR" />
              </ListItem>
            </Link>
            <Divider />
            <Link to="/warden/login" style={{ textDecoration: "none" }}>
              <ListItem className={classes.list_item} button>
                <ListItemText primary="WARDEN" />
              </ListItem>
            </Link>
            <Divider />
            <Link to="/securityGuard/login" style={{ textDecoration: "none" }}>
              <ListItem className={classes.list_item} button>
                <ListItemText primary="GUARDS" />
              </ListItem>
            </Link>
            <Divider />
          </List>
        </Fade>
      </div>
    </div>
  );
}

//Some Extra Parameters
SimpleList.propTypes = {
  classes: PropTypes.object.isRequired
};

//exporting the SimpleList Function
export default withStyles(styles)(SimpleList);
