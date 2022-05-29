import "./styles.css";
import Chart from "chart.js/auto";
import {blockchainDataset} from "./datasets.js"

const ctx = document.getElementById("RadarChart").getContext("2d");
// Triscore
// Blockchain trilemma in radar chart

const config = {
  type: "radar",
  data: {
    labels: ["Scalability", "Decentralization", "Security"],

    // This is an initial data set subject to debate and change
    datasets: blockchainDataset
  },
  options: {
    legend: {
      position: "top"
    },
    title: {
      display: true,
      text: "Blockchain trilemma in radar chart"
    },
    scale: {
      angleLines: {
        color: "black" // Change Axis colors
      },
      ticks: {
        beginAtZero: false
      }
    }
  }
};

new Chart(ctx, config);
