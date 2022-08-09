//напишите функцию по частоте использования, в том числе и в алфавитном порядке
let className = [
    'header', 'menu', 'menu-item', 'menu-item', 'menu-item', 'footer', 'menu', 'link', 'link', 'link', 'link'
]

let classNameObj = {}
for (let i = 0; i < className.length; i++) {
    let current = className[i]
    if (classNameObj[current]) {
        classNameObj[current] += 1
    } else {
        classNameObj[current] = 1
    }
}

let classNameArray = Object.keys(classNameObj).sort((a, b) => classNameObj[b] - classNameObj[a]
)

console.log(classNameArray)


//узнать сколько гласных в слове
const findVowels = (str) => {
    let vowels = ['a', 'o', 'u', 'i', 'e']
    let count = 0
    for (let char of str.toLowerCase()) {
        console.log(str)
        if (vowels.includes(char)) {
            count += 1
        }
    }
    return count
}
findVowels("Olga")


//проверить являются ли слова анаграмами
let a = 'friend'
let b = 'dneirf'
function anagram(a,b) {
    return [...a.toLowerCase()].sort().toString() === [...b.toLowerCase()].sort().toString()
}