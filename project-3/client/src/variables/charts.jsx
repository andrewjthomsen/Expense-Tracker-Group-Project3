// #############################
// // Chart info
// #############################
// Function to sort the Array in descending order
const sortSeries = arr => {
  return arr.sort((a, b) => b - a);
};
// This array will change BOTH charts
let pieArr = [12.34, 17.86, 7.01, 17.23, 23.67, 18.99, 38.77];
const chartInfo = {
  series: [
    {
      data: sortSeries(pieArr)
    }
  ]
};
module.exports = {
  chartInfo
};




