import Checkbox from './Checkbox'

function handleCheckboxes() {
  const checkBoxesDefault = document.querySelectorAll('.checkbox')
  checkBoxesDefault.forEach((button) => new Checkbox(button))
  
  const checkBoxesToggle = document.querySelectorAll('.checkbox__toggle-input')
  checkBoxesToggle.forEach((button) => new Checkbox(button))
}

$(window).on('load', handleCheckboxes)

