//Напишите функцию stringToarray(str), которая преобразует строку в массив слов.

function stringToarray(str) {
    let result = str.split(" ")
    return result
}
stringToarray('Каждый охотник желает знать')