//Дан массив с числами. Оставьте в нем только отрицательные числа.
let arr = [1, -3, 5, 6, -7, 8, 9, -11];
let newArr = arr.filter(f => f < 0)
console.log(newArr)

//Дан массив с числами. Оставьте в нем только четные числа.
let arr1 = [1, -3, 5, 6, -7, 8, 9, -11];
let newArr1 = arr1.filter(f => f % 2 == 0)
console.log(newArr1)

// Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов.
let arr2 = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'];
let newArr2 = arr2.filter(f => f.length > 5)
console.log(newArr2)

//Дан массив, в нем могут быть обычные элементы и подмассивы, например [1, 2, [3, 4], 5, [6, 7]]. Оставьте в нем только подмассивы.
let arr3 = [1, 'string', [3, 4], 5, [6, 7]];
let newArr3 = arr3.filter(f=> Array.isArray(f)? f: null);
console.log(newArr3)

//Дан массив с числами. Посчитайте количество отрицательных чисел в этом массиве.
let arr4 = [5, -3, 6, -5, 0, -7, 8, 9];
let newArr4 = arr4.filter(f=> f<0)
console.log(newArr4.length)