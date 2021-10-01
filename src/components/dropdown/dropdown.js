class Dropdown {
  constructor(dropdown) {
    this.dropdown = $(dropdown)
    this.init()
  }

  init() {
    this._searchElements()
    this._adjustButtonsOpacity()
    this._bindHandlers()
    this._addEventHandlers()
  }

  _searchElements() {
    this.dropdownHeader = $(
      this.dropdown[0].querySelector('.dropdown-calc__header'),
    )
    this.dropdownHeaderIcon = $(
      this.dropdown[0].querySelector('.material-icons'),
    )
    this.dropdownContent = $(this.dropdownHeader[0]).next()

    this.plusButtons = this.dropdown[0].querySelectorAll(
      '.dropdown-calc__button-plus',
    )

    this.minusButtons = this.dropdown[0].querySelectorAll(
      '.dropdown-calc__button-minus',
    )
    this.calculationList = this.dropdown[0].querySelectorAll(
      '.dropdown-calc__quantity-input',
    )
    this.calculationSummary = this.dropdownHeader
    this.parentClassNameArray = this.dropdown[0].classList
    this.parentClassName = this.parentClassNameArray[1]

    this.clearButton = this.dropdown[0].querySelector(
      '.dropdown-calc__button-clear',
    )
    this.applyButton = this.dropdown[0].querySelector(
      '.dropdown-calc__button-apply',
    )
  }

  _calculate() {
    this.arr = []
    this.guestsCounter = 0
    this.guestsNumber = []
    this.calculationList.forEach((element) => {
      const $el = element
      const $label = element
        .closest('.dropdown-calc__item')
        .querySelector('.dropdown-calc__label')
      if (Number($el.value) !== 0) {
        this.arr.push(`${$el.value} ${$label.innerText}`)
        this.guestsNumber.push($el.value)
      } else if (Number($el.value) === 0) {
        this._adjustButtonsOpacity()
      }
    })

    if (this.parentClassName === 'dropdown-calc__rooms') {
      if (this.guestsNumber.length === 0) {
        this.calculationSummary[0].placeholder = 'Укажите кол-во комнат'
      } else {
        this.calculationSummary[0].placeholder = this.arr.join(', ')
      }
    } else if (this.parentClassName === 'dropdown-calc__guests') {
      for (let i = 0; i < this.guestsNumber.length; i += 1) {
        this.guestsCounter += Number(this.guestsNumber[i])
      }
      this.calculationSummary[0].placeholder = `Гостей ${this.guestsCounter}`
    }
  }

  _adjustButtonsOpacity() {
    this.calculationList.forEach((element) => {
      const $el = element
      if (Number($el.value) === 0) {
        $el.parentNode.children[0].style.opacity = '0.5'
      } else if (Number($el.value) !== 0) {
        $el.parentNode.children[0].style.opacity = '1'
      }
    })
  }

  _dropdownPlusButtonClick(button) {
    this.currentPlusButtonClicked = $(button.currentTarget)
    this.currentQuantityInput = $(button.currentTarget).prev()[0]
    this.currentQuantityInput.stepUp()
    this._calculate()
  }

  _dropdownMinusButtonClick(button) {
    this.currentMinusButtonClicked = $(button.currentTarget)
    this.currentQuantityInput = $(button.currentTarget).next()[0]
    this.currentQuantityInput.stepDown()
    this._calculate()
  }

  _dropdownHeaderClick() {
    this.dropdownHeaderIcon.toggleClass('rotate180')
    this.dropdownContent.slideToggle()
  }

  _dropdownClearButtonClick() {
    this.calculationList.forEach((input) => {
      const $input = input
      $input.value = 0
    })
    this._calculate()
  }

  _handlerDropdownHeaderClick() {
    this._dropdownHeaderClick()
  }

  _handlerDropdownHeaderIconClick() {
    this._dropdownHeaderClick()
  }

  _handlerDropdownPlusButtonClick(button) {
    this._dropdownPlusButtonClick(button)
  }

  _handlerDropdownMinusButtonClick(button) {
    this._dropdownMinusButtonClick(button)
  }

  _handlerInputFocusOut() {
    this._calculate()
  }

  _handlerInputKeyUp() {
    this._calculate()
  }

  _handlerApplyButtonClick() {
    this._dropdownHeaderClick()
  }

  _handlerClearButtonClick() {
    this._dropdownClearButtonClick()
  }

  _bindHandlers() {
    this._handlerDropdownHeaderClick =
      this._handlerDropdownHeaderClick.bind(this)
    this._handlerDropdownHeaderIconClick =
      this._handlerDropdownHeaderIconClick.bind(this)
    this._handlerDropdownPlusButtonClick =
      this._handlerDropdownPlusButtonClick.bind(this)
    this._handlerDropdownMinusButtonClick =
      this._handlerDropdownMinusButtonClick.bind(this)
    this._handlerInputFocusOut = this._handlerInputFocusOut.bind(this)
    this._handlerInputKeyUp = this._handlerInputKeyUp.bind(this)
    this._handlerApplyButtonClick = this._handlerApplyButtonClick.bind(this)
    this._handlerClearButtonClick = this._handlerClearButtonClick.bind(this)
  }

  _addEventHandlers() {
    $(this.dropdownHeader).on('click', this._handlerDropdownHeaderClick)
    $(this.dropdownHeaderIcon).on('click', this._handlerDropdownHeaderClick)
    this.plusButtons.forEach((button) => {
      $(button).on('click', this._handlerDropdownPlusButtonClick.bind(button))
    })
    this.minusButtons.forEach((button) => {
      $(button).on('click', this._handlerDropdownMinusButtonClick.bind(button))
    })
    this.calculationList.forEach((input) => {
      $(input).on('focusout', this._handlerInputFocusOut)
    })
    this.calculationList.forEach((input) => {
      $(input).on('keyup mouseup', this._handlerInputKeyUp)
    })
    $(this.clearButton).on('click', this._handlerClearButtonClick)
    $(this.applyButton).on('click', this._handlerApplyButtonClick)
  }
}

export default Dropdown
