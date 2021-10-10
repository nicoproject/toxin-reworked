import TextField from "./TextField";

function handleTextFieldMask() {
  const textFields = document.querySelectorAll('.text-field')
  textFields.forEach(input => {
    const textField = new TextField(input)
    textField._init()
  })
}

$(window).on('load', handleTextFieldMask)
