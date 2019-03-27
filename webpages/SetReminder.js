'use strict'

const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const zero = document.getElementById('zero');
const userInput = document.getElementById('NumPadInput').textContent ;

window.addEventListener('load', init);

function init() {
  one.addEventListener('click', addOne);
  two.addEventListener('click', addTwo);
  three.addEventListener('click', addThree);
  four.addEventListener('click', addFour);
  five.addEventListener('click', addFive);
  six.addEventListener('click', addSix);
  seven.addEventListener('click', addSeven);
  eight.addEventListener('click', addEight);
  nine.addEventListener('click', addNine);
  zero.addEventListener('click', addZero);
}


function addOne() {
  let value = '1' ;
  userInput += value;
}
