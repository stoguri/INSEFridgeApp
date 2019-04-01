'use strict'

document.getElementById('DropdownButton').addEventListener('click', showDropDown);
document.getElementById('Recent').addEventListener('click', sortRecent);
document .getElementById('Alphabetical').addEventListener('click', sortAlphabetical);
document.getElementById('quantity').addEventListener('click', sortQuantity);


/*toggle between hiding and showing the dropdown content */
function showDropDown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

async function sortQuantity() {
  try {
    let url = '/index/sort/quantity'
    const response = await fetch(url);
    if (!response.ok) throw response;
    const data = await response.json()
    putListInPage(data);
  } catch (e) {
    console.error('error getting contents of fridge', e);
  }
}

async function sortRecent() {
  try {
    let url = '/index/sort/recent';
    const response = await fetch(url);
    if (!response.ok) throw response;
    const data = await response.json()
    putListInPage(data);
  } catch(e) {
    console.error('error getting contents of fridge', e);
  }
}

async function sortAlphabetical() {
  try {
    let url = '/index/sort/alphabetical';
    const response = await fetch(url);
    if (!response.ok) throw response;
    const data = await response.json()
    putListInPage(data);
  } catch(e) {
    console.error('error getting contents of fridge', e);
  }
}

function putListInPage(sortedList) {
  let old = document.getElementsByClassName('row');
  old.remove();
  for (i in sortedList) {
    let newRow = document.createElement("tr");
    newRow.classList.add("row")
    let counter = 1
    for (let j = 0; j < 3; j++) {
      if (counter = 1) {
        let newCell = document.createElement('td');
        let cellText = document.createTextNode(sortedList[i].name);
      }
      else if (counter = 2) {
        let newCell = document.createElement('td');
        let cellText = document.createTextNode(sortedList[i].quantity);
      } else {
        let newCell = document.createElement('td');
        let cellText = document.createTextNode(sortedList[i].expiry);
      }
    }
    foodTable.appendChild(newRow);
  }
}
