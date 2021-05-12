// DOM selection
const trafficNav = document.querySelector(".traffic-nav")
const trafficNavLinks = document.querySelectorAll(".traffic-nav-link")
const trafficCanvas = document.getElementById("traffic-chart")
const dailyCanvas = document.getElementById("daily-chart")
const mobileCanvas = document.getElementById("mobile-chart")

// nav link selection and highlight
trafficNav.addEventListener("click", (e) => {
  let button = e.target
  if (button.nodeName === "LI") {
    trafficNavLinks.forEach((btn) => {
      btn.classList.remove("active")
    })
    e.target.classList.add("active")
  }
})
// traffic chart updated with hourly data
document.getElementById("hourly").addEventListener("click", () => {
  trafficChart.config.data = trafficHourlyData
  trafficChart.config.options.scales.y.ticks.stepSize = 45
  trafficChart.update()
})
// traffic chart updated with daily data
document.getElementById("daily").addEventListener("click", () => {
  trafficChart.config.data = trafficDailyData
  trafficChart.config.options.scales.y.ticks.stepSize = 55
  trafficChart.update()
})
// traffuc chart updated with weekly data
document.getElementById("weekly").addEventListener("click", () => {
  trafficChart.config.data = trafficWeeklyData
  trafficChart.config.options.scales.y.ticks.stepSize = 500
  trafficChart.update()
})
document.getElementById("montly").addEventListener("click", () => {
  trafficChart.config.data = trafficMontlyData
  trafficChart.config.options.scales.y.ticks.stepSize = 5000
  trafficChart.update()
})

// line graph data

let trafficHourlyData = {
  labels: [
    "8:00 am",
    "9:00 am",
    "10:00 am",
    "11:00 am",
    "12:00 pm",
    "1:00 pm",
    "2:00 pm",
    "2:00 pm",
    "4:00 pm",
    "5:00 pm",
    "6:00 pm",
  ],
  datasets: [
    {
      data: [55, 88, 150, 250, 500, 76, 78, 98, 45, 35, 87, 55],
      fill: true,
      tension: 0.4,
      backgroundColor: "rgba(116, 119, 191, 0.3)",
      borderWidth: 1,
    },
  ],
}

let trafficWeeklyData = {
  labels: [
    "16-22",
    "23-29",
    "30-5",
    "6-12",
    "13-19",
    "20-26",
    "27-3",
    "4-10",
    "11-17",
    "18-24",
    "25-31",
  ],
  datasets: [
    {
      data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
      fill: true,
      tension: 0.4,
      backgroundColor: "rgba(116, 119, 191, 0.3)",
      borderWidth: 1,
    },
  ],
}

let trafficDailyData = {
  labels: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
  datasets: [
    {
      data: [200, 86, 49, 68, 87, 245, 333],
      fill: true,
      tension: 0.4,
      backgroundColor: "rgba(116, 119, 191, 0.3)",
      borderWidth: 1,
    },
  ],
}

let trafficMontlyData = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  datasets: [
    {
      data: [
        10000, 22000, 49000, 68000, 87000, 77000, 15000, 56000, 39000, 54000,
        28000, 64000,
      ],
      fill: true,
      tension: 0.4,
      backgroundColor: "rgba(116, 119, 191, 0.3)",
      borderWidth: 1,
    },
  ],
}

let trafficOptions = {
  responsive: true,
  aspectRatio: 2.1,
  animation: {
    duration: 0,
  },
  scales: {
    y: {
      min: 0,
      beginAtZero: true,
      ticks: {
        stepSize: 500,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
}

let trafficChart = new Chart(trafficCanvas, {
  type: "line",
  data: trafficWeeklyData,
  options: trafficOptions,
})

// line bar graph widget
const dailyData = {
  labels: ["S", "M", "T", "W", "T", "F", "S"],
  datasets: [
    {
      label: "# of Hits",
      data: [75, 115, 175, 125, 225, 200, 100],
      backgroundColor: "rgba(116, 119, 191)",
      borderWidth: 1,
    },
  ],
}

const dailyOptions = {
  responsive: true,
  animation: {
    duration: 0,
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
}

let dailyChart = new Chart(dailyCanvas, {
  type: "bar",
  data: dailyData,
  options: dailyOptions,
})

// line doughnut graph widget
const mobileData = {
  labels: ["Desktop", "Tablet", "Phones"],
  datasets: [
    {
      label: "# of Users",
      data: [2000, 550, 500],
      borderWidth: 0,
      backgroundColor: ["#7477BF", "#78CF82", "#51B6C8"],
    },
  ],
}

const mobileOptions = {
  aspectRatio: 1.7,
  plugins: {
    legend: {
      position: "right",
      labels: {
        boxWidth: 20,
        fontStyle: "bold",
      },
    },
  },
}

let mobileChart = new Chart(mobileCanvas, {
  type: "doughnut",
  data: mobileData,
  options: mobileOptions,
})
