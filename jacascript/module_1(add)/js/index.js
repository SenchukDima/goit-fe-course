"use strict";

const invalidInput = "Ошибка ввода";

const sharm = 15;
const hurgada = 25;
const taba = 6;

const places = prompt("Введите количество необходимых мест:");
let tours;

if(places - Math.floor(places) !==0 || places < 0) {
  alert(invalidInput);
} else if( places === null ) {
  alert("Нам очень жаль, приходите еще!");
} else  {
  if(places <= taba) {
  tours = prompt("есть место в группе taba, согласны ли вы быть в этой группе?");
    if(tours === "да") {
      alert('Приятного путешествия в группе taba');
    } 
    else if(tours === "нет") {
      alert('Нам очень жаль, приходите еще!');
    }
} else if(places <= sharm) {
  tours = prompt("есть место в группе sharm, согласны ли вы быть в этой группе?");
  if(tours === "да") {
    alert('Приятного путешествия в группе sharm');
  } 
  else if(tours === "нет") {
    alert('Нам очень жаль, приходите еще!');
  }
} else if( places <= hurgada) {
  tours = prompt("есть место в группе hurgada, согласны ли вы быть в этой группе?");
  if(tours === "да") {
    alert('Приятного путешествия в группе hurgada');
  } 
  else if(tours === "нет") {
    alert('Нам очень жаль, приходите еще!');
  }
} else {
  alert('Извините, столько мест нет ни в одной группе!');
}
}


