//Обычно, когда вы что-то покупаете, вас спрашивают, верны ли номер вашей кредитной карты, номер телефона или ответ на ваш самый секретный вопрос. Однако, поскольку кто-то может заглянуть вам через плечо, вы не хотите, чтобы это отображалось на вашем экране. Вместо этого мы маскируем его. Ваша задача — написать функцию maskify, которая заменяет все символы, кроме последних четырех, на «#».
function maskify(cc) {
    if (cc.length <= 4) {
        return cc
    }
    if (cc.length > 4) {
        let result = ''
        let last = cc.substr(-4)
        for (let i = 0; i < cc.length - 4; i++) {
            result += '#'
        }
        return result + last
    }
}


//Нет истории Нет описания Только подумав и проверив Посмотрите на результат теста, угадайте код!
// Серии:
// 01: А и Б?
// 02: неполная строка
// 03: правда или ложь
// 04: Что-то с большой буквы
// 05: Уникальный или не уникальный
// 06: Пространственно-временной индекс
// 07: Математика начальной школы
// 08: Математика средней школы
// 09: Из небытия В ничто
// 10: Не идеально? Выбрасывать!
// 11: Добро пожаловать на автобус
// 12: Придет счастливый день
// 13: Сумма 15 (Хету Луослиу)
// 14: Туманность или Вихрь
// 15: Звезда спорта
// 16: Рэп-концерт фальцетто
// 17: Ветер шепчет
// 18: Симулятор мобильного телефона
// 19: Присоединяйтесь, но не присоединяйтесь
// 20: Я ненавижу больших и маленьких
// 21: Я хочу стать диабетиком ;-)
// 22: Сколько блоков?
// 23: Оператор скрыт в строке
// 24: Магия подстроки
// 25: Сообщить о чем-то
// 26: Удержание и сброс I
// 27: Удержание и отбраковка II
// 28: Сколько "слов"?
// 29: Град и водопад
// 30: Любовь навсегда
// 31: Цифровой бассейн
// 32: Соревнования по стрельбе из лука
// 33: Ремонт пергамента
// 34: Кто ты?
// 35: Безопасное положение
// Специальная рекомендация
// Еще одна серия, новаторская и интересная, средней сложности. Те, кто любит бросать вызов, могут попробовать эти ката: Играть в тетрис: формировать анастомоз
// Играть во FlappyBird: вперед смело
function testit(a, b) {
    return a | b;
}


//Просто, учитывая строку слов, вернуть длину кратчайшего слова (слов). Строка никогда не будет пустой, и вам не нужно учитывать разные типы данных.
function findShort(s) {
    let arr = s.split(" ").sort((a, b) => a.length - b.length);
    return arr[0].length
}


//Возьмите 2 строки s1 и s2, содержащие только буквы от a до z. Возвращает новую отсортированную строку, максимально длинную, содержащую различные буквы (каждая из которых взята только один раз) из s1 или s2.
function longest(s1, s2) {
    let a = (s1 + s2).split('').sort()
    return [...new Set(a)].join('')
}


//Возвращает количество (количество) гласных в заданной строке. Мы будем рассматривать a, e, i, o, u как гласные для этой Ката (но не y). Входная строка будет состоять только из строчных букв и/или пробелов.
function getCount(str) {
    let vowelsCount = 0
    const vowels = ["a", "e", "i", "o", "u"]
    for (let char of str) {
        if (vowels.includes(char)) {
            vowelsCount++
        }
    }
    return vowelsCount;
}


//Завершите решение так, чтобы оно возвращало true, если первый переданный аргумент (строка) заканчивается вторым аргументом (тоже строкой). Примеры:
//solution('abc', 'bc') // returns true
//solution('abc', 'd') // returns false
function solution(str, ending) {
    return str.endsWith(ending)
}


