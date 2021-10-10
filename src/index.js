import Chart from 'chart.js/auto'
import 'src/main.scss'

import 'src/components/dropdown/init'
import 'src/components/utils/expandable/init'
import 'src/components/checkbox/init'
import 'src/components/pagination/init'
import 'src/components/text-field/init'
import 'src/components/dropdown-date/init'
import 'src/plugins/rangeslider/init'

require('air-datepicker')
require('jquery-mask-plugin')
require('ion-rangeslider')



const el = document.getElementById('myChart')
const gradientOrange = el.getContext('2d').createLinearGradient(0, 0, 0, 100)
const gradientPurple = el.getContext('2d').createLinearGradient(0, 0, 0, 100)
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

window.onload = function () {
  const ctx = document.getElementById('myChart').getContext('2d')
  new Chart(ctx, chartConfig)
}
