//Напишите функцию randomElement(arr), которая возвращает случайный элемент из массива.

function randomElement(arr) {
    return arr[Math.floor(Math.random()*arr.length)]
}

console.log(randomElement([24, 45, 22, 35, 43]));

