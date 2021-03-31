/* JQuery plugins */
// global.datepicker = require('air-datepicker');
require('air-datepicker')
require('jquery-mask-plugin')

import '../scss/app.scss'

/* Components */
import './components/dropdown'
import './components/checkbox'

/* UI Kit */
$('.input-masked').mask('00.00.0000', { placeholder: 'ДД.ММ.ГГГГ' })
$('.date-dropdown').datepicker().mask('00.00.0000', { placeholder: 'ДД.ММ.ГГГГ' })
// $('.masked-input').datepicker()

