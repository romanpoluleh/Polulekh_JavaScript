function checkNumbers(sizeofarray, divider){
    if (isNaN(sizeofarray))  return "Ошибка ввода!";
    if (Number(sizeofarray) <= 0) return "Размер массива должен быть больше 0!";
    let arr = new Array(+sizeofarray);
    arr.fill(null);
    arr = arr.map(function(item, i){
       item = prompt(`Введите ${i} элемент массива : `);
       return Number(item);
       })
    return arr = arr.filter(function(item){
       if(item % divider === 0)  return item;
       })
}

const prompt = require('prompt-sync')();
const sizeofarray = prompt('Введите размер массива: ');

console.log(checkNumbers(sizeofarray, 3));