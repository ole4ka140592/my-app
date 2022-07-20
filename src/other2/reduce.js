//Дан массив с числами.
//Узнайте сколько элементов с конца надо сложить, чтобы в сумме получить больше 10.

let arr=[4, 1, 8, 2, 3, 2]

arr.reduceRight((acc, el)=> {
    if (acc>10) {
        alert(el)
        return
    } else {
        el++
        return acc+el
    }
})