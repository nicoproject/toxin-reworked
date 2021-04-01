/* JQuery plugins */
require('air-datepicker')
require('jquery-mask-plugin')
require('ion-rangeslider')

import '../scss/app.scss'

/* Components */
import './components/dropdown'
import './components/checkbox'
import './components/checkbox-expandable'

/* UI Kit */
$('.input-masked').mask('00.00.0000', { placeholder: 'ДД.ММ.ГГГГ' })

$('.date-dropdown')
  .datepicker()
  .mask('00.00.0000', { placeholder: 'ДД.ММ.ГГГГ' })

$('.js-range-slider').ionRangeSlider({
  type: 'double',
  min: 0,
  max: 10000,
  from: 5000,
  to: 10000,
  grid: false,
  skin: 'round',
  postfix: "<span class='rub'>Р</span>",
})
