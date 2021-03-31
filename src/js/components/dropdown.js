//Expandable dropdown
$('.default-dropdown-calc__header').on('click', function () {
  $(this).next().slideToggle()
  $(this).prev().toggleClass('rotate180')
})

$('.default-dropdown-calc > span.material-icons ').on('click', function () {
  $(this).next().next().slideToggle()
  $(this).toggleClass('rotate180')
})

//MINUS BUTTON
$('.default-dropdown-calc__item .minus').on('click', function () {
  this.parentNode.querySelector('input[type=number]').stepDown()
  const list = this.closest('.default-dropdown-calc').querySelectorAll(
    '.calc-quantity-input input[type="number"]',
  )
  const calculationSummary = this.closest(
    '.default-dropdown-calc',
  ).querySelector('.default-dropdown-calc__header')
  const parentClassName = this.closest('.default-dropdown-calc').classList
  calc(list, calculationSummary, parentClassName)
})

//PLUS BUTTON
$('.default-dropdown-calc__item .plus').on('click', function () {
  this.parentNode.querySelector('input[type=number]').stepUp()

  const list = this.closest('.default-dropdown-calc').querySelectorAll(
    '.calc-quantity-input input[type="number"]',
  )
  const calculationSummary = this.closest(
    '.default-dropdown-calc',
  ).querySelector('.default-dropdown-calc__header')
  const parentClassName = this.closest('.default-dropdown-calc').classList
  calc(list, calculationSummary, parentClassName)

  this.parentNode.querySelector('.minus').style.opacity = '1'
})

//INPUTS TYPE NUMBER FOCUS LOSE
$('.default-dropdown-calc__item input[type=number]').focusout(function () {
  const list = this.closest('.default-dropdown-calc').querySelectorAll(
    '.calc-quantity-input input[type="number"]',
  )
  const calculationSummary = this.closest(
    '.default-dropdown-calc',
  ).querySelector('.default-dropdown-calc__header')
  const parentClassName = this.closest('.default-dropdown-calc').classList
  calc(list, calculationSummary, parentClassName)
})

//RECALC ON TYPE NUMBER VALUE CHANGE
$('.default-dropdown-calc__item input[type=number]').bind(
  'keyup mouseup',
  function () {
    const list = this.closest('.default-dropdown-calc').querySelectorAll(
      '.calc-quantity-input input[type="number"]',
    )
    const calculationSummary = this.closest(
      '.default-dropdown-calc',
    ).querySelector('.default-dropdown-calc__header')
    const parentClassName = this.closest('.default-dropdown-calc').classList
    calc(list, calculationSummary, parentClassName)
  },
)

//CALC FUNCTION
function calc(list, calculationSummary, parentClassName) {
  let arr = []
  let guestsCounter = 0
  let guestsNumber
  // for (let i = 0; i < list.length; i++) {
  //   if (list[i].value !== 0) {
  //     arr.push(list[i].value + ' ' + list[i].labels[0].innerText)
  //   } else if (list[i].value == 0)
  //     list[i].parentNode.children[0].style.opacity = '0.5'
  // }
  list.forEach((element) => {
    if (Number(element.value) !== 0) {
      arr.push(element.value + ' ' + element.labels[0].innerText)
    } else if (element.value == 0)
      element.parentNode.children[0].style.opacity = '0.5'
  })

  if (parentClassName[1] === 'rooms-dropdown-calc') {
    calculationSummary.placeholder = arr.join(', ')
  } else if (parentClassName[1] === 'guests-dropdown-calc') {
    guestsNumber = document.querySelectorAll(
      '.' + parentClassName[1] + ' .calc-quantity-input input[type="number"]',
    )
    for (let i = 0; i < guestsNumber.length; i++) {
      guestsCounter =
        parseInt(guestsCounter, 10) + parseInt(guestsNumber[i].value, 10)
    }

    calculationSummary.placeholder = 'Гостей ' + guestsCounter
  }
}

//BUTTON CLEAR
$('.dropdown-calc__button.clear_button').on('click', function () {
  const list = this.closest('.default-dropdown-calc').querySelectorAll(
    '.calc-quantity-input input[type="number"]',
  )
  for (let i = 0; i < list.length; i++) {
    list[i].value = 0
  }
  const calculationSummary = this.closest(
    '.default-dropdown-calc',
  ).querySelector('.default-dropdown-calc__header')
  const parentClassName = this.closest('.default-dropdown-calc').classList
  calc(list, calculationSummary, parentClassName)
})

//BUTTON APPLY
$('.dropdown-calc__button.apply_button').on('click', function () {
  const x = this.closest(
    '.default-dropdown-calc .default-dropdown__calc_content',
  )
  $(x).slideToggle()
})
