"use strict";

window.addEventListener("load", countArray);
//set two interval
let count = 0;
const array = [0];

function countArray() {
  console.log("start");

  count++;

  //program to insert counter-value at the begining of an array
  array.unshift(count);
  console.log(array);

  //time delay
  setTimeout(countArray, 2000);

  //array doesnot get larger than 9
  if (array.length > 9) {
    array.pop();
  }
}
