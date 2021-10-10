class RangeSlider {
  constructor($element) {
    this.$el = $element
    this._init()
  }

  _init() {
    this._createRangeSlider()
  }

  _createRangeSlider() {
    $(this.$el).ionRangeSlider({
      type: 'double',
      min: 0,
      max: 10000,
      from: 5000,
      to: 10000,
      grid: false,
      skin: 'round',
      postfix: "<span class='rub'>Р</span>",
      hide_min_max: true,
    })
  }
}

export default RangeSlider
