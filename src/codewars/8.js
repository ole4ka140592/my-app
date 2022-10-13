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
    return Math.ceil(year / 100);
}


//Напишите функцию с именем setAlarm, которая получает два параметра. Первый параметр, занятости, истинен, когда вы работаете, а второй параметр, отпуск, истинен, когда вы находитесь в отпуске. Функция должна возвращать true, если вы работаете, а не в отпуске (поскольку это обстоятельства, при которых вам нужно установить будильник). В противном случае он должен возвращать false.
function setAlarm(employed, vacation) {
    if (employed === true && vacation === false) {
        return true
    } else {
        return false
    }
}


//Нам нужна простая функция, которая определяет, нужно ли множественное число или нет. Он должен принимать число и возвращать true, если с этим числом следует использовать множественное число, или false, если нет. Это было бы полезно при печати строки, например, 5 минут, 14 яблок или 1 солнце. Вам нужно только побеспокоиться о правилах английской грамматики для этой ката, где все, что не в единственном числе (одно из чего-то), является множественным числом (не одно из чего-то). Все значения будут положительными целыми числами, числами с плавающей запятой или нулем.
function plural(n) {
    return !(n === 1);
}


//Дженни написала функцию, которая возвращает приветствие для пользователя. Однако она влюблена в Джонни и хотела бы поприветствовать его немного по-другому. Она добавила к своей функции особый случай, но допустила ошибку. Вы можете помочь ей?
function greet(name) {
    if (name === "Johnny") {
        return "Hello, my love!";
    }
    return "Hello, " + name + "!";
}


//Ты в зоопарке... все сурикаты выглядят странно. Что-то пошло не так — кто-то поменял местами головы и хвосты! Спасите животных, переключив их обратно. Вам будет предоставлен массив, который будет иметь три значения (хвост, тело, голова). Ваша задача — переупорядочить массив так, чтобы животное располагалось в правильном порядке (голова, тело, хвост). То же самое касается всех других массивов/списков, которые вы получите в тестах: вы должны изменить позиции элементов с той же точной логикой.
function fixTheMeerkat(arr) {
    return arr.reverse()
}


// Напишите функцию, которая всегда возвращает 5. Звучит легко, верно? Просто имейте в виду, что вы не можете использовать ни один из следующих символов:
function unusualFive() {
    return "lllll".length
}


//Дан месяц как целое число от 1 до 12, вернитесь к тому, к какому кварталу года он принадлежит, как целое число. Например: 2-й месяц (февраль) является частью первого квартала; 6 месяц (июнь) входит во второй квартал; и месяц 11 (ноябрь) является частью четвертого квартала.
const quarterOf = (month) => {
    if (month < 4) {
        return 1
    }
    if (month < 7) {
        return 2
    }
    if (month < 10) {
        return 3
    }
    return 4
}


//На каждую хорошую идею ката приходится немало плохих! В этом ката вам нужно проверить предоставленный массив (x) на наличие хороших идей «хорошо» и плохих идей «плохо». Если есть одна или две хорошие идеи, верните «Опубликовать!», если их больше 2, верните «Чую серию!». Если нет хороших идей, как это часто бывает, верните «Fail!».
switch (x.filter(i => i === 'good').length) {
    case 0:
        return 'Fail!'
    case 1:
    case 2:
        return 'Publish!'
    default:
        return 'I smell a series!'
}


//Ваша функция принимает два аргумента:
// текущий возраст отца (лет)
// текущий возраст его сына (лет)
// Подсчитайте, сколько лет назад отец был вдвое старше сына (или через сколько лет он будет вдвое старше).
function twiceAsOld(dadYearsOld, sonYearsOld) {
    return Math.abs(dadYearsOld - 2 * sonYearsOld);
}


