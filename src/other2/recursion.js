function hi() {
    console.log("hi")
    hi()
}

hi()


//рекурсия должна иметь условия выхода из рекурсии
let a = 0

function hi() {
    console.log("hi")
    if (a < 100) {
        a++
        hi()
    }
}
hi()

