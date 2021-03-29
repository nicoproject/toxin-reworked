/* JQuery plugins */
require('jquery-mask-plugin')

import '../scss/app.scss'

/* Components */
import './components/dropdown'

/* UI Kit */
$('.masked-input').mask('00/00/0000', { placeholder: 'ДД.ММ.ГГГГ' })
