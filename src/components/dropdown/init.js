import Dropdown from './Dropdown';

function handleDropdowns() {
  const dropDowns = document.querySelectorAll('.dropdown-calc')
  dropDowns.forEach((dropdown)=> new Dropdown(dropdown))
}

$(window).on('load', handleDropdowns)
