//реализовать функцию sum, которая суммирует два числа: sum(3)(6)===9

function sum(arg1) {
    return function f1(arg2) {
        return arg1 + arg2
    }
}

console.log(sum(3)(6))


//Реализовать функцию f: f(1)(2)(3)() -> 6
function f(arg) {
    return function f1(arg1) {
        return function f2(arg2) {
            return function f3() {
                return arg + arg1 + arg2
            }
        }
    }
}

console.log(f(1)(2)(3)())

//Реализовать функцию f(0)(3)(1)(5)() -> 8
function a(aa) {
    return function b(bb) {
        return function c(cc) {
            return function d(dd) {
                return function e() {
                    return aa + bb + cc + dd
                }
            }
        }
    }
}

console.log(a(0)(3)(1)(5)())

//Реализовать функцию f: f(2, 3) -> 5,
function sum1(arg1, arg2) {
    return arg1 + arg2
}

console.log(sum1(2, 3))


// Реализовать функцию при вызове f(2)(3), тоже вернет 5
function r(r3) {
    return function s(s4) {
        return r3 + s4
    }
}

console.log(r(2)(3))

//область видимости
let a = 10

function f() {
    console.log(a)
    console.log(c)
}

var c = 500
f();