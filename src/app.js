/*
 * File: app.js
 * Author: Vinkovits János László
 * Copyright: 2023, Vinkovits János László
 * Group: SZOFT I/II/N
 * Date: 2023-06-02.
 * Github: https://github.com/VinLaszlo
 * Licenc: GNU GPL
 */

var aTelekHosszInput = document.querySelector("#aTelekHossz");
var bTelekHosszInput = document.querySelector("#bTelekHossz");
var areaInput = document.querySelector("#area");
var calcButton = document.querySelector("#calcButton");

if (calcButton) {
  calcButton.addEventListener("click", () => {
    workInput();
  });
}

function workInput() {
  let res1 = checkInput(aTelekHosszInput.value);
  let res2 = checkInput(bTelekHosszInput.value);
  if (res1 && res2) {
    alert("Az adatok megfelelőek!");
  } else {
    alert("Az adatok nem megfelelőek!");
  }
  let aTelekHossz = Number(aTelekHosszInput.value);
  let bTelekHossz = Number(bTelekHosszInput.value);
  let area = calculateArea(aTelekHossz, bTelekHossz);
  areaInput.value = area + " m²";
}

function calculateArea(aTelekHossz, bTelekHossz) {
  return (
    (3 / 2) * Math.pow(aTelekHossz, 2) * Math.sqrt(3) +
    ((3 / 2) * Math.pow(bTelekHossz, 2) * Math.sqrt(3)) / 2
  );
}

function checkInput(input) {
  let res = input.match(/^[0-9]+$/);
  return res;
}
