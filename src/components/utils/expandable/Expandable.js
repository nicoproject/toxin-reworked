class Expandable {
  constructor() {
    this._searchExpandables()
  }

  _searchExpandables() {
    this.expandablesCheckboxes = document.querySelectorAll(
      '.checkbox__expandable-title',
    )
  }

  _handleExpandableCheckbox() {
    $(this).toggleClass('checkbox__expandable-title_arrow-up')
    $(this).next('.checkbox__expandable-list-container').slideToggle()
  }

  init() {
    this.expandablesCheckboxes.forEach((expandableCheckboxTitle) =>
      $(expandableCheckboxTitle).on('click', this._handleExpandableCheckbox),
    )
  }
}

export default Expandable
