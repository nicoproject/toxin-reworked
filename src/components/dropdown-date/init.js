import DropdownDate from './DropdownDate'

function handleDropdownDates() {
  const dropdownDates = document.querySelectorAll('.date-dropdown')
  dropdownDates.forEach((input) => {
    const dropdownDate = new DropdownDate(input)
    dropdownDate._init()
  })

  customizeDatepicker()
}

function customizeDatepicker() {
  $('.datepicker--buttons').append(
    '<span class="datepicker--button datepicker-close" data-action="hide">Применить</span>',
  )

  $('.datepicker-close').on('click', handleCloseButtonClick)

  function handleCloseButtonClick() {
    $('.datepicker').css('left', '-10000px', 'opacity', '0')
  }
}

$(window).on('load', handleDropdownDates, )
