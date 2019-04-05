'use strict'


//Ensures that only letters can be entered into input box
function lettersOnly(input) {
  let regex = /[^a-z]/gi;
  input.value = input.value.replace(regex, "");
}
