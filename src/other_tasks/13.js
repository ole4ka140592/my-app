//Имеется массив простых чисел: numbers = [2, 3, 5, 7, 11, 13, 17, 19].
// Использую метод reduce() напишите функцию currentSums(numbers),
// которая возвращает новый массив из такого же числа элементов,
// в котором на каждой позиции будет находиться
// сумма элементов массива numbers до этой позиции включительно.


function currentSums(numbers){
    let newArr = []
    numbers.reduce((acc, el, i) => {
        return newArr[i] = acc + el
    }, 0)
    return newArr
}
currentSums([2,5,10])
