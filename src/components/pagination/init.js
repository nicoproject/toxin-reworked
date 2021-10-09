import Pagination from './Pagination'

function handlePagination() {
  const $paginationContainer = $('.js-pagination__container')

  const pagination = new Pagination($paginationContainer)
  pagination()
}

$(window).on('load', handlePagination)