//После тяжелой четверти в офисе вы решаете немного отдохнуть в отпуске. Итак, вы забронируете рейс для себя и своей девушки и постараетесь оставить весь беспорядок позади. Вам понадобится арендованный автомобиль, чтобы передвигаться в отпуске. Менеджер по аренде автомобилей делает вам несколько хороших предложений. Каждый день аренды автомобиля стоит 40 долларов. Если вы арендуете автомобиль на 7 или более дней, вы получаете скидку в размере 50 долларов США. В качестве альтернативы, если вы арендуете автомобиль на 3 или более дней, вы получаете скидку в размере 20 долларов США. Напишите код, который выдает общую сумму за разные дни (d).
function rentalCarCost(d) {
    if (d < 3) {
        return d * 40
    }
    if (d < 7) {
        return d * 40 - 20
    }
    return d * 40 - 50
}


//Напишите функцию RemoveExclamationMarks, которая удаляет все восклицательные знаки из заданной строки.
function removeExclamationMarks(s) {
    return s.split('').filter(f => f !== "!").join('')
}


//Создайте функцию, которая отвечает на вопрос «Вы играете на банджо?». Если ваше имя начинается с буквы «R» или строчной «r», вы играете на банджо! Функция принимает имя в качестве единственного аргумента и возвращает одну из следующих строк:
function areYouPlayingBanjo(name) {
    // Implement me
    let first = name[0]
    if (first === 'R' || first === 'r') {
        return name + " plays banjo"
    }
    return name + " does not play banjo";
}


//Конец учебного года, судьбоносный момент твоего школьного отчета. Средние значения должны быть рассчитаны. Все ученики подходят к вам и умоляют вас подсчитать для них их средний балл. Легкий ! Вам просто нужно написать сценарий. Возвращает среднее значение данного массива, округленное до ближайшего целого числа. Массив никогда не будет пустым.
function getAverage(marks) {
    let total = 0;
    for (let i = 0; i < marks.length; i++) {
        total += marks[i];
    }
    return Math.floor(total / marks.length);
}


//Определите функцию, которая удаляет дубликаты из массива чисел и возвращает его в качестве результата. Порядок последовательности должен оставаться прежним.
function distinct(a) {
    return [...new Set(a)];
}


//Для заданной строки напишите функцию, которая возвращает строку со знаком вопроса ("?"), добавленным в конец, если только исходная строка не заканчивается знаком вопроса, и в этом случае возвращает исходную строку.
function ensureQuestion(s) {
    if (s[s.length - 1] === '?') {
        return s
    }
    return s + '?'
}


//Реализуйте функцию с именем generateRange(min, max, step), которая принимает три аргумента и генерирует диапазон целых чисел от минимума до максимума с шагом. Первое целое число — это минимальное значение, второе — максимальное значение диапазона, а третье — шаг. (мин < макс)
function generateRange(min, max, step) {
    let result = []
    for (let i = min; i <= max; i += step) {
        result.push(i)
    }
    return result
}


//Когда весной расцветают японские вишни, их называют «сакура», и ими очень восхищаются. Лепестки начинают опадать в конце апреля. Предположим, что скорость падения лепестка составляет 5 сантиметров в секунду (5 см/с), и лепестку требуется 80 секунд, чтобы достичь земли с определенной ветки. Напишите функцию, которая получает на вход скорость (в см/с) лепестка и возвращает время, за которое этот лепесток достигает земли с той же ветки.
// Заметки: Движение лепестка довольно сложное, поэтому в данном случае мы можем видеть скорость постоянной при его падении. Обратите внимание на типы данных. Если начальная скорость неположительна, возвращаемое значение должно быть 0
function sakuraFall(v) {
    if (v <= 0) {
        return 0
    }
    return 5 * 80 / v
}


