const prompt = require('prompt-sync')();

function isMoreThanSeven(input){
  if (isNaN(input)) {
    return "Ошибка ввода!";
  }
  return Number(input) <= 7 ? "Число меньше или равно 7" : "Привет";
}

const input = prompt('Введите число: ');
console.log(isMoreThanSeven(input));


