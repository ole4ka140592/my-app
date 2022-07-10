// Task 13
// Написать функцию, принимающую аргументом массив чисел и возвращающую новый массив, состоящий из удвоенных значений первого.
// f([1, 2, null, 7, 8, null, 3]); // => [2, 4, 14, 16, 6]

let sum = (arr) => {
    return arr
        .filter(el => el !== null)
        .map(el => el * 2)
}

let sum1 = (arr) => {
    let newArr = []

    arr.reduce((acc, item) => {
        if (item !== null) {
            acc.push(item * 2)
        }
        return acc
    }, newArr)

    return newArr
}