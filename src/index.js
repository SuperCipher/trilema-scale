import "./styles.css";
import Chart from "chart.js/auto";

const ctx = document.getElementById("RadarChart").getContext("2d");

// Triscore
// Blockchain trilema in radar chart

const config = {
  type: "radar",
  data: {
    labels: ["Scalability", "Decentralization", "Security"],

    // This is an initial data set subject to debate and change
    datasets: [
      {
        label: "BSC",
        hoverBackgroundColor: "rgb(248, 209, 47, 1.0)",
        backgroundColor: "rgb(248, 209, 47, 0.2)",
        // Binance logo color
        borderColor: "rgb(248, 209, 47, 1.0)",
        pointBackgroundColor: "rgb(248, 209, 47, 1.0)",
        // Scalability at 1 since almost all validator associate with Binance
        data: [4, 1, 3]
      },
      {
        label: "Solana",
        backgroundColor: "rgb(20, 241, 149, 0.2)",
        // Solana main theme color
        borderColor: "rgb(20, 241, 149, 1.0)",
        pointBackgroundColor: "rgb(20, 241, 149, 1.0)",
        data: [4.5, 2.9, 3]
      },

      // {
      //   label: "nucypher",
      //   backgroundColor: "blue").alpha(0.2,
      //   borderColor: "blue",
      //   pointBackgroundColor: "blue",
      //   data: [1, 2, 3]
      // },
      // {
      //   label: "filecoin",
      //   backgroundColor: "blue").alpha(0.2,
      //   borderColor: "blue",
      //   pointBackgroundColor: "blue",
      //   data: [1, 2, 3]
      // },
      // {
      //   label: "Polkadot",
      //   backgroundColor: "rgb(130, 72, 229, 0.2)",
      //   // Polygon logo color
      //   borderColor: "rgb(130, 72, 229, 1.0)",
      //   pointBackgroundColor: "rgb(130, 72, 229, 1.0)",
      //   data: [4.5, 4.5, 4.5]
      // },

      {
        label: "polygon",
        backgroundColor: "rgb(130, 72, 229, 0.2)",
        // Polygon logo color
        borderColor: "rgb(130, 72, 229, 1.0)",
        pointBackgroundColor: "rgb(130, 72, 229, 1.0)",
        data: [4.2, 4.5, 3]
      },
      {
        label: "bitcoin",
        backgroundColor: "rgb(247, 147, 26, 0.2)",
        // Bitcoin logo color
        borderColor: "rgb(247, 147, 26, 1.0)",
        pointBackgroundColor: "rgb(247, 147, 26, 1.0)",
        data: [1, 5, 5]
      },
      {
        label: "Ethereum",
        backgroundColor: "rgb(141, 141, 141, 0.2)",
        // Ethereum upperleft logo color
        borderColor: "rgb(141, 141, 141, 1.0)",
        pointBackgroundColor: "rgb(141, 141, 141, 1.0)",
        data: [1, 5, 5]
      },
      {
        label: "Stella",
        backgroundColor: "rgb(62, 27, 219, 0.2)",
        // Stella main theme color
        borderColor: "rgb(62, 27, 219, 1.0)",
        pointBackgroundColor: "rgb(62, 27, 219, 1.0)",
        data: [4.5, 2, 3]
      },
      {
        label: "Qourum",
        backgroundColor: "rgb(44, 86, 221, 0.2)",
        // Qourum logo color
        borderColor: "rgb(44, 86, 221, 1.0)",
        pointBackgroundColor: "rgb(44, 86, 221, 1.0)",
        data: [5, 1, 2.5]
      },
      {
        label: "Libra",
        backgroundColor: "rgb(44, 86, 221, 0.2)",
        // Qourum logo color
        borderColor: "rgb(44, 86, 221, 1.0)",
        pointBackgroundColor: "rgb(44, 86, 221, 1.0)",
        data: [4.9, 1, 2.5]
      }
    ]
  },
  options: {
    legend: {
      position: "top"
    },
    title: {
      display: true,
      text: "Blockchain trilema in radar chart"
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
