// Дан массив с числами. Создайте новый массив, состоящий из квадратов этих чисел.
let arr1= [-1, -3, 5, 10]
let arr2=[]
arr1.forEach((el)=> {
    arr2.push(el*el)
})
console.log(arr2)


//Дан массив с числами. Найдите сумму этих чисел
let arr3= [-1, -3, 5, 10]
let result=0
arr3.forEach((el)=> {
    result+=el
})
console.log(result)