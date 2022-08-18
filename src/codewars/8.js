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
    let point;
    const result = games.map((num) => {
        if (Number(num.charAt(0)) > Number(num.charAt(2))) {
            return point = 3;
        } else if (Number(num.charAt(0)) === Number(num.charAt(2))) {
            return point = 1;
        } else {
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
    if (zeroFuel > 1) {
        return true
    } else {
        return false
    }
};


//Напишите простое регулярное выражение для проверки имени пользователя. Допустимые символы:строчные буквы, числа, подчеркивать. Длина должна быть от 4 до 16 символов (включая оба).
function validateUsr(username) {
    return username.length >= 4
        && username.length <= 16
        && (username.match(/[a-z]|_|\d/g).length === username.length);
}


//Учитывая строку цифр, вы должны заменить любую цифру ниже 5 на «0», а любую цифру 5 и выше на «1». Верните полученную строку.Примечание: ввод никогда не будет пустой строкой
function fakeBin(x) {
    return x.split('').map(a => (a >= 5) ? '1' : '0').join('')
}


//Завершите функцию, которая принимает неотрицательное целое число n в качестве входных данных и возвращает список всех степеней числа 2 с показателем степени от 0 до n (включительно).
function powersOfTwo(n) {
    let arr = [];
    for (let i = 0; i <= n; i++)
        arr[i] = 2 ** i;
    return arr;
}


//В зоопарк прибыли новые животные. Смотритель зоопарка обеспокоен тем, что, возможно, у животных неправильные хвосты. Чтобы помочь ей, вы должны исправить сломанную функцию, чтобы убедиться, что второй аргумент (хвост) совпадает с последней буквой первого аргумента (тела) - иначе хвост не подходит! Если хвост правильный, верните true, иначе верните false. Аргументы всегда будут непустыми строками и обычными буквами.
function correctTail(body, tail) {
    let sub = body.slice(-1)
    if (sub === tail) {
        return true
    } else {
        return false
    }
}


//Ваша задача состоит в том, чтобы сделать две функции (максимум и минимум или максимум и минимум и т. д., в зависимости от языка), которые получают на вход список целых чисел и возвращают наибольшее и наименьшее число в этом списке соответственно.
let min = function (list) {
    return Math.min(...list)
}

let max = function (list) {
    return Math.max(...list)
}


//Тимми и Сара думают, что они влюблены, но там, где они живут, они узнают об этом, только когда каждый сорвет по цветку. Если у одного из цветов четное количество лепестков, а у другого нечетное количество лепестков, это означает, что они влюблены. Напишите функцию, которая будет принимать количество лепестков каждого цветка и возвращать true, если они влюблены, и false, если нет.
function lovefunc(flower1, flower2) {
    return flower1 % 2 !== flower2 % 2
}


//Учитывая строку, вы должны вернуть строку, в которой каждый символ (с учетом регистра) повторяется один раз.
function doubleChar(str) {
    return str.split('').map(m => m += m).join('')
}


//Создайте метод sayHello/say_hello/SayHello, принимающий в качестве входных данных имя, город и штат,
// чтобы приветствовать человека. Обратите внимание, что имя будет массивом, состоящим из одного или
// нескольких значений, которые должны быть соединены вместе с одним пробелом между каждым,
// а длина массива имен в тестовых примерах будет варьироваться.
function sayHello(name, city, state) {
    return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
}


//Теперь вам нужно написать функцию, которая принимает аргумент и возвращает его квадрат.
function square(a) {
    return a * a
}


//Учитывая 2 строки, a и b, верните строку формы короткая + длинная + короткая, с более короткой строкой снаружи и
// более длинной строкой внутри. Строки не будут одинаковой длины, но могут быть пустыми (нулевой длины).Подсказка для пользователей R:
// Длина строки не всегда совпадает с количеством символов
// Например: (Ввод1, Ввод2) --> вывод
function solution(a, b) {
    if (a.length > b.length) {
        return b + a + b
    }
    if (a.length < b.length) {
        return a + b + a
    }
}


//Учитывая число n, вернуть количество положительных нечетных чисел меньше n, ЛЕГКО!
// Примеры (ввод -> вывод) 7 -> 3 (потому что нечетные числа ниже 7 равны [1, 3, 5])
function oddCount(n) {
    let arr = []
    for (let i = 0; i < n; i++) {
        if (i % 2 !== 0) {
            arr.push(i)
        }
    }
    return arr
}


//Создайте функцию, которая возвращает массив целых чисел от n до 1, где n>0.
// Пример: n=5 --> [5,4,3,2,1]
const reverseSeq = n => {
    let arr = []
    for (let i = n; i > 0; i--) {
        arr.push(i)
    }
    return arr
};


//напишите мне функцию stringy, которая принимает размер и возвращает строку из чередующихся «1» и «0».
// строка должна начинаться с 1. строка размером 6 должна возвращать: '101010'. с размером 4 должно возвращаться: '1010'. с размером 12 должен вернуть: «101010101010». Размер всегда будет положительным и будет использовать только целые числа.
function stringy(size) {
    let result = '';
    for (let i = 1; i <= size; i++) {
        result += i % 2;
    }
    return result;
}


//Завершите решение, чтобы оно перевернуло все слова в переданной строке. Пример (ввод --> вывод):
//"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"
function reverseWords(str) {
    return str.split(' ').reverse().join(' ')
}


//Создайте функцию с именем ярлык для удаления гласных
function shortcut(string) {
    let al = ['a', 'e', 'i', 'o', 'u',
        'A', 'E', 'I', 'O', 'U'];
    let result = "";
    for (let i = 0; i < string.length; i++) {
        if (!al.includes(string[i])) {
            result += string[i];
        }
        return result;
    }
}


//Создайте несколько функций, которые будут возвращать сумму, разность, модуль, произведение, частное и показатель степени соответственно. Пожалуйста, используйте следующие имена функций:
// дополнение = добавить
// умножить = умножить//
// Division = разделить (допускаются как целочисленные, так и дробные деления)
// модуль = мод
// экспоненциальный = показатель степени вычитание = вычитание//
// Примечание. Все математические операции будут: a (операция) b
function add(a, b) {
    return a + b
}

function divide(a, b) {
    return a / b
}

function multiply(a, b) {
    return a * b
}

function mod(a, b) {
    return a % b
}

function exponent(a, b) {
    return a ** b
}

function subt(a, b) {
    return a - b
}


//Напишите функцию, которая проверяет, является ли заданная строка (без учета регистра) палиндромом.
function isPalindrome(x) {
    x = x.toLowerCase()
    return x === x.split('').reverse().join('')
}


//Недавно я обнаружил несколько ошибок в своем коде Java/Type/Coffee-script и проследил проблему до глобальной функции isNaN, которую использовал. Я ожидал, что он будет более проницательным, но сейчас он возвращает true для undefined. Напишите функцию isReallyNaN, которая возвращает true только в том случае, если передается в аргументе, который оценивается как NaN, и возвращает false в противном случае.
//Допустимо любое решение!
const isReallyNaN = (val) => {
    return isNaN(val) == true ? true : false
};


//Предоставленный код должен заменить все точки. в указанной String str с дефисами - Но это не работает должным образом. Задача Исправьте ошибку, чтобы мы все могли вернуться домой пораньше. Заметки Строка str никогда не будет нулевой.
var replaceDots = function (str) {
    return str.replace(/[.]/g, '-');
}


//Получив букву, верните ее положение в алфавите. Ввод :: "а" Вывод :: "Позиция алфавита: 1"
function position(letter) {
    return "Position of alphabet: " + ((letter.charCodeAt(0) - 97) + 1);
}


//Суммируйте все числа данного массива (cq. list), кроме самого высокого и самого низкого элемента (по значению, а не по индексу!). Самый высокий или самый низкий элемент, соответственно, является одним элементом на каждом ребре, даже если их несколько с одинаковым значением. Помните о проверке ввода. Пример
// {6, 2, 1, 8, 10} => 16
// {1, 1, 11, 2, 3} => 6
// Проверка ввода
// Если вместо массива задано пустое значение ( null, None, Nothing и т. д.), или данный массив является пустым списком или списком только с 1 элементом, вернуть 0.
function sumArray(array) {
    if (array === null || array === undefined) {
        return 0
    } else if (array.length < 2) {
        return 0
    } else {
        let min = array.sort((a, b) => a - b)
        let minValue = min[0]
        let max = array.sort((a, b) => b - a)
        let maxValue = max[0]
        let sum = array.reduce((acc, number) => {
            acc += number
            return acc
        })
        return sum - minValue - maxValue
    }
}


//Очень просто, по заданному целому числу или числу с плавающей запятой найти его противоположность. Примеры://
// 1:-1
// 14:-14
// -34:34
function opposite(number) {
    return -number
}


// Убрать восклицательный знак в конце строки. Для начинающего ката можно считать, что входные данные всегда являются строкой, проверять ее не нужно.
function remove(string) {
    return string[string.length - 1] === '!' ? string.slice(0, string.length - 1) : string;
}


//Ваши одноклассники попросили вас скопировать для них некоторые документы. Вы знаете, что есть «n» одноклассников, а в документах «m» страниц. Ваша задача — посчитать, сколько чистых страниц вам нужно. Если n < 0 или m < 0, вернуть 0.
function paperwork(n, m) {
    if (n < 0 || m < 0) {
        return 0
    } else {
        return n * m
    }
}


//создать функцию, которая удаляет первый и последний символы строки. Вам дан один параметр, исходная строка. Вам не нужно беспокоиться о строках, содержащих менее двух символов
function removeChar(str) {
    return str.split('').slice(1, -1).join('')
};


//Вы пишете код для управления светофорами в вашем городе. Вам нужна функция для обработки каждого изменения с зеленого на желтый, на красный, а затем снова на зеленый. Завершите функцию, которая принимает строку в качестве аргумента, представляющую текущее состояние источника света, и возвращает строку, представляющую состояние, в которое свет должен перейти. Например, когда вход зеленый, выход должен быть желтым.
function updateLight(current) {
    if (current === 'green') {
        return 'yellow';
    } else if (current === 'yellow') {
        return 'red';
    } else {
        return 'green';
    }
}


//Если указано число от 0 до 9, верните его словами. Вход :: 1 Выход :: "Один". Если ваш язык поддерживает это, попробуйте использовать оператор switch.
function switchItUp(number) {
    const obj = {
        0: 'Zero', 1: 'One', 2: 'Two', 3: 'Three', 4: 'Four', 5: 'Five', 6: 'Six', 7: 'Seven', 8: 'Eight', 9: 'Nine',
    };
    return obj[number]
}


//Ваша задача — создать функцию isDivideBy (или is_divide_by), чтобы проверять, делится ли целое число на оба целых числа a и b.
function isDivideBy(number, a, b) {
    if (number % a === 0 && number % b === 0) {
        return true
    } else {
        return false
    }
}


//Исправить функцию Я создал эту функцию, чтобы добавить пять к любому переданному ей числу и вернуть новое значение. Он не выдает никаких ошибок, но возвращает неправильный номер
function addFive(num) {
    return num + 5
}


//Функция перемещения терминала В этой игре герой движется слева направо. Игрок бросает кубик и два раза перемещается на количество клеток, указанное кубиком. Создайте функцию для терминальной игры, которая берет текущую позицию героя и бросок (1-6) и возвращает новую позицию.
function move(position, roll) {
    return position + roll + roll
}


//Натан любит кататься на велосипеде. Поскольку Натан знает, как важно избегать обезвоживания, он выпивает 0,5 литра воды за час езды на велосипеде. Вам дается время в часах, и вам нужно вернуть количество литров, которые выпьет Натан, округленное до наименьшего значения.
function litres(time) {
    return Math.floor(time * 0.5);
}


//Напишите функцию, которая вычисляет среднее значение чисел в заданном списке. Примечание. Пустые массивы должны возвращать 0.
function find_average(array) {
    // your code here
    if (array.length === 0) {
        return 0
    } else {
        let sum = array.reduce((acc, number) => {
            acc += number
            return acc
        })
        return sum / array.length
    }
}


//Учитывая непустой массив целых чисел, вернуть результат умножения значений вместе по порядку.
function grow(x) {
    return x.reduce((acc, el) => acc * el)
}


//Таракан – одно из самых быстрых насекомых. Напишите функцию, которая получает скорость в км/ч и возвращает ее в см/с с округлением в меньшую сторону до целого числа (= с точностью до пола). Например: 1,08 --> 30
// Примечание! Ввод представляет собой вещественное число (фактический тип зависит от языка) и >= 0. Результат должен быть целым числом.
function cockroachSpeed(s) {
    //Good Luck!
    return Math.floor(s / 0.036)
}


//Введение. Первое столетие охватывает период с 1 года по 100 год включительно, второе столетие — с 101 года по 200 год включительно и т. д. Задача: Учитывая год, верните столетие, в котором он находится.
// Примеры
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20
function century(year) {
    return Math.ceil(year/100);
}


//Напишите функцию с именем setAlarm, которая получает два параметра. Первый параметр, занятости, истинен, когда вы работаете, а второй параметр, отпуск, истинен, когда вы находитесь в отпуске. Функция должна возвращать true, если вы работаете, а не в отпуске (поскольку это обстоятельства, при которых вам нужно установить будильник). В противном случае он должен возвращать false.
function setAlarm(employed, vacation){
    if (employed===true && vacation===false) {
        return true
    } else {
        return false
    }
}


//Нам нужна простая функция, которая определяет, нужно ли множественное число или нет. Он должен принимать число и возвращать true, если с этим числом следует использовать множественное число, или false, если нет. Это было бы полезно при печати строки, например, 5 минут, 14 яблок или 1 солнце. Вам нужно только побеспокоиться о правилах английской грамматики для этой ката, где все, что не в единственном числе (одно из чего-то), является множественным числом (не одно из чего-то). Все значения будут положительными целыми числами, числами с плавающей запятой или нулем.
function plural(n) {
    return !(n === 1);
}