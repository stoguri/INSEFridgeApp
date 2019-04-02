'use strict'

document.getElementById('finish').addEventListener('click', submitForm);

const nameInput = document.getElementById('nameInput');
const quantityInput = document.getElementById('Quantity');
const expiryDateInput = document.getElementById('date');

async function submitForm() {
  doubleCheck();
  if (doubleCheck == true) {
    let name = nameInput.textContent;
    let quantity = quantityInput.textContent;
    let expiryDate = expiryDateInput.textContent;
    const rawResponse = await fetch('/insertFood', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name: name, quantity: quantity, expiry: expiryDate})
    });
    const content = await rawResponse.json();

    console.log(content);
  } else {

  }
}


function doubleCheck() {
  return confirm("Are you happy with your input?")
}
