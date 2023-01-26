import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useState } from "react";
import "../App.css";

ChartJS.register(ArcElement, Tooltip, Legend);
export default function Graph({ nameOrigins, labelsState }) {
  //console.log("Graph", labelsState);
  const labels = [];
  //const [labelsState, setLabelState] = useState([])
  const datapoints = [];
  const [countryName, setCountryName] = useState("");
  //getCountry1({setCountryName});
  //console.log(countryName)
  const combinedArray = labelsState.reduce((acc, current, index) => {
    return [...acc, [current, nameOrigins[index]]];
  }, []);
  console.log(combinedArray);
  const dataCleanUp = (dataInput) => {
    dataInput.map((data, index) => {
      // getCountryName(data.country_id).then(data => {
      //   labels.push(data)
      // });
      labels.push(data[0][0].name.common);
      datapoints.push(data[1].probability * 100);
    });
    //console.log(labels.country_id);
  };
  dataCleanUp(combinedArray);
  //loadCountryNames(labels)
  const data = {
    labels: labels,
    datasets: [
      {
        label: "probability of name origin %",
        data: datapoints,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false, // Don't maintain w/h ratio
  };

  return (
    <div>
      <article className="canvas-container">
        <Pie data={data} options={options} />
      </article>
    </div>
  );
}
