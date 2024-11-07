// Получение ввода от пользователя
let num1 = parseFloat(prompt('Введите значение для num1:'));
let num2 = parseFloat(prompt('Введите значение для num2:'));
// Проверка условий
if (num1 <= 1 && num2 >= 3) {
console.log('Условия выполнены');
} else {
console.log('Условия не выполнены');
}

let test = true;
console.log(test ? '+++' : '---');

// Пример числа дня месяца
let day = 15;
// Определение декады
let decade;
if (day >= 1 && day <= 10) {
decade = 'первая';
} else if (day > 10 && day <= 20) {
decade = 'вторая';
} else if (day > 20 && day <= 31) {
decade = 'третья';
} else {
decade = 'некорректное число';
}
// Вывод результата
console.log(`Число ${day} попадает в ${decade} декаду месяца.`);


// Получение числа от пользователя
let number = parseInt(prompt('Введите число:'));
// Извлечение разрядов
let units = number % 10;
let tens = Math.floor((number % 100) / 10);
let hundreds = Math.floor(number / 100);
console.log(`сотни ${hundreds}, десятки ${tens}, единицы ${units}`);