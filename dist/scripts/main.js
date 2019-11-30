window.onload = () => {
    'use strict';

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./sw.js');
    }
}

const toggles = document.querySelectorAll('.t-location_toggle');

toggles.forEach((toggle) => {
    toggle.addEventListener('click', () => {
        const location = toggle.closest('.t-location');

        if (location.classList.contains('is-collapsed')) {
            toggle.closest('.t-location').classList.remove('is-collapsed');
            toggle.innerHTML = '&mdash;';
        } else {
            toggle.closest('.t-location').classList.add('is-collapsed');
            toggle.innerHTML = '+';
        }

    });
});

fetchTemps();
setInterval(fetchTemps, 5000);

async function fetchTemps() {
    const response = await fetch('/.netlify/functions/lobster');
    const json = await response.json();

    renderCharts(parseData(json));
};

// outside : {
//     temperatures : [],
//     humidities: []
// }

function parseData(data) {
    const datasets = {};

    data.forEach((datum) => {
        const location = datum.location.toLowerCase().replace(/\W/g, '');

        if (location in datasets) {
            datasets[location].temperatures.push(datum.temperature);
            datasets[location].humidities.push(datum.humidity);
        } else {
            datasets[location] = {
                temperatures: [datum.temperature],
                humidities: [datum.humidity]
            };
        }
    })

    return datasets;
}

function renderCharts(datasets) {
    const charts = document.querySelectorAll('.t-status_graph canvas');

    charts.forEach((chart) => {
        const location = chart.getAttribute('data-location');
        var config = {
            type: 'line',
            data: {
                labels: new Array(datasets[location].temperatures.length),
                datasets: [
                    {
                        label: '',
                        fill: false,
                        backgroundColor: 'rgba(51, 51, 255, 1)',
                        borderColor: 'rgba(51, 51, 255, 1)',
                        pointRadius: 1,
                        pointHoverRadius: 1,
                        data: datasets[location].temperatures,
                    },
                    {
                        label: '',
                        fill: false,
                        backgroundColor: 'rgba(51, 255, 51, 1)',
                        borderColor: 'rgba(51, 255, 51, 1)',
                        pointRadius: 1,
                        pointHoverRadius: 1,
                        data: datasets[location].humidities,
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                animation: false,
                layout: {
                    padding: 10
                },
                title: {
                    display: false,
                },
                legend: {
                    display: false
                },
                tooltips: {
                    mode: 'index',
                    intersect: false,
                },
                hover: {
                    mode: 'nearest',
                    intersect: true
                },
                scales: {
                    xAxes: [{
                        display: false,
                        gridlines: false
                    }],
                    yAxes: [{
                        display: false,
                        gridlines: false,
                        ticks: {
                            suggestedMin: 20,
                            suggestedMax: 80
                        }
                    }]
                }
            }
        };

        var myLineChart = new Chart(chart, config);
    });
}