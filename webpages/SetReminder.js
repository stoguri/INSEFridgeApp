'use strict'

const textBox = document.getElementById("NumPadInput");
const keypad1 = document.getElementById("one").addEventListener('click', addOne);
const keypad2 = document.getElementById("two").addEventListener('click', addTwo);
const keypad3 = document.getElementById("three").addEventListener('click', addThree);
const keypad4 = document.getElementById("four").addEventListener('click', addFour);
const keypad5 = document.getElementById("five").addEventListener('click', addFive);
const keypad6 = document.getElementById("six").addEventListener('click', addSix);
const keypad7 = document.getElementById("seven").addEventListener('click', addSeven);
const keypad8 = document.getElementById("eight").addEventListener('click', addEight);
const keypad9 = document.getElementById("nine").addEventListener('click', addNine);
const keypad0 = document.getElementById("zero").addEventListener('click', addZero);
const keypadDelete = document.getElementById("deleteNum").addEventListener('click', deleteNumbers);
const keypadEnter = document.getElementById("enter").addEventListener('click', sendData);


function addOne() {
  textBox.textContent += "1";
}

function addTwo() {
  textBox.textContent += "2";
}

function addThree() {
  textBox.textContent += "3";
}

function addFour() {
  textBox.textContent += "4";
}

function addFive() {
  textBox.textContent += "5";
}

function addSix() {
  textBox.textContent += "6";
}

function addSeven() {
  textBox.textContent += "7";
}

function addEight() {
  textBox.textContent += "8";
}

function addNine() {
  textBox.textContent += "9";
}

function addZero() {
  textBox.textContent += "0";
}

function deleteNumbers() {
  textBox.textContent = "";
}
