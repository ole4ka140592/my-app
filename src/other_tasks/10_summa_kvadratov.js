//Напишите функцию sumOfSquares(arr), которая возвращает сумму квадратов значений массива.

function sumOfSquares(arr) {
    return arr.reduce((acc, el)=> {
        return acc + el * el;
    }, 0)
}

sumOfSquares([3, 2, 1])
