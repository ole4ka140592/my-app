//split

//Дана строка 'я учу javascript!'.
// С помощью метода split запишите каждое слово этой строки в отдельный элемент массива.

let string='я учу javascript!';
console.log(string.split(" "))


// Дана строка 'я учу javascript!'.
// С помощью метода split запишите каждый символ этой строки в отдельный элемент массива.
let string1='я учу javascript!'
console.log(string1.split(""))


//В переменной date лежит дата в формате '2025-12-31'.
// Преобразуйте эту дату в формат '31.12.2025'.
let string3='2025-12-31'
let string4 = string3.split("-")
console.log(string4[2] + "." + string4[1] + "." + string4[0])