//BA вашего стартапа сообщил маркетологам, что у вашего веб-сайта большая аудитория в Скандинавии и соседних странах. Маркетинг считает, что было бы здорово приветствовать посетителей сайта на их родном языке. К счастью, вы уже используете API, который определяет местоположение пользователя, так что это легкая победа. Задание. Подумайте о способе хранения языков в виде базы данных (например, объекта). Языки перечислены ниже, так что вы можете копировать и вставлять! Напишите функцию «приветствия», которая принимает параметр «язык» (всегда строка) и возвращает приветствие, если оно есть в вашей базе данных. По умолчанию должен быть английский, если языка нет в базе данных или в случае неверного ввода.
function greet(language) {
    const obj = [
        {
            english: 'Welcome',
            czech: 'Vitejte',
            danish: 'Velkomst',
            dutch: 'Welkom',
            estonian: 'Tere tulemast',
            finnish: 'Tervetuloa',
            flemish: 'Welgekomen',
            french: 'Bienvenue',
            german: 'Willkommen',
            irish: 'Failte',
            italian: 'Benvenuto',
            latvian: 'Gaidits',
            lithuanian: 'Laukiamas',
            polish: 'Witamy',
            spanish: 'Bienvenido',
            swedish: 'Valkommen',
            welsh: 'Croeso'
        }
    ]
    return obj[0][language] === undefined ? 'Welcome' : obj[0][language];
}


//Суммирование
// Напишите программу, которая находит сумму всех чисел от 1 до num. Число всегда будет положительным целым числом больше 0. Например: суммирование (2) -> 3 + 1 + 2
// суммирование (8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
var summation = function (num) {
    // Code here
    return num * (num + 1) / 2
}


//Создайте функцию с двумя аргументами, которая будет возвращать массив первых n кратных x.
// Предположим, что и заданное число, и количество подсчетов будут положительными числами больше 0.
// Возвращайте результаты в виде массива или списка (в зависимости от языка).
function countBy(x, n) {
    const arr = [];
    for (let i = 1; i <= n; i++)
        arr.push(x * i);
    return arr;
}


//Завершите функцию, которая принимает два аргумента и возвращает все числа, которые делятся на заданный делитель. Первый аргумент — это массив чисел, а второй — делитель.
function divisibleBy(numbers, divisor) {
    return numbers.filter((n) => n % divisor === 0);
}


//Завершите функцию квадратной суммы, чтобы она возводила в квадрат каждое переданное ей число, а затем суммировала результаты. Например, для [1, 2, 2] он должен вернуть 9, потому что 1^2 + 2^2 + 2^2 = 9.
function squareSum(numbers) {
    let sum = 0
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i] ** 2
    }
    return sum
}


//Функция голов Месси Месси – футболист, забивший голы в трех лигах:
// Ла Лига
// Копа дель Рей
// Чемпионы
// Завершите функцию, чтобы вернуть его общее количество голов во всех трех лигах. Примечание: ввод всегда будет действительным. Например:
function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    // code goes here
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals
}


//В этом простом задании вам дается число, и вы должны сделать его отрицательным. А может быть, число уже отрицательное? Примеры
// сделать отрицательный (1); // вернуть -1
// сделать отрицательный (-5); // вернуть -5
// сделать отрицательный (0); // вернуть 0
// сделать отрицательный (0,12); // возвращаем -0,12
// Заметки
// Число может быть уже отрицательным, и в этом случае никаких изменений не требуется.
// Ноль (0) не проверяется на наличие какого-либо конкретного знака. Отрицательные нули не имеют математического смысла.
function makeNegative(num) {
    // Code?
    if (num < 0) {
        return num
    }
    return -num
}


//Это бонусное время в большом городе! Жирные коты потирают лапы в предвкушении... но кто заработает больше всего денег? Создайте функцию, которая принимает два аргумента (зарплата, премия). Заработная плата будет целым числом, а бонус — логическим. Если премия верна, зарплата должна быть умножена на 10. Если премия ложна, толстяк не заработал достаточно денег и должен получать только свою заявленную зарплату. Возвращает общую цифру, которую получит человек, в виде строки с префиксом «£» (= «\ u00A3», JS, Go, Java, Scala и Julia), «$» (C#, C++, Ruby, Clojure, Elixir, PHP, Python, Haskell и Lua) или «¥» (Rust).
function bonusTime(salary, bonus) {
    if (bonus) {
        return '£' + (salary * 10)
    }
    return '£' + salary
}


