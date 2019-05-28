// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
import Chart from "react-apexcharts";

// Takes in the info for the charts
import { chartInfo } from "../../variables/charts";

class DonutChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        plotOptions: {
          pie: {
            donut: {
              labels: {
                show: true,
                name: {
                  show: true
                },
                value: {
                  formatter: function(val) {
                    return "$" + val;
                  }
                },
                total: {
                  show: true
                }
              }
            }
          }
        },
        chart: {
          dropShadow: {
            enabled: true,
            color: "#111",
            top: -1,
            left: 3,
            blur: 3,
            opacity: 0.2
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
        stroke: {
          width: 0
        },
        labels: [
          "Grocery",
          "Internet",
          "Bills",
          "Travel",
          "Phone",
          "Car",
          "Rent"
        ],
        dataLabels: {
          dropShadow: {
            blur: 3,
            opacity: 0.8
          }
        },
        states: {
          hover: {
            enabled: false
          }
        },
        theme: {
          palette: "palette2"
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: "bottom",
                labels: {
                  colors: [
                    "#33b2df",
                    "#546E7A",
                    "#d4526e",
                    "#13d8aa",
                    "#A5978B",
                    "#2b908f",
                    "#f9a3a4",
                    "#90ee7e",
                    "#f48024",
                    "#69d2e7"
                  ],
                  useSeriesColors: false
                }
              }
            }
          }
        ]
      }
    };
  }

  render() {
    return (
      <div className="donut">
        <Chart
          options={this.state.options}
          series={chartInfo.series[0].data}
          type="donut"
          width="400"
          height="400"
        />
      </div>
    );
  }
}

export default DonutChart;