class Pagination {
  constructor($el) {
    this.$el = $el
    this._init()
  }

  _createPagination() {
    this.$el.pagination({
      items: 15,
      displayedPages: 3,
      edges: 1,
      prevText: '<i class="material-icons">arrow_backward</i>',
      nextText: '<i class="material-icons">arrow_forward</i>',
    })
  }

  _init() {
    this._createPagination()
  }
}

export default Pagination
