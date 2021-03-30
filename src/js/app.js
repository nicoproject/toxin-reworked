/* JQuery plugins */
// global.datepicker = require('air-datepicker');
require('air-datepicker')
require('jquery-mask-plugin')

import '../scss/app.scss'

/* Components */
import './components/dropdown'

/* UI Kit */
$('.masked-input').mask('00.00.0000', { placeholder: 'ДД.ММ.ГГГГ' })
$('.date-dropdown').datepicker()
// $('.masked-input').datepicker()

