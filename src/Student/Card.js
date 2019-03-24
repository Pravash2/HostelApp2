import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

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
  componentDidMount() {
    axios
      .get(`http://localhost:3000/student/pass`)
      .then(res => this.setState({ pass: res.data }))
      .catch(err => console.log(err));
  }
  render() {
    const { classes } = this.props;
    const bull = <span className={classes.bullet}>•</span>;
    if (this.state.pass !== "") {
      console.log("helo", this.state.pass);
      return (
        <Card className={classes.card}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom>
              Word of the Day
            </Typography>
            <Typography variant="h5" component="h2">
              {this.state.pass.studentDetail.name}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              adjective
            </Typography>
            <Typography component="p">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      );
    }
    return <div>Hello</div>;
  }
}
SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleCard);
