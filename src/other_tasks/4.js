//Напишите функцию comparison(str1, str2), которая сравнивает строки без учёта регистра символов.

function comparison(str1, str2) {
    let result = str1.toUpperCase(str1) === str2.toUpperCase(str2)
    return result
}
