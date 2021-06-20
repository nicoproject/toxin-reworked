import Chart from 'chart.js/auto'
import 'src/main.scss'

import 'src/components/dropdown/dropdown'
import 'src/components/checkbox/checkbox'
import 'src/components/checkbox-expandable/checkbox-expandable'

require('air-datepicker')
require('jquery-mask-plugin')
require('ion-rangeslider')
require('bxslider/src/js/jquery.bxslider')

$('.input-masked').mask('00.00.0000', { placeholder: 'ДД.ММ.ГГГГ' })

$('.date-dropdown')
	.datepicker({
		inline: false,
		multipleDatesSeparator: ' — ',
		range: true,
		clearButton: true,
		nextHtml:
			"<svg width='17' height='18' viewBox='0 0 17 18' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M8.36301 0.984375L16.3786 9L8.36301 17.0156L6.95676 15.6094L12.5349 9.98438H0.347383V8.01562H12.5349L6.95676 2.39062L8.36301 0.984375Z' fill='#BC9CFF'/></svg>",
		prevHtml:
			"<svg width='17' height='18' viewBox='0 0 17 18' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M16.1755 8.01562V9.98438H3.98801L9.56613 15.6094L8.15988 17.0156L0.144258 9L8.15988 0.984375L9.56613 2.39062L3.98801 8.01562H16.1755Z' fill='#BC9CFF'/></svg>",
	})
	.mask('00.00.0000', { placeholder: 'ДД.ММ.ГГГГ' })

$('.datepicker--buttons').append(
	'<span class="datepicker--button datepicker-close" data-action="hide">Применить</span>',
)

$('.datepicker-close').on('click', function () {
	$('.datepicker').css('left', '-10000px', 'opacity', '0')
})

$('.js-range-slider').ionRangeSlider({
	type: 'double',
	min: 0,
	max: 10000,
	from: 5000,
	to: 10000,
	grid: false,
	skin: 'round',
	postfix: "<span class='rub'>Р</span>",
	hide_min_max: true,
})

$('.bxslider').bxSlider({
	nextText: '<i class="material-icons">keyboard_arrow_right</i>',
	prevText: '<i class="material-icons">keyboard_arrow_left</i>',
})

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