//Помогите Сузуки разгрести его огород! В монастыре есть великолепный дзен-сад из белого гравия и камней, который каждый день усердно расчищают монахи. Suzuki, обладающий острым зрением, всегда высматривает все, что может проникнуть в сад, что необходимо удалить во время ежедневного сгребания, например, насекомых или мох. Вам будет предоставлена -строка, представляющая сад, например: сад = 'гравий гравий гравий гравий гравий гравий гравий гравий каменный слизняк муравей гравий гравий улитка гравий гравий гравий гравий гравий гравий гравий гравий слизень гравий муравей гравий гравий гравий гравий каменный слизняк гравий гравий гравий гравий гравий улитка гравий гравий камень гравий улитка гравий слизняк гравий паук гравий гравий гравий гравий гравий гравий гравий мох гравий гравий гравий улитка гравий гравий гравий муравьиный гравий гравий мох гравий гравий гравий гравий улитка гравий гравий гравий гравий пуля гравий камень гравий гравий камень гравий гравий гравий гравий улитка гравий камень гравий гравий гравий гравий гравий гравий паук гравий каменный гравий гравий'
// Выгребите все предметы, не являющиеся камнями или гравием, и замените их гравием таким образом, чтобы://
// сад = 'паук-слизень каменный гравий гравий гравий гравий гравий гравий гравий гравий'
// Возвращает строку, в которой все элементы, кроме камня или гравия, заменены гравием://
// сад = 'гравий гравий камень гравий гравий гравий гравий гравий гравий гравий гравий'
// Пожалуйста, попробуйте и другие Ката из этой серии.
// Помогите Сузуки сосчитать овощи...
// Помогите Судзуки купить тофу!
// Помоги Сузуки упаковать корзину с углем!
// Судзуки нужна помощь, чтобы собрать своих учеников!
// Сколько ступеней поднимется Сузуки за 20 лет?
function rakeGarden(garden) {
    var rakedGarden = garden.split(' ').map(value => value == 'rock' ? 'rock' : 'gravel').join(' ')
    return rakedGarden;
}


//Мой дедушка всегда предсказывал, как стареют люди, и прямо перед смертью раскрыл свой секрет! В честь памяти моего дедушки мы напишем функцию по его формуле! Составьте список возрастов, когда каждый из ваших прадедов умер. Умножьте каждое число само на себя. Добавьте их все вместе. Возьмите квадратный корень из результата.
// Разделить на два.
// Пример PredictAge(65, 60, 75, 55, 60, 63, 64, 45) === 86
// Примечание: результат следует округлить до ближайшего целого числа в меньшую сторону. Некоторые случайные тесты могут не пройти из-за ошибки в реализации JavaScript. Просто отправьте повторно, если это произойдет с вами
function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
    const ages = [age1, age2, age3, age4, age5, age6, age7, age8];
    const mulSum = ages.reduce((a, x) => a + x ** 2, 0);
    return Math.floor(mulSum ** 0.5 / 2);
}


//Вам будет предоставлен массив и предельное значение. Вы должны убедиться, что все значения в массиве ниже или равны предельному значению. Если они есть, верните true. В противном случае верните ложь.
function smallEnough(a, limit) {
    a.sort((a, b) => b - a)
    let max = a[0]
    if (max <= limit) {
        return true
    } else {
        return false
    }
}


//Изограмма — это слово, в котором нет повторяющихся букв, последовательных или непоследовательных. Реализуйте функцию, определяющую, является ли строка, содержащая только буквы, изограммой. Предположим, что пустая строка является изограммой. Игнорировать регистр букв. Пример: (Ввод --> Вывод) "Дерматоглифика" --> правда "аба" --> ложь "moOse" --> false (игнорировать регистр букв)
function isIsogram(str) {
    var i, j;
    str = str.toLowerCase();
    for (i = 0; i < str.length; ++i) {
        for (j = i + 1; j < str.length; ++j) {
            if (str[i] === str[j]) {
                return false;
            }
        }
    }
    return true;
}


//Ваши коллеги были достаточно любезны (?), чтобы купить вам подарок на день рождения. Несмотря на то, что это ваш день рождения, а не их, они решили сыграть с ним в передачу посылки, чтобы у всех были равные шансы на победу. Подарков много, один получишь, но не все хороши... Один даже взрывается и засыпает тебя землей... странный офис. В качестве компенсации за этот подарок — собака! Счастливые дни! (не покупайте собак в подарок, а если и покупаете, то никогда их не заворачивайте). В зависимости от количества проходов в игре (y) и подарка, который вы разворачиваете (x), вернитесь следующим образом:
// x == goodpresent --> вернуть x с количеством проходов, добавленных к каждому charCode (перейти к charCode, добавить y к каждому, повернуть назад)
// х == дерьмо || x == пусто --> возвращаемая строка, отсортированная по алфавиту
// x == bang --> возвращаемая строка преобразуется в коды символов, каждый код уменьшается на количество проходов и суммируется до одной цифры
// x == badpresent --> return 'Возьмите это обратно!'
// x == собака, вернуть 'упасть в обморок от волнения y раз' (где y - значение, заданное для y).
function present(x, y) {
    if (x === 'badpresent') return 'Take this back!'
    if (x === 'dog') return `pass out from excitement ${y} times`
    if (x === 'crap') return 'acpr'
    if (x === 'empty') return 'empty'
    if (x === 'bang') return x.split('').reduce((a, b) => a + (b.charCodeAt() - y), 0)
    return x.split('').map(v => String.fromCharCode(v.charCodeAt() + y)).join('')
}


