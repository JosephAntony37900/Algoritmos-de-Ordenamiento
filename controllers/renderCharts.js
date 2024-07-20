export function renderCharts({ insertionTimes, sortingTimes, searchTimes }) {
    const ctx1 = document.getElementById('insertionTimeChart').getContext('2d');
    const ctx2 = document.getElementById('sortingTimeChart').getContext('2d');
    const ctx3 = document.getElementById('searchTimeChart').getContext('2d');

    new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: ['Array', 'LinkedList'],
            datasets: [{
                label: 'Insertion Time (ms)',
                data: insertionTimes,
                backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
                borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return value + ' ms';
                        }
                    }
                }
            }
        }
    });

    new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: ['Bubble Sort Array', 'Merge Sort Array', 'Radix Sort Array', 'Bubble Sort LinkedList', 'Merge Sort LinkedList', 'Radix Sort LinkedList'],
            datasets: [{
                label: 'Sorting Time (ms)',
                data: sortingTimes,
                backgroundColor: [
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(104, 132, 245, 0.2)',
                    'rgba(198, 45, 205, 0.2)',
                    'rgba(243, 111, 11, 0.2)'
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(104, 132, 245, 1)',
                    'rgba(198, 45, 205, 1)',
                    'rgba(243, 111, 11, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return value + ' ms';
                        }
                    }
                }
            }
        }
    });

    new Chart(ctx3, {
        type: 'bar',
        data: {
            labels: ['Linear Search Array', 'Linear Search LinkedList'],
            datasets: [{
                label: 'Search Time (ms)',
                data: searchTimes,
                backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(104, 132, 245, 0.2)'],
                borderColor: ['rgba(255, 159, 64, 1)', 'rgba(104, 132, 245, 1)'],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return value + ' ms';
                        }
                    }
                }
            }
        }
    });
}
