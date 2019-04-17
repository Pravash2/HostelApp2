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
import OutIcon from "@material-ui/icons/FlightTakeoff";
import InIcon from "@material-ui/icons/FlightLand";

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
  const profile = [...props.datas.checking].reverse();
  console.log(profile);
  return (
    <List className={classes.root}>
      <h2>Your Previous Results</h2>
      {profile.map(data => (
        <ListItem>
          <Avatar>{data.types == "in" ? <InIcon /> : <OutIcon />}</Avatar>
          {data.types == "out" ? (
            <ListItemText
              primary={new Date(data.timing).toString().substring(0, 24)}
              secondary="For Going Outside from Hostel"
            />
          ) : (
            <ListItemText
              primary={new Date(data.timing).toString().substring(0, 24)}
              secondary="For Going Inside to Hostel"
            />
          )}
        </ListItem>
      ))}
    </List>
  );
}

FolderList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FolderList);
