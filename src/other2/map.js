//Дан массив с числами. Сделайте из него массив, состоящий из квадратов этих чисел.

let arr = [1,2, 3, 4, 100]
let newArr=[]
arr.map((el)=>{
    newArr.push(el*el)
})
console.log(newArr)