//Реализуйте функцию, которая преобразует данное логическое значение в его строковое представление.
// Примечание. Будут даны только действительные входные данные.

function booleanToString(b) {
    return b.toString()
}


//Получив букву, верните ее положение в алфавите.
// Ввод :: "а"
// Вывод :: "Позиция алфавита: 1"
//Русские ЗАГЛАВНЫЕ буквы имеет код, начиная с 1040 и заканчивая 1071
//Русские строчные буквы имеет код, начиная с 1072 и заканчивая 1103
//Таким образом, коды ВСЕХ русских букв находятся в диапазоне от 1040 и до 1103 ВКЛЮЧИТЕЛЬНО

function position(letter) {
    return "Position of alphabet: " + ((letter.charCodeAt(0) - 97) + 1);
}


//Герой направляется в замок, чтобы выполнить свою миссию. Однако ему сказали,
// что замок окружен парочкой могущественных драконов! каждому дракону требуется 2 пули,
// чтобы быть побежденным, наш герой понятия не имеет, сколько пуль он должен нести..
// Предполагая, что он собирается схватить определенное количество пуль и двигаться вперед,
// чтобы сразиться с другим заданным количеством драконов, выживет ли он?
// Верните True, если да, False в противном случае :)

function hero(bullets, dragons) {
    if (bullets >= dragons * 2) {
        return true;
    } else {
        return false;
    }
}


//Завершите функцию, которая преобразует шестнадцатеричное число (заданное в виде строки) в десятичное число.
function hexToDec(hexString) {
    return parseInt(hexString, 16);
}


//Наша футбольная команда завершила чемпионат. Результат каждого совпадения выглядит как "x:y".
// Результаты всех матчей фиксируются в сборнике. Например: ["3:1", "2:2", "0:1", ...]
// Напишите функцию, которая берет такой набор и считает очки нашей команды в чемпионате.
// Правила подсчета очков за каждый матч://
// если х > у: 3 балла
// если х < у: 0 баллов
// если х = у: 1 балл
// Заметки:
// в чемпионате 10 матчей
// 0 <= х <= 4
// 0 <= у <= 4

function points(games) {
    // your code here
    let point;
    const result = games.map((num) => {
        if(Number(num.charAt(0)) > Number(num.charAt(2))) {
            return point = 3;
        }else if(Number(num.charAt(0)) === Number(num.charAt(2))){
            return point = 1;
        }else {
            return point = 0;
        }
    })

    return result.reduce((x, y) => x + y);
}


//Отладка функции sayHello
// Звездолет «Энтерпрайз» столкнулся с проблемой при создании программы для приветствия всех,
// кто поднимается на борт. Ваша задача — исправить код и заставить программу снова работать!
// Пример вывода:
// Здравствуйте, мистер Спок.

function sayHello(name) {
    return 'Hello, ' + name
}


//Вы отдыхали с друзьями далеко от дома, но когда пришло время возвращаться, вы понимаете, что топливо на исходе, а ближайшая заправка находится в 50 милях от вас! Вы знаете, что в среднем ваш автомобиль расходует около 25 миль на галлон. Осталось 2 галлона. Учитывая эти факторы, напишите функцию, которая говорит вам, можно ли добраться до насоса или нет. Функция должна возвращать true, если это возможно, и false, если нет.
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return mpg * fuelLeft >= distanceToPump
    if (zeroFuel>1){
        return true
    } else{
        return false
    }
};