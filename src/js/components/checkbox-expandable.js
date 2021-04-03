//Expandable checkbox list
$('.expandable-button').on('click', function () {
  $('.expandable-checkbox-list-container').slideToggle()
  $(this).toggleClass('expand-arrow-up')
})
