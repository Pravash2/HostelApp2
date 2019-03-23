import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MoreIcon from "@material-ui/icons/MoreVert";

class FadeMenu extends React.Component {
  state = {
    anchorEl: null
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div>
        <IconButton
          style={{ padding: 0, margin: 0, color: "white" }}
          onClick={this.handleClick}>
          <MoreIcon />
        </IconButton>
        <Menu
          id="fade-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={this.handleClose}
          TransitionComponent={Fade}
          style={{ marginRight: "50px" }}>
          <MenuItem onClick={this.handleClose}>Fee Details</MenuItem>
          <MenuItem onClick={this.handleClose}>Report</MenuItem>
          <MenuItem onClick={this.handleClose}>Pass Status</MenuItem>
          <MenuItem onClick={this.handleClose}>Info</MenuItem>
        </Menu>
      </div>
    );
  }
}

export default FadeMenu;
