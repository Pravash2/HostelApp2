import React, { Component } from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";
import PieCharts from "react-minimal-pie-chart";
import Typography from "@material-ui/core/Typography";

class Summary extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          margin: "auto"
        }}>
        <Typography
          style={{ textAlign: "center" }}
          component="h2"
          variant="display1"
          gutterBottom>
          Today Totol Number Of Student For Food Pass
        </Typography>

        <PieCharts
          data={[
            {
              title: "One",
              value: 10,
              color: "#E38627"
            },
            {
              title: "Two",
              value: 15,
              color: "#C13C37"
            }
          ]}
          label
          labelStyle={{
            fontSize: "5px",
            fontFamily: "sans-serif",
            fill: "#121212"
          }}
        />
        <List>
          <ListItem>
            <div
              style={{
                width: "15px",
                padding: "15px",
                backgroundColor: "#C13C37"
              }}
            />
            <ListItemText>Student Generate Food Pass</ListItemText>
          </ListItem>
          <ListItem>
            <div
              style={{
                width: "15px",
                padding: "15px",
                backgroundColor: "#E38627"
              }}
            />
            <ListItemText>Student Not Generate Food Pass</ListItemText>
          </ListItem>
        </List>
      </div>
    );
  }
}
export default Summary;
