class TextField {
  constructor($element) {
    this.$el = $element
    this._init()
  }

  _init() {
    this._checkMask()
  }

  _checkMask() {
    if ($(this.$el).hasClass('text-field_masked')) this._createMask()
  }

  _createMask() {
    $(this.$el).mask('00.00.0000', { placeholder: 'ДД.ММ.ГГГГ' })
  }
}

export default TextField
