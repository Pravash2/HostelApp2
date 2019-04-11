import React, { Component } from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";
import PieCharts from "react-minimal-pie-chart";
import Typography from "@material-ui/core/Typography";

import {
  Sparklines,
  SparklinesBars,
  SparklinesReferenceLine,
  SparklinesLine
} from "react-sparklines";

const sampleData = [10, 20, 30, 58, 10, 5];

class Summary extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          marginTop: "10%"
        }}>
        <Typography
          style={{ textAlign: "center" }}
          component="h2"
          variant="display1"
          gutterBottom>
          Today No of Hours of Your Student
        </Typography>

        <Sparklines
          limit={5}
          width={100}
          height={40}
          margin={5}
          data={sampleData}>
          <SparklinesBars
            style={{ stroke: "white", fill: "#41c3f9", fillOpacity: ".25" }}
          />
          <SparklinesLine style={{ stroke: "#41c3f9", fill: "none" }} />
        </Sparklines>
      </div>
    );
  }
}
export default Summary;
