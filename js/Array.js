//0 Створити числовий масив та проініціалізувати його (*випадковими числами).
const length = 10,
  array = [];

for (let i = 0; i < length; i++) {
  array.push(Math.trunc(Math.random() * 10));
}
console.log(array);
//1 Видалити останній і початковий елемент з масиву, додати елемент до початку і кінця.
console.log("first and last del:", array.shift(), array.pop());
console.log(array);
console.log("first and last add:");
array.unshift(Math.trunc(Math.random() * 10));
array.push(Math.trunc(Math.random() * 10));
console.log(array);
//2 Вивести розмір масиву.
console.log("length", array.length);
//3 Зробити копію масиву.
const array1 = [...array];
console.log("Copy", array1);
//4 Вивести елементи з парними індексами.
