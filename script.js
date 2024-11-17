// Sample data for different charts
let salesData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
        label: 'Sales ($)',
        data: [1000, 1200, 1300, 800, 1500, 1700],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
    }]
};

let temperatureData = {
    labels: ['10 AM', '12 PM', '2 PM', '4 PM', '6 PM', '8 PM'],
    datasets: [{
        label: 'Temperature (°C)',
        data: [12, 14, 16, 18, 17, 15],
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.1
    }]
};

let marketShareData = {
    labels: ['Company A', 'Company B', 'Company C'],
    datasets: [{
        data: [45, 35, 20],
        backgroundColor: ['#FF5733', '#33FF57', '#3357FF'],
        borderColor: ['#FF5733', '#33FF57', '#3357FF'],
        borderWidth: 1
    }]
};

// Sales Bar Chart
const salesCtx = document.getElementById('salesChart').getContext('2d');
const salesChart = new Chart(salesCtx, {
    type: 'bar',
    data: salesData,
    options: {
        responsive: true,
        plugins: {
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return '$' + tooltipItem.raw.toFixed(2);
                    }
                }
            }
        },
        animation: {
            onComplete: function () {
                anime({
                    targets: '#salesChart canvas',
                    opacity: [0, 1],
                    easing: 'easeInOutQuad',
                    duration: 1000
                });
            }
        }
    }
});

// Temperature Line Chart
const tempCtx = document.getElementById('temperatureChart').getContext('2d');
const temperatureChart = new Chart(tempCtx, {
    type: 'line',
    data: temperatureData,
    options: {
        responsive: true,
        plugins: {
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return tooltipItem.raw + '°C';
                    }
                }
            }
        },
        animation: {
            onComplete: function () {
                anime({
                    targets: '#temperatureChart canvas',
                    opacity: [0, 1],
                    easing: 'easeInOutQuad',
                    duration: 1000
                });
            }
        }
    }
});

// Market Share Pie Chart
const marketCtx = document.getElementById('marketShareChart').getContext('2d');
const marketShareChart = new Chart(marketCtx, {
    type: 'pie',
    data: marketShareData,
    options: {
        responsive: true,
        plugins: {
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return tooltipItem.raw + '%';
                    }
                }
            }
        },
        animation: {
            onComplete: function () {
                anime({
                    targets: '#marketShareChart canvas',
                    opacity: [0, 1],
                    easing: 'easeInOutQuad',
                    duration: 1000
                });
            }
        }
    }
});

// Function to update charts with random data every second
function updateCharts() {
    // Update Sales Data with random values
    salesData.datasets[0].data = salesData.datasets[0].data.map(() => Math.floor(Math.random() * 2000) + 500);

    // Update Temperature Data with random values
    temperatureData.datasets[0].data = temperatureData.datasets[0].data.map(() => Math.floor(Math.random() * 10) + 10);

    // Update Market Share Data with random values
    let total = Math.floor(Math.random() * 100) + 60;  // Total should be around 100%
    marketShareData.datasets[0].data = [
        Math.floor(Math.random() * total), 
        Math.floor(Math.random() * total), 
        total - Math.floor(Math.random() * total)
    ];

    // Update the charts
    salesChart.update();
    temperatureChart.update();
    marketShareChart.update();
}

// Call the updateCharts function every second (1000 milliseconds)
setInterval(updateCharts, 1000);
