import Chart from 'chart.js/auto'

const el = document.getElementById('myChart') || false

function handleChart() {
  if (el) {
    const gradientOrange = el
      .getContext('2d')
      .createLinearGradient(0, 0, 0, 100)
    const gradientPurple = el
      .getContext('2d')
      .createLinearGradient(0, 0, 0, 100)
    const gradientGreen = el.getContext('2d').createLinearGradient(0, 0, 0, 100)

    gradientOrange.addColorStop(0, '#FFE39C')
    gradientOrange.addColorStop(1, '#FFBA9C ')

    gradientPurple.addColorStop(0, '#BC9CFF')
    gradientPurple.addColorStop(1, '#8BA4F9')

    gradientGreen.addColorStop(0, ' #6FCF99')
    gradientGreen.addColorStop(1, '#6BD0BE')

    const chartConfig = {
      type: 'doughnut',
      data: {
        datasets: [
          {
            data: [5, 5, 10, 0],
            backgroundColor: [gradientPurple, gradientGreen, gradientOrange],
            borderWidth: 2,
          },
        ],
        labels: ['Удовлетворительно', 'Хорошо', 'Великолепно'],
      },
      options: {
        legend: {
          display: false,
        },
        maintainAspectRatio: false,
        cutoutPercentage: 10,
      },
    }

    const ctx = document.getElementById('myChart').getContext('2d')
    const chart = new Chart(ctx, chartConfig)
  }
}

$(window).on('load', handleChart)
