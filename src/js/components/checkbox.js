$('.default-checkbox:checked').parent().addClass('checked')

$('.default-checkbox').on('change', function () {
  $(this).parent().toggleClass('checked')
})
