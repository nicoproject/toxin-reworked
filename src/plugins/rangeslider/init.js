import RangeSlider from "./RangeSlider";

function createRangeSlider() {
  const $parentContainer = document.querySelector('.js-range-slider')
  const rangeSlider = new RangeSlider($parentContainer)
  rangeSlider._init()
}

$(window).on('load', createRangeSlider)
