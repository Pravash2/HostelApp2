import React, { Component } from "react";
import PieChart from "react-simple-pie-chart";
import PieCharts from "react-minimal-pie-chart";

class Summary extends Component {
  render() {
    return (
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
          },
          {
            title: "Three",
            value: 20,
            color: "#6A2135"
          }
        ]}
        label
        labelStyle={{
          fontSize: "5px",
          fontFamily: "sans-serif",
          fill: "#121212"
        }}
      />
    );
  }
}
export default Summary;
