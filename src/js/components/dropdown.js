//Expandable dropdown
$('.default-dropdown-calc__header').click(function () {
  $(this).next().slideToggle()
  $('.default-dropdown-calc > span.material-icons').toggleClass('rotate180');
})

$('.default-dropdown-calc > span.material-icons ').click(function () {
  $('.default-dropdown__calc_content').slideToggle()
  $(this).toggleClass('rotate180');
})

//MINUS BUTTON
$('.default-dropdown-calc__item .minus').on('click', function () {
  this.parentNode.querySelector('input[type=number]').stepDown()
  var list = this.closest('.default-dropdown-calc').querySelectorAll(
    '.calc-quantity-input input[type="number"]',
  )
  var calculationSummary = this.closest('.default-dropdown-calc').querySelector(
    '.default-dropdown-calc__header',
  )
  var parentClassName = this.closest('.default-dropdown-calc').classList
  calc(list, calculationSummary, parentClassName)
})

//PLUS BUTTON
$('.default-dropdown-calc__item .plus').on('click', function () {
  this.parentNode.querySelector('input[type=number]').stepUp()

  var list = this.closest('.default-dropdown-calc').querySelectorAll(
    '.calc-quantity-input input[type="number"]',
  )
  var calculationSummary = this.closest('.default-dropdown-calc').querySelector(
    '.default-dropdown-calc__header',
  )
  var parentClassName = this.closest('.default-dropdown-calc').classList
  calc(list, calculationSummary, parentClassName)

  this.parentNode.querySelector('.minus').style.opacity = '1'
})

//INPUTS TYPE NUMBER FOCUS LOOSE
$('.default-dropdown-calc__item input[type=number]').focusout(function () {
  var list = this.closest('.default-dropdown-calc').querySelectorAll(
    '.calc-quantity-input input[type="number"]',
  )
  var calculationSummary = this.closest('.default-dropdown-calc').querySelector(
    '.default-dropdown-calc__header',
  )
  var parentClassName = this.closest('.default-dropdown-calc').classList
  calc(list, calculationSummary, parentClassName)
})

//RECALC ON TYPE NUMBER VALUE CHANGE
$('.default-dropdown-calc__item input[type=number]').bind(
  'keyup mouseup',
  function () {
    var list = this.closest('.default-dropdown-calc').querySelectorAll(
      '.calc-quantity-input input[type="number"]',
    )
    var calculationSummary = this.closest(
      '.default-dropdown-calc',
    ).querySelector('.default-dropdown-calc__header')
    var parentClassName = this.closest('.default-dropdown-calc').classList
    calc(list, calculationSummary, parentClassName)
  },
)

//CALC FUNCTION
function calc(list, calculationSummary, parentClassName) {
  for (var i = 0, arr = []; i < list.length; i++) {
    if (list[i].value != 0) {
      arr.push(list[i].value + 'x' + list[i].labels[0].innerText)
    } else if (list[i].value == 0)
      list[i].parentNode.children[0].style.opacity = '0.5'
  }
  if (parentClassName[1] == 'rooms-dropdown-calc')
    calculationSummary.placeholder = arr.join(', ')
  else if (parentClassName[1] == 'guests-dropdown-calc') {
    var guestsNumber = document.querySelectorAll(
      '.' + parentClassName[1] + ' .calc-quantity-input input[type="number"]',
    )
    for (var i = 0, guestsCounter = 0; i < guestsNumber.length; i++) {
      guestsCounter =
        parseInt(guestsCounter, 10) + parseInt(guestsNumber[i].value, 10)
    }

    calculationSummary.placeholder = 'Гостей ' + guestsCounter
  }
}

//BUTTON CLEAR
$('.dropdown-calc__button.clear_button').on('click', function () {
  var list = this.closest('.default-dropdown-calc').querySelectorAll(
    '.calc-quantity-input input[type="number"]',
  )
  for (var i = 0; i < list.length; i++) {
    list[i].value = 0
  }
  var calculationSummary = this.closest('.default-dropdown-calc').querySelector(
    '.default-dropdown-calc__header',
  )
  var parentClassName = this.closest('.default-dropdown-calc').classList
  calc(list, calculationSummary, parentClassName)
})

//BUTTON APPLY
$('.dropdown-calc__button.apply_button').on('click', function () {
  var x = this.closest('.default-dropdown-calc .default-dropdown__calc_content')
  $(x).slideToggle()
})
