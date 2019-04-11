import React, { Component } from "react";
import PieCharts from "react-minimal-pie-chart";
import List from "./List";

class Summary extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          flexDirection: "column"
        }}>
        <h1>Student In The Hostel</h1>
        <PieCharts
          data={[
            {
              value: 82,
              color: "#E38627"
            }
          ]}
          totalValue={100}
          lineWidth={30}
          label
          labelStyle={{
            fontSize: "25px",
            fontFamily: "sans-serif"
          }}
          labelPosition={0}
        />
   
          <List />

      </div>
    );
  }
}
export default Summary;