//У всех животных праздник! Каждое животное приносит одно блюдо. Есть только одно правило: блюдо должно начинаться и заканчиваться теми же буквами, что и имя животного. Например, большая голубая цапля приносит чесночный наан, а синица приносит шоколадный торт. Напишите функцию feast, которая принимает имя животного и блюдо в качестве аргументов и возвращает true или false, чтобы указать, разрешено ли животному приносить блюдо на пир. Предположим, что зверь и блюдо всегда являются строками нижнего регистра и каждая из них состоит как минимум из двух букв. зверь и блюдо могут содержать дефисы и пробелы, но они не будут появляться ни в начале, ни в конце строки. Они не будут содержать цифр.
function feast(beast, dish) {
    return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1] ? true : false
}


//Вы можете напечатать свое имя на рекламном щите. Узнайте, сколько это будет стоить вам. Цена каждого персонажа по умолчанию составляет 30 фунтов стерлингов, но она может быть другой, если вам задано 2 параметра вместо 1. Вы не можете использовать оператор множителя "*". Если бы вас звали Чон-Хо Аристотелис, реклама стоила бы 600 фунтов стерлингов. 20 букв * 30 = 600 (пробел считается символом).
function billboard(name, price = 30) {
    let length = name.length
    return length * price
}

function billboard(name, price = 30) {
    let length = name.length
    let count = 0
    if (price) {
        for (let i = 0; i < length; i++) {
            count += price
        }
    } else {
        for (let i = 0; i < length; i++) {
            count += 30
        }
    }
    return count
}


//Я новичок в кодировании и теперь хочу получить сумму двух массивов... На самом деле сумму всех их элементов. Я буду признателен за вашу помощь. P.S. Каждый массив включает только целые числа. Выход - тоже число.
function arrayPlusArray(arr1, arr2) {
    let sum1=arr1.reduce((el,acc)=> el+acc)
    let sum2=arr2.reduce((el,acc)=> el+acc)
    return sum1+sum2
}


//Преобразовать число в перевернутый массив цифр
// Учитывая случайное неотрицательное число, вы должны вернуть цифры этого числа в массиве в обратном порядке. Пример (ввод => вывод):
function digitize(n) {
    return n.toString().split("").reverse().map(Number)
}


//Недавно я обнаружил несколько ошибок в своем коде Java/Type/Coffee-script и проследил проблему до глобальной функции isNaN, которую использовал. Я ожидал, что он будет более проницательным, но сейчас он возвращает true для undefined. Напишите функцию isReallyNaN, которая возвращает значение true, только если передается в аргументе, значение которого равно NaN, и возвращает значение false в противном случае. Допустимо любое решение!
const isReallyNaN = (val) => {
    if (val === undefined){
        return false
    }else if (typeof(val) === "object"){
        return false
    }else if (typeof(val) === "string"){
        return false
    }else if (typeof(val) === "function"){
        return false
    }else if (isNaN(val)){
        return true
    }else
        return false
};


//ИИ заразил текст персонажем!! Этот текст теперь полностью изменен на этот символ. Если текст или символ пусты, вернуть пустую строку. Никогда не будет случая, когда оба пусты, так как ничего не происходит!! Примечание. Символ представляет собой строку длиной 1 или пустую строку.
function contamination(text, char){
    return char.repeat(text.length
    )
}


//Учитывая набор чисел, верните добавку, обратную каждому из них. Каждое положительное становится отрицательным, а отрицательное становится положительным.
//invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
//invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
//invert([]) == []
//Можно предположить, что все значения являются целыми числами. Не изменяйте входной массив/список.
function invert(array) {
    return array.map(m=> m*(-1));
}


//Напишите функцию, которая всегда возвращает 5
// Звучит легко, верно? Просто имейте в виду, что вы не можете использовать ни один из следующих символов: 0123456789*+-/
// Удачи :)
function unusualFive() {
    return  true << true << true  | true;
}


//Вам будет дан массив a и значение x. Все, что вам нужно сделать, это проверить, содержит ли предоставленный массив значение. Массив может содержать числа или строки. Х может быть любым. Возвращает true, если массив содержит значение, и false, если нет.
function check(a, x) {
    return a.includes(x) ? true : false
}


