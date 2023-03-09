import {
  TechArchAttributes as RoleData,
  TechArchRoles as RoleLevels,
} from "./data/TechArchAttributes";

// Magic number: 3 = index in the dataset. Used elsewhere.
export const YOU = 3;

export const ChartData = {
  // Labels is used for the graph so generate it from the JSON
  labels: (() => Object.keys(RoleData))(),
  sliderDetails: RoleData,
  datasets: [
    {
      label: "Senior",
      data: RoleLevels.Senior,
      fill: true,
      hidden: true,
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgb(255, 99, 132)",
      borderWidth: 2,
      pointBackgroundColor: "rgb(255, 99, 132)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(255, 99, 132)",
    },
    {
      label: "Lead",
      data: RoleLevels.Lead,
      fill: true,
      hidden: true,
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      borderColor: "rgb(54, 162, 235)",
      borderWidth: 2,
      pointBackgroundColor: "rgb(54, 162, 235)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(54, 162, 235)",
    },
    {
      label: "Principal",
      data: RoleLevels.Principal,
      fill: true,
      hidden: true,
      backgroundColor: "rgba(241, 90, 34, 0.2)",
      borderColor: "rgb(241, 90, 34)",
      borderWidth: 2,
      pointBackgroundColor: "rgb(241, 90, 34)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(241, 90, 34)",
    },
    {
      label: "You",
      // These values change when you use the tool.
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      fill: true,
      backgroundColor: "rgba(0, 172, 50, 0.5)",
      borderColor: "rgb(0, 172, 50)",
      borderWidth: 3,
      pointBackgroundColor: "rgb(0, 172, 50)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(0, 172, 50)",
    },
  ],
};
