"use strict"
// DOM selection
const alertBanner = document.getElementById("alert")

const trafficCanvas = document.getElementById("traffic-chart")
const dailyCanvas = document.getElementById("daily-chart")
const mobileCanvas = document.getElementById("mobile-chart")

const user = document.getElementById("userField")
const message = document.getElementById("messageField")
const send = document.getElementById("sendBtn")

// alert banner
alertBanner.innerHTML = `
<div class="alert-banner">
  <p><strong>Alert: </strong>You have unread messages</p>
  <p class="alert-banner-close">x</p>
</div>
`
alertBanner.addEventListener("click", (e) => {
  const element = e.target
  if (element.classList.contains("alert-banner-close")) {
    alertBanner.style.display = "none"
  }
})

// line graph widget
let trafficData = {
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
  data: trafficData,
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

// message user

send.addEventListener("click", (e) => {
  // ensure user and message fields are filled out
  if (user.value === "" && message.value === "") {
    alert("Please fill out user and message fields before sending")
  } else if (user.value === "") {
    alert("Please fill out user field before sending")
  } else if (message.value === "") {
    alert("Please fill out message field before sending")
  } else {
    alert(`Message successfully sent to: ${user.value}`)
  }
  e.preventDefault()
})
