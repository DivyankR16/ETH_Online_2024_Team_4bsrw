import React from 'react'
import { Chart } from "react-google-charts";
const AreaChart = () => {
    const options = {
      title: "Company Performance",
      hAxis: { title: "Year", titleTextStyle: { color: "#FFFFFF" } },
      vAxis: { minValue: 0, titleTextStyle: { color: "#FFFFFF" } },
      chartArea: { width: "50%", height: "70%" },
      backgroundColor: {
        fill: "#111827", // Change the background color here
      },
      colors: ["#ffffff"],
      legend: { textStyle: { color: "#FFFFFF" } },
    };
   const data = [
  ["Year", "Sales"],
  ["2013", 1000],
  ["2014", 1170],
  ["2015", 660],
  ["2016", 1030],
];
  return (
    <>
      <Chart
        chartType="AreaChart"
        width="100%"
        height="380px"
        data={data}
        options={options}
      />
    </>
  );
}

export default AreaChart