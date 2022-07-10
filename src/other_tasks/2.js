let a = [1, 2, 3];
let b = [4, 5, 6];
let c = [7, 8, 9];

let d = a.concat(b)
let result = d.concat(c)
console.log(result)
console.log(result.reverse())

result.sort((a, b) => {
    return b - a
})
console.log(result)