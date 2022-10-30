const arr = [1, 2, 3, 4, 5, 6]

//sum arr
arr.reduce((el, acc) => el + acc)
const sumArr = () => {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}


//min in arr
let min = arr[0]
for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i]
    }
}
let maxArr = arr.map((acc, el) => Math.max(acc, el))
console.log(maxArr)


//максимальное число можно найти через деструктуризацию
const arr1 = [1, 2, 3, 4, 5, 6]
console.log(Math.max(...arr1));
console.log(Math.min(...arr1));


//сортировка
const users = [
    {name: "Anna", age: 100},
    {name: "Yana", age: 10},
    {name: "sasha", age: 3},
]
console.log(users.sort((a, b) => b.age - a.age))

console.log(users.sort((u1, u2) => {
    return u1.name.localeCompare(u2.name)
}))


//изменить порядок элементов
let newArray = arr.reverse()
console.log(newArray)

//изменить порядок элементов, не использовать reverse()

// const arr = [1, 2, 3, 4, 5, 6]
let newArray1 = []
for (let i = arr.length - 1; i >= 0; i--) {
    newArray1.push(arr[i])
}
console.log(newArray1)


let arrX= [1, "no", -5, 0, false, NaN]
let arrXFalse= arrX.filter(m=> Boolean(m))
console.log(arrXFalse)