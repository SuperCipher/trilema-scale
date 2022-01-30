import "./styles.css";
import Chart from "chart.js/auto";

const ctx = document.getElementById("RadarChart").getContext("2d");

// Triscore
// Blockchain trilema in radar chart

const config = {
  type: "radar",
  data: {
    labels: ["Scalability", "Decentralization", "Security"],
    // NOTE All of this bias toward existing technology, the upperbound might not be future proof.
    // TODO we gonna need some kind of ratio or coefficiant here later
    // Score range from 1 to 5, anything less than 1 is not permit, to create a centerline at 3.

    // Scalability analysis using relative comparison with prior data.
    // Scalability is define as an ability to increasingly support more node, load, feature, Storage, bandwidth without exponential incuring cost, latency and no significant degredation in performance
    // Scalability score at 1 if number of node have a comparably scalability to Bitcoin in 2020
    // Scalability score at 3 if number of node in the chain scale linearly with cost
    // Scalability score at 5 if the chain scale like BFT permissioned node

    // QUESTION can we make this a percentage
    // Security interm of thing that get compromise for sake of scalability and/or decentralization
    // Security score at 5 if chain require more that 1/2 dishonest node to compromise both consistency and liveness of the network
    // Security score at 4 if chain require more that 1/2 dishonest node to compromise consistency or liveness of the network
    // Security score at 3 if chain require 1/3 dishonest node to compromise liveness of the network
    // Security score at 2 if chain require 1/3 dishonest node to compromise consistency of the network
    // Security score at 1 if chain require 1/3 dishonest node to compromise both consistency and liveness of the network

    // Network Concensus Provider (NCP) is a network participant that influence concensus of the network
    // Decentralize score at 1 if 100% NCP interest aligned
    // Decentralize score at 3 if 50% of NCP interest aligned
    // Decentralize score at 5 if 0% NCP interest aligned

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
        data: [1, 5, 3]
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
