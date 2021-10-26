const prompt = require('prompt-sync')();

function checkName(username, validname){
    return username === validname ? `Привет, ${username}` : `Нет такого имени`
}

const username = prompt('Введите имя: ');
console.log(checkName(username, 'Vyacheslav'));

