//Напишите код, который определяет сумму и произведение значений массива.

function sum(arr) {
    return arr.reduce((acc, el)=> {
        return acc+el
    })
}
sum([3, 2, 1])

function mult(arr) {
    return arr.reduce((acc, el)=> {
        return acc*el
    })
}
mult([3, 2, 1])