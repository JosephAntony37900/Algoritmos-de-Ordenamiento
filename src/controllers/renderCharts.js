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
                backgroundColor: ['#4F5D75', '#ef8354'],
                borderColor: ['#4F5D75', '#ef8354'],
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
                    '#ef8354',
                    '#ef8354',
                    '#ef8354',
                    '#ef8354',
                    '#ef8354',
                    '#ef8354'
                ],
                borderColor: [
                    '#ef8354',
                    '#ef8354',
                    '#ef8354',
                    '#ef8354',
                    '#ef8354',
                    '#ef8354'
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
                backgroundColor: ['#ef8354', '#4F5D75'],
                borderColor: ['#ef8354)', '#4F5D75'],
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
