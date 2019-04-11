import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";
import WorkIcon from "@material-ui/icons/Work";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";
import AccountCircle from "@material-ui/icons/Person";

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    marginTop: "10%",
    backgroundColor: theme.palette.background.paper
  }
});

function FolderList(props) {
  const { classes } = props;
  return (
    <List className={classes.root}>
      <h2>Student Not In The Hostel</h2>
      <ListItem>
        <Avatar>
          <AccountCircle />
        </Avatar>
        <ListItemText
          primary="Pravash Kumar Behera"
          secondary="2 Year CSE 2 C"
        />
      </ListItem>
      <ListItem>
        <Avatar>
          <AccountCircle />
        </Avatar>
        <ListItemText primary="Sourav Mishra" secondary="2 Year CSE 2 C" />
      </ListItem>
      <ListItem>
        <Avatar>
          <AccountCircle />
        </Avatar>
        <ListItemText primary="J.K Som" secondary="2 Year CSE 2 C" />
      </ListItem>
    </List>
  );
}

FolderList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FolderList);
