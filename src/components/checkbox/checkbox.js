class Checkbox {
  constructor(checkbox) {
    this.checkbox = $(checkbox)
    this.init()
  }

  _toggleCheck() {
    if (this.checkbox.parent().hasClass('checkbox__label')) {
      this.checkbox.parent().toggleClass('checkbox__label_checked')
    } else if (this.checkbox.parent().hasClass('checkbox__toggle')) {
      this.checkbox.parent().toggleClass('checkbox__toggle_checked')
    }
  }

  _setupCheked() {
    if (
      this.checkbox[0].checked &&
      this.checkbox.parent().hasClass('checkbox__label')
    ) {
      this.checkbox.parent().toggleClass('checkbox__label_checked')
    }

    if (
      this.checkbox[0].checked &&
      this.checkbox.parent().hasClass('checkbox__toggle')
    ) {
      this.checkbox.parent().toggleClass('checkbox__toggle_checked')
    }
  }

  _handlerClick() {
    this._toggleCheck()
  }

  _bindHandlers() {
    this._handlerClick = this._handlerClick.bind(this)
  }

  _addEventHandlers() {
    this.checkbox.on('click', this._handlerClick)
  }

  init() {
    this._bindHandlers()
    this._addEventHandlers()
    this._setupCheked()
  }
}

export default Checkbox
