"use strict"

// DOM selection

const bellIcon = document.getElementById("container-bell")
const notifcationsContainer = document.querySelector(".main-container")
const notifications = document.querySelector(".notifications")
const overlay = document.getElementById("overlay")
const alertBanner = document.getElementById("alert")

const trafficCanvas = document.getElementById("traffic-chart")
const dailyCanvas = document.getElementById("daily-chart")
const mobileCanvas = document.getElementById("mobile-chart")

const user = document.getElementById("userField")
const membersCollection = document.querySelectorAll(".member-name")
const message = document.getElementById("messageField")
const send = document.getElementById("sendBtn")

const settings = document.getElementById("settings-login")
const profile = document.getElementById("profile-visibility")
const email = document.getElementById("email-notification")
const timezones = document.getElementById("timezone")
const save = document.getElementById("save")
const cancel = document.getElementById("cancel")

// notifcations (using closable list items)
bellIcon.addEventListener("click", (e) => {
  notifications.style.display = "block"
  overlay.style.display = "flex"
})
/*
 * How To - Closable List Items
 * This was removed from an example from W3Schools
 * Found here: https://www.w3schools.com/howto/howto_js_close_list_items.asp
 */
/* Get all elements with class="close" */
let closebtns = document.getElementsByClassName("close")
/* Loop through the elements, and hide the parent, when clicked on */

for (let i = 0; i < closebtns.length; i++) {
  closebtns[i].addEventListener("click", function () {
    this.parentElement.remove()
    if (!notifications.firstElementChild) {
      notifications.style.display = "none"
      overlay.style.display = "none"
    }
  })
}

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

// Auto-complete for user search field
let names = []
// create array of members names
for (let i = 0; i < membersCollection.length; i++) {
  names.push(membersCollection[i].textContent)
}

/*
 * Autocomplete input field functionality with JS.
 * This was removed from an example from W3Schools
 * Found here: https://www.w3schools.com/howto/howto_js_autocomplete.asp
 
*/

function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function (e) {
    var a,
      b,
      i,
      val = this.value
    /*close any already open lists of autocompleted values*/
    closeAllLists()
    if (!val) {
      return false
    }
    currentFocus = -1
    /*create a DIV element that will contain the items (values):*/
    a = document.createElement("DIV")
    a.setAttribute("id", this.id + "autocomplete-list")
    a.setAttribute("class", "autocomplete-items")
    /*append the DIV element as a child of the autocomplete container:*/
    this.parentNode.appendChild(a)
    /*for each item in the array...*/
    for (i = 0; i < arr.length; i++) {
      /*check if the item starts with the same letters as the text field value:*/
      if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
        /*create a DIV element for each matching element:*/
        b = document.createElement("DIV")
        /*make the matching letters bold:*/
        b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>"
        b.innerHTML += arr[i].substr(val.length)
        /*insert a input field that will hold the current array item's value:*/
        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>"
        /*execute a function when someone clicks on the item value (DIV element):*/
        b.addEventListener("click", function (e) {
          /*insert the value for the autocomplete text field:*/
          inp.value = this.getElementsByTagName("input")[0].value
          /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
          closeAllLists()
        })
        a.appendChild(b)
      }
    }
  })
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function (e) {
    var x = document.getElementById(this.id + "autocomplete-list")
    if (x) x = x.getElementsByTagName("div")
    if (e.keyCode == 40) {
      /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
      currentFocus++
      /*and and make the current item more visible:*/
      addActive(x)
    } else if (e.keyCode == 38) {
      //up
      /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
      currentFocus--
      /*and and make the current item more visible:*/
      addActive(x)
    } else if (e.keyCode == 13) {
      /*If the ENTER key is pressed, prevent the form from being submitted,*/
      e.preventDefault()
      if (currentFocus > -1) {
        /*and simulate a click on the "active" item:*/
        if (x) x[currentFocus].click()
      }
    }
  })
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false
    /*start by removing the "active" class on all items:*/
    removeActive(x)
    if (currentFocus >= x.length) currentFocus = 0
    if (currentFocus < 0) currentFocus = x.length - 1
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active")
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active")
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items")
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i])
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
    closeAllLists(e.target)
  })
}
autocomplete(document.getElementById("userField"), names)

// Validation on user inputs
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

// Add event listener to your Save button
save.addEventListener("click", (e) => {
  const currentTimeZone = document.getElementById("timezone")
  // Inside that event listener, store all of the current values to local storage
  if (email.checked) {
    localStorage.setItem("email", "true")
  } else {
    localStorage.setItem("email", "false")
  }
  if (profile.checked) {
    localStorage.setItem("profile", "true")
  } else {
    localStorage.setItem("profile", "false")
  }
  if (currentTimeZone.value) {
    localStorage.setItem("selectedTimezone", currentTimeZone.value)
  }
})

// Load the stored values
function loadSettings() {
  if (localStorage.getItem("email") === "true") {
    email.checked = true
  } else {
    email.checked = false
  }
  if (localStorage.getItem("profile") === "true") {
    profile.checked = true
  } else {
    profile.checked = false
  }
  if (localStorage.getItem("selectedTimezone")) {
    timezone.value = localStorage.getItem("selectedTimezone")
  }
}
// Call load function on every page load

window.onload = function () {
  loadSettings()
}

// Add event listener to Cancel button
cancel.addEventListener("click", (e) => {
  localStorage.clear()
  email.checked = false
  profile.checked = false
  timezone.value = ""
})
