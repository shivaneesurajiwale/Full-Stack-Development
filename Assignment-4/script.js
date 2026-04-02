// DATA
let alertData = [10, 5, 7, 3];

// PIE CHART
const pieChart = new Chart(document.getElementById("pieChart"), {
    type: 'pie',
    data: {
        labels: ["Harassment", "Theft", "Unsafe Area", "Emergency"],
        datasets: [{
            data: alertData,
            backgroundColor: ["#ff4d4d", "#ffa500", "#ffcc00", "#00bfff"]
        }]
    }
});

// LINE CHART
let lineData = [2, 4, 3, 6, 5];

const lineChart = new Chart(document.getElementById("lineChart"), {
    type: 'line',
    data: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
        datasets: [{
            label: "Alerts",
            data: lineData,
            borderColor: "#00bfff",
            fill: false
        }]
    }
});

// BAR CHART
const barChart = new Chart(document.getElementById("barChart"), {
    type: 'bar',
    data: {
        labels: ["Area A", "Area B", "Area C", "Area D"],
        datasets: [{
            label: "Safety Score",
            data: [80, 60, 40, 70],
        }]
    }
});

// ADD ALERT
function addAlert() {
    const type = document.getElementById("alertType").value;

    if(type === "Harassment") alertData[0]++;
    if(type === "Theft") alertData[1]++;
    if(type === "Unsafe Area") alertData[2]++;
    if(type === "Emergency") alertData[3]++;

    // update line chart also
    lineData.push(Math.floor(Math.random() * 10));
    lineChart.data.labels.push("New");
    lineChart.update();

    pieChart.update();
}

// SIMULATE ALERT
function simulateAlert() {
    const randomIndex = Math.floor(Math.random() * 4);
    alertData[randomIndex]++;

    lineData.push(Math.floor(Math.random() * 10));
    lineChart.data.labels.push("Sim");
    lineChart.update();

    pieChart.update();
}

// THEME TOGGLE
function toggleTheme() {
    document.body.classList.toggle("light-mode");
}