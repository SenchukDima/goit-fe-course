"use strict";

let userInput;
const numbers = [];
let total = 0;

do {
  userInput = prompt('Введите число:');
  let num = Number(userInput);
  Number.isNaN(num);
  if(Number.isNaN(num) === true) {
    alert('Было введено не число, попробуйте еще раз');
  } else {
  numbers.push(num);}
  
} while (userInput !== null);
  numbers.pop();



   console.log(numbers);

   for (let i = 0; i < numbers.length; i++)
   {
    total += numbers[i];
   }
   alert(`Общая сумма чисел равна ${total}`);
