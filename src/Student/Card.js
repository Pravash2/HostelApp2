import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import axios from "axios";
import Loader from "../Loader";

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
  componentDidMount() {
    axios
      .get(`https://hostelapp2.herokuapp.com/student/pass`)
      .then(res => this.setState({ pass: res.data }))
      .catch(err => console.log(err));
  }
  DeletePass(id) {
    axios
      .delete(`https://hostelapp2.herokuapp.com/student/pass/${id}`)
      .then(res => alert(`Your Pass is Deleted`))
      .then(() => {
        window.location.reload();
      })
      .catch(err => alert(err));
  }
  render() {
    const { classes } = this.props;
    const bull = <span className={classes.bullet}>•</span>;
    if (this.state.pass !== "") {
      if (this.state.pass)
        return (
          <Card className={classes.card}>
            <CardContent>
              <Typography variant="h5" component="h2">
                {this.state.pass.studentDetail.name}
              </Typography>

              <Typography className={classes.pos} color="textSecondary">
                {`Roll Number : ${this.state.pass.studentDetail.rollNumber}`}
                <Typography className={classes.pos} color="textSecondary">
                  {`${this.state.pass.studentDetail.branch} ${
                    this.state.pass.studentDetail.group
                  } ${this.state.pass.studentDetail.section} ${
                    this.state.pass.studentDetail.year
                  }`}
                </Typography>
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                {`${this.state.pass.studentDetail.contactNumber}`}
              </Typography>
              <Typography component="p">{`PURPOSE : ${
                this.state.pass.purpose
              }`}</Typography>
              <br />
              <Typography className={classes.pos} color="textSecondary">
                {`Parent ${
                  this.state.pass.parentApproval ? "Approve" : "Not Approve"
                } It`}
                <Typography className={classes.pos} color="textSecondary">
                  {`Mentor ${
                    this.state.pass.mentorApporval ? "Approve" : "Not Approve"
                  } It`}
                  <Typography
                    className={classes.pos}
                    color="textSecondary">{`Warden ${
                    this.state.pass.wardenApproval ? "Approve" : "Not Approve"
                  } It`}</Typography>
                </Typography>
              </Typography>
              <Typography color="textSecondary" variant="h6" gutterBottom>
                Your Pass Has been{" "}
                {this.state.pass.wardenApproval ? "Approved" : "Not Approved"}
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                Date{" "}
                {`${this.state.pass.inDate.substring(
                  0,
                  10
                )} / ${this.state.pass.outDate.substring(0, 10)}`}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                onClick={() => this.DeletePass(this.state.pass._id)}
                size="small">
                Delete
              </Button>
            </CardActions>
          </Card>
        );
    }
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Your Card is Loading</h1>
      </div>
    );
  }
}
SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleCard);
