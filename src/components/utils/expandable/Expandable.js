class Expandable {
  constructor() {
    this.expandablesCheckboxes = this._searchExpandables()
    this._init()
  }

  _searchExpandables() {
    this.expandablesCheckboxes = document.querySelectorAll(
      '.checkbox__expandable-title',
    )
  }

  _handleExpandableCheckbox() {
    // console.log(this)
    console.log($(this).next('.checkbox__expandable-list-container'))
    $(this).toggleClass('checkbox__expandable-title_arrow-up')
    $(this).next('.checkbox__expandable-list-container').slideToggle()
  }

  _init() {
    this.expandablesCheckboxes.forEach((expandableCheckboxTitle) =>
      $(expandableCheckboxTitle).on('click', this._handleExpandableCheckbox),
    )
  }
}

export default Expandable
