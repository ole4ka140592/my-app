//Напишите функцию capitalize(str), которая возвращает строку, в которой каждое слово начинается с заглавной буквы.


function capitalize(str) {
    let a = str.split(" ")
    let b = a.map(m => m.charAt(0).toUpperCase() + m.slice(1))
    return b.join(", ")
}

let str = "каждый охотник желает знать";
capitalize(str)
