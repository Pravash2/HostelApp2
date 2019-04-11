import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

import { Link } from "react-router-dom";
import Loader from '../Loader'
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
    this.approve = this.approve.bind(this);
  }
  componentDidMount() {
    axios
      .get(`https://hostelapp2.herokuapp.com/securityguard/pass`)
      .then(res =>
        this.setState({ pass: res.data.filter(data => data.gateOut) })
      )
      .catch(err => console.log(err));
  }
  approve(event) {
    axios
      .get(
        `https://hostelapp2.herokuapp.com/securityguard/pass/in/${event._id}`
      )
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
    console.log(event);
  }

  render() {
    const { classes } = this.props;
    const bull = <span className={classes.bullet}>•</span>;

    if (this.state.pass) {
      console.log(this.state.pass);
      return (
        <div>
          {this.state.pass.map(passConst => (
            <div>
              <Card className={classes.card}>
                <CardContent>
                  <Typography className={classes.pos} color="textSecondary">
                    Date {""}
                    {`${passConst.inDate.substring(
                      0,
                      10
                    )} / ${passConst.outDate.substring(0, 10)}`}
                  </Typography>
                  <Typography variant="h5" component="h2">
                    {passConst.studentDetail.name}
                  </Typography>

                  <Typography className={classes.pos} color="textSecondary">
                    {`Rolls Number : ${passConst.studentDetail.rollNumber}`}
                    <Typography className={classes.pos} color="textSecondary">
                      {`${passConst.studentDetail.branch} ${
                        passConst.studentDetail.group
                      } ${passConst.studentDetail.section} ${
                        passConst.studentDetail.year
                      }`}
                    </Typography>
                  </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    {`${passConst.studentDetail.contactNumber}`}
                  </Typography>
                  <Typography component="p">{`PURPOSE : ${
                    passConst.purpose
                  }`}</Typography>
                  <br />
                  <Typography color="textSecondary" variant="h6" gutterBottom>
                    {passConst.gateOut ? "Gate Cheacked In" : "Not Approve"}
                  </Typography>
                  <Typography variant="h6" component="p">{`${Date(
                    passConst.gateOutTime
                  ).substring(0, 24)}`}</Typography>
                </CardContent>
                <CardActions>
                  <Link to="/securityguard" style={{ textDecoration: "none" }}>
                    <Button
                      onClick={() => this.approve(passConst)}
                      size="small">
                      Gate Entry
                    </Button>
                  </Link>
                </CardActions>
              </Card>
              <br />
            </div>
          ))}
        </div>
      );
    }
    return <div><Loader /></div>;
  }
}
SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleCard);