//Определите общее количество цифр в целом числе (n>=0), заданном в качестве входных данных для функции. Например, 9 — это одна цифра, 66 — 2 цифры, а 128685 — 6 цифр. Будьте осторожны, чтобы избежать переполнения/недостаточного заполнения. Все входы будут действительными.
function digits(n) {
    return ('' + n).length
}


//Завершите решение так, чтобы оно перевернуло переданную в него строку. 'мир' => 'длроу' 'слово' => 'дроу'
function solution(str) {
    return str.split("").reverse().join("")
}


//Напишите функцию reverseList, которая просто переворачивает списки.
function reverseList(arr) {
    return arr.reverse();
}


//Измените функцию spacify, чтобы она возвращала заданную строку с пробелами, вставленными между каждым символом. spacify("привет мир") // возвращает "привет мир"
function spacify(str) {
    return str.split('').join(' ')
}


//Возможно, вы знаете несколько довольно больших идеальных квадратов. Но как насчет СЛЕДУЮЩЕГО? Завершите метод findNextSquare, который находит следующий целочисленный идеальный квадрат после квадрата, переданного в качестве параметра. Напомним, что целочисленный совершенный квадрат — это целое число n, такое что sqrt(n) также является целым числом. Если параметр сам по себе не является идеальным квадратом, то следует вернуть -1. Вы можете предположить, что параметр неотрицательный.
function findNextSquare(sq) {
    var root1;
    var nextroot;
    if (Math.sqrt(sq) % 1 === 0) {
        root1 = Math.sqrt(sq)
        nextroot = root1 + 1
    } else {
        return -1;
    }
    return nextroot * nextroot;
}


//Напишите функцию, которая принимает строку и делает из нее аббревиатуру. Правило составления аббревиатуры в этой ката: разделить строку на слова пробелом взять каждую первую букву слова в заданной строке прописные это присоединиться к ним вместе Например: Кодовые войны -> C, w -> C W -> CW Примечание. В заданной строке будет не менее двух слов!
function toAcronym(inp) {
    return inp.split(' ').map(m => m[0].toUpperCase()).join('')
}


//Добро пожаловать. В этой ката вас просят возвести в квадрат каждую цифру числа и соединить их. Например, если мы пропустим через функцию 9119, получится 811181, потому что 92 — это 81, а 12 — это 1. Примечание. Функция принимает целое число и возвращает целое число.
function squareDigits(num) {
    return +(num.toString().split("").map(m => m * m).join(""))
}


//Напишите программу, которая определяет, содержит ли строка только уникальные символы. Возвращает true, если это так, и false в противном случае. Строка может содержать любой из 128 символов ASCII. Символы чувствительны к регистру, например. 'a' и 'A' считаются разными символами.
function hasUniqueChars(str) {
    return new Set(str).size === str.length
}


//Завершите функцию/метод, чтобы он возвращал URL-адрес с чем-либо после удаления привязки (#) Examples
//"www.codewars.com#about" --> "www.codewars.com"
//"www.codewars.com?page=1" -->"www.codewars.com?page=1
function removeUrlAnchor(url) {
    if (arguments.length !== 1) {
        throw new Error("expected exactly one argument");
    }
    if (typeof url !== "string") {
        throw new TypeError("expect first argument to be a string");
    }
    if (url.length === 0) {
        return "";
    }
    const [character, ...remainingUrl] = url;
    if (character === "#") {
        return "";
    }
    return character + removeUrlAnchor(remainingUrl.join(""));
}


//Ваша задача — написать функцию factorial
function factorial(n) {
    return n ? n * factorial(n - 1) : 1
}


//В математике факториал неотрицательного целого числа n, обозначаемый n!, представляет собой произведение всех положительных целых чисел, меньших или равных n. Например: 5! = 5 * 4 * 3 * 2 * 1 = 120. По соглашению значение 0! 1. Напишите функцию для вычисления факториала для заданных входных данных. Если входное значение меньше 0 или больше 12, генерируется исключение типа ArgumentOutOfRangeException (C#), IllegalArgumentException (Java) или RangeException (PHP), либо генерируется ошибка RangeError (JavaScript) или ValueError (Python), либо возвращается -1 (C). Подробнее о факториале можно узнать здесь.
function factorial(n) {
    if (n < 0 || n > 12) {
        throw new RangeError
    }
    return n ? n * factorial(n - 1) : 1
}