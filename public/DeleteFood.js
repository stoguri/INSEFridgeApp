'use strict'


window.addEventListener('load', sortAlphabetical);


// Loads a new alphabetically sorted version of
// the list of food in the fridge everytime this page is loaded
async function sortAlphabetical() {
  try {
    let url = '/indexAlphabetical';
    const response = await fetch(url);
    if (!response.ok) throw response;
    let text = await response.json()
    console.log('data from server, delete :' + text);
    putListInPage(text);
  } catch(e) {
    console.error('error getting contents of fridge', e);
  }
}

//Deletes old list of food and inserts new list.
function putListInPage(sortedList) {
  console.log('after server delete list: ' + sortedList);
  for (const old of document.querySelectorAll('li.row')) {
    old.remove();
  }

  let index = 0;
  for(let i in sortedList) {
    console.log(index);
    const newRow = document.createElement('li');
    newRow.classList.add('row');
    newRow.setAttribute('id', index);
    newRow.textContent = sortedList[i].name + ',\xa0\xa0\xa0 quantity:\xa0' + sortedList[i].quantity + ',\xa0\xa0\xa0 expiry: ' + sortedList[i].expiry;
    document.getElementById('deleteFoodList').appendChild(newRow);
    index++ ;
  }

}