//Учитывая массив целых чисел в виде строк и чисел, верните сумму значений массива, как если бы все они были числами. Верните ответ в виде числа.
function sumMix(x){
    return Number(x.reduce((a,b)=>Number(a)+Number(b)))
}


//Напишите функцию, которая принимает массив чисел и возвращает сумму чисел. Числа могут быть отрицательными или нецелыми. Если массив не содержит чисел, вы должны вернуть 0.
// Примеры
// Ввод: [1, 5.2, 4, 0, -1]
// Выход: 9,2
// Вход: []
// Выход: 0
// Ввод: [-2,398]
// Выход: -2,398
// Предположения
// Вы можете считать, что вам даны только цифры.
// Вы не можете предположить размер массива.
// Вы можете предположить, что вы получили массив, и если массив пуст, верните 0.
// Что мы тестируем
// Мы тестируем базовые циклы и математические операции. Это для новичков, которые только изучают циклы и математические операции.
// Продвинутым пользователям это может показаться очень простым, и они могут легко записать это в одну строку.
function sum (numbers) {
    "use strict";
    return numbers.reduce((a, b) => a + b, 0);
}


//Создайте функцию, которая выдает персонализированное приветствие. Эта функция принимает два параметра: имя и владелец. Используйте условные выражения, чтобы вернуть правильное сообщение: возврат дела
// имя равно владельцу «Привет, босс»
// иначе «Привет, гость»
function greet (name, owner) {
    if (name===owner) {
        return 'Hello boss'
    } else {
        return 'Hello guest'
    }
}


//Создайте функцию, которая проверяет, делится ли число n на два числа x И y. Все входные данные являются положительными, ненулевыми числами.
//Examples:
// 1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
// 2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
// 3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
// 4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5
function isDivisible(n, x, y) {
    if (n%x==0 && n%y==0) {
        return true
    } else {
        return false
    }
}


//Напишите метод, который будет получать массив целых чисел в качестве параметра и будет обрабатывать каждое число из этого массива. Вернуть новый массив с обработкой каждого числа входного массива следующим образом: Если число имеет целый квадратный корень, возьмите его, иначе возведите число в квадрат.
//Example
// [4,3,9,7,2,1] -> [2,9,3,49,4,1]
// Notes
// The input array will always contain only positive numbers, and will never be empty or null.
function squareOrSquareRoot(array) {
    return array.map(m=> (Math.sqrt(m))% 1 == 0 ? Math.sqrt(m): m**2)
}


//Функция не возвращает правильные значения. Вы можете понять, почему? Пример (ввод --> вывод):
//3 --> "Earth"
function getPlanetName(id){
    let name=id;
    switch(id){
        case 1:
            name = 'Mercury'
            return name
        case 2:
            name = 'Venus'
            return name
        case 3:
            name = 'Earth'
            return name
        case 4:
            name = 'Mars'
            return name
        case 5:
            name = 'Jupiter'
            return name
        case 6:
            name = 'Saturn'
            return name
        case 7:
            name = 'Uranus'
            return name
        case 8:
            name = 'Neptune'
            return name
    }
    return name;
}


//Ваши измученные коллеги ищут у вас решение взять этот искаженный текст и удалить все числа. Ваша программа примет строку и удалит все числовые символы и вернет строку с пробелами и специальными символами ~#$%^&!@*():;"'.,? без изменений.
function stringClean(s){
    return s.replace(/[0-9]/g, '')
}


//Вы спрашиваете маленькую девочку: «Сколько тебе лет?» Она всегда говорит «x лет», где x — случайное число от 0 до 9. Напишите программу, которая возвращает возраст девочки (0-9) в виде целого числа. Предположим, что тестовая входная строка всегда является допустимой строкой. Например, тестовый ввод может быть «1 год» или «5 лет». Первым символом в строке всегда является число.
function getAge(inputString){
    return +inputString[0]
}