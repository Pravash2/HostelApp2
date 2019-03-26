import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { Link } from "react-router-dom";

import axios from "axios";

const styles = {
  card: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
};

class SimpleCard extends React.Component {
  state = {
    pass: ""
  };
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    axios
      .get(`https://hostelapp2.herokuapp.com/securityguard/pass`)
      .then(res =>
        alert(`You ${res.wardenApproval ? "Approve" : "Not Approve"} It`)
      )
      .catch(err => console.log(err));
  }

  render() {
    const { classes } = this.props;
    const bull = <span className={classes.bullet}>•</span>;

    if (this.state.pass.length > 0) {
      console.log(this.state.pass);
      return (
        <div>
          {this.state.pass.map(pass => (
            <Card className={classes.card}>
              <CardContent>
                <Typography variant="h5" component="h2">
                  {pass.studentDetail.name}
                </Typography>

                <Typography className={classes.pos} color="textSecondary">
                  {`Roll Number : ${pass.studentDetail.rollNumber}`}
                  <Typography className={classes.pos} color="textSecondary">
                    {`${pass.studentDetail.branch} ${
                      pass.studentDetail.group
                    } ${pass.studentDetail.section} ${pass.studentDetail.year}`}
                  </Typography>
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  {`${pass.studentDetail.contactNumber}`}
                </Typography>
                <Typography component="p">{`PURPOSE : ${
                  pass.purpose
                }`}</Typography>
                <br />
                <Typography variant="h5" component="h4">{`${
                  pass.wardenApproval ? "Approved" : "Not Approved"
                }`}</Typography>
                <Typography variant="h6" component="h1">
                  Date{" "}
                  {`${pass.inDate.substring(0, 10)} / ${pass.outDate.substring(
                    0,
                    10
                  )}`}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      );
    }
    return <h1>Not Approaval Pass Found</h1>;
  }
}
SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleCard);
