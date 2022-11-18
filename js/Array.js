//0 Створити числовий масив та проініціалізувати його (*випадковими числами).
const length = 10,
  array = [];

for (let i = 0; i < length; i++) {
  array.push(Math.trunc(Math.random() * 20));
}
console.log(array);
//1 Видалити останній і початковий елемент з масиву, додати елемент до початку і кінця.
console.log("first and last del:", array.shift(), array.pop());
console.log(array);
console.log("first and last add:");
array.unshift(Math.trunc(Math.random() * 20));
array.push(Math.trunc(Math.random() * 20));
console.log(array);
//2 Вивести розмір масиву.
console.log("length", array.length);
//3 Зробити копію масиву.
const array1 = [...array];
console.log("Copy", array1);
//4 Вивести елементи з парними індексами.
for (item in array) {
  if (item % 2 === 0) console.log("even i : ", array[item]);
}
//5 Вивести лише парні елементи (парні числа діляться на 2 без залишку).
for (item of array) {
  if (item % 2 === 0) console.log("even : ", item);
}
//6 Вивести індекси нульових елементів (елемент дорівнює нулю).
for (item in array) {
  if (array[item] === 0) console.log("i === 0 : ", item);
}
//7 Підрахувати кількість нульових елементів.
let zeroCount = 0;
for (item of array) {
  if (item === 0) zeroCount++;
}
console.log("zeroCount : ", zeroCount);
//8 Отримати новий масив із заданого, який міститиме лише ненульові числа (-1, 5, 0, 9, -10 => -1, 5, 9, -10).
const array2 = array.filter((item) => item !== 0);
console.log(array2);
//9 Отримати новий масив їх заданого, який міститиме всі елементи вихідного, поділені на 100 (99, 5, 0, 9, 30 => 0.99, 0.05, 0, 0.09, 0.3).
const array3 = array.map((item) => item / 100);
console.log(array3);
//10 Вивести елементи масиву, зведені у куб.
array.forEach((CurentValue, index) => console.log(index, CurentValue ** 3));
//11 Визначити індекс елемента, квадрат якого дорівнює 100,
//і видалити його, або видати діагностичне повідомлення,
//якщо такого елементу не існує.
if (array.some((item) => item ** 2 === 100)) {
  const foundedIndex = array.findIndex((item) => item ** 2 === 100);
  array.splice(foundedIndex, 1);
} else {
  console.log("Елемента який задовольняє умову не знайдено");
}
console.log(array);
//12 *Перевірити, чи всі елементи масиву є парними числами (* або простими числами).
if (array.every((item) => item % 2 === 0)) {
  console.log("Bсі елементи масиву є парними числами");
} else {
  console.log("Елемента який задовольняє умову не знайдено");
}
//13 *Перевірити, чи є у масиві бодай один від'ємний елемент.
if (array.some((item) => item < 0)) {
  console.log("У масиві є від'ємний елемент");
} else {
  console.log("Елемента який задовольняє умову не знайдено");
}
