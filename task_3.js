const prompt = require('prompt-sync')();
const DIVIDER = 3;

processTask();

function checkNumbers(arr) {
   return arr = arr.filter(function(item) {
      if(item % DIVIDER === 0)  return item;
   })
}

function createArray (sizeofarray ){
   return new Array(Number(sizeofarray)).fill(null).map(function(item, i) {
      item = prompt(`Введите ${i} элемент массива : `);
      return Number(item);
   })
}

function validator(sizeofarray) {
   if (isNaN(sizeofarray)) throw "Ошибка ввода!";
   if (Number(sizeofarray) <= 0) throw "Размер массива должен быть больше 0!";
}

function processTask() {
   try {
      const sizeofarray = prompt('Введите размер массива: ');

      validator(sizeofarray)

      const arr = createArray(sizeofarray);
      console.log(checkNumbers(arr));
   } catch(message) {
      console.log(message);
   }
}
