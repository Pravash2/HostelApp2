import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";

import Avatar from "@material-ui/core/Avatar";
import axios from "axios";
import Loader from "../../Loader";

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
  render() {
    const profile = this.props.data;
    const { classes } = this.props;
    console.log(this.props.type);
    const bull = <span className={classes.bullet}>•</span>;
    if (this.props.data) {
      return (
        <Card
          style={{
            textAlign: "center",
            height: `${window.innerHeight / 1.47}px`
          }}
          className={classes.card}>
          <CardActions>
            <div>
              {" "}
              <Typography className={classes.pos} color="textSecondary">
                <strong>{Date().substring(0, 10)}</strong>
              </Typography>
              <Button
                style={{ marginRight: "auto", width: "100px" }}
                size="small">
                Token{" "}
                <strong style={{ fontSize: "18px", marginLeft: "5px" }}>
                  {" "}
                  321
                </strong>
              </Button>
            </div>
            <div
              style={{
                padding: "5px 20px",
                width: "100px",
                marginLeft: "auto"
              }}>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                width="20%"
                image="https://www.cognex.com/BarcodeGenerator/Content/images/isbn.png"
                title="Contemplative Reptile"
              />
            </div>
          </CardActions>
          <div style={{ padding: "5px 20px 0px 20px", marginBottom: "0" }}>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              width="20%"
              image="http://it.cvrce.edu.in/images/cvrce_logo.png"
              title="Contemplative Reptile"
            />
          </div>
          <CardContent>
            <Avatar
              style={{ margin: "0 auto", marginBottom: "5%" }}
              alt="Remy Sharp"
              src="https://upload.wikimedia.org/wikipedia/en/e/ee/Unknown-person.gif"
            />

            <Typography variant="h5" component="h2">
              {profile.name}
            </Typography>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom>
              {`${profile.branch} ${profile.group} ${profile.section}`}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              Room No <strong>300</strong>
            </Typography>
            <Typography
              variant="h4"
              style={{ marginBottom: "0" }}
              component="h2">
              {this.props.type == 1
                ? "BREAKFAST"
                : this.props.type == 2
                ? "LUNCH"
                : "DINNER"}
            </Typography>
          </CardContent>

          <div
            style={{
              margin: "0",
              padding: "0px 10px 20px 5px",
              width: "100px",
              marginLeft: "auto"
            }}>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              width="20%"
              image="data:image/jpeg;base64,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"
              title="Contemplative Reptile"
            />
            <Typography variant="caption" gutterBottom>
              Chief Warden
            </Typography>
          </div>
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
