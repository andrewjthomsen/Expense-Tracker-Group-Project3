// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";

// Takes in the info for the charts
import { chartInfo } from "../../variables/charts";

class BarChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        plotOptions: {
          bar: {
            barHeight: "100%",
            distributed: true,
            horizontal: true,
            dataLabels: {
              position: "bottom"
            }
          }
        },
        // Colors for the fill of the chart
        colors: [
          "#00A8FF",
          "#00E39A",
          "#A400E3",
          "#FF5653",
          "#F7E158",
          "#FF2EB2",
          "#8C7CFF",
          "#300074",
          "#5D0074",
          "#740030"
        ],
        dataLabels: {
          enabled: true,
          textAnchor: "start",
          style: {
            colors: ["#fff"]
          },
          formatter: function(val, opt) {
            return opt.w.globals.labels[opt.dataPointIndex] + ":  $" + val;
          },
          offsetX: 0,
          dropShadow: {
            enabled: true
          }
        },

        stroke: {
          width: 1,
          colors: ["#fff"]
        },
        xaxis: {
          categories: [
            "Grocery",
            "Internet",
            "Bills",
            "Travel",
            "Phone",
            "Car",
            "Rent"
          ]
        },
        yaxis: {
          labels: {
            show: false
          }
        },
        title: {
          text: "Expenses",
          align: "center",
          floating: true,
          style: {
            fontSize: "20px",
            color: "#263238"
          }
        },
        tooltip: {
          theme: "dark",
          x: {
            show: false
          },
          y: {
            title: {
              formatter: function() {
                return "$";
              }
            }
          }
        }
      }
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={chartInfo.series}
          type="bar"
          height="350"
        />
      </div>
    );
  }
}

export default BarChart;