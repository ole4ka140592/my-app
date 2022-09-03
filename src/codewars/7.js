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
function testit(a,b){
    return a|b;
}


//Просто, учитывая строку слов, вернуть длину кратчайшего слова (слов). Строка никогда не будет пустой, и вам не нужно учитывать разные типы данных.
function findShort(s){
    let arr = s.split(" ").sort((a, b) => a.length - b.length);
    return arr[0].length
}


//Возьмите 2 строки s1 и s2, содержащие только буквы от a до z. Возвращает новую отсортированную строку, максимально длинную, содержащую различные буквы (каждая из которых взята только один раз) из s1 или s2.
function longest(s1, s2) {
    let a = (s1+s2).split('').sort()
    return [...new Set(a)].join('')
}


//Возвращает количество (количество) гласных в заданной строке. Мы будем рассматривать a, e, i, o, u как гласные для этой Ката (но не y). Входная строка будет состоять только из строчных букв и/или пробелов.
function getCount(str) {
    let vowelsCount = 0
    const vowels = ["a", "e", "i", "o", "u"]
    for(let char of str) {
        if(vowels.includes(char)) {
            vowelsCount++
        }
    }
    return vowelsCount;
}


//Завершите решение так, чтобы оно возвращало true, если первый переданный аргумент (строка) заканчивается вторым аргументом (тоже строкой). Примеры:
//solution('abc', 'bc') // returns true
//solution('abc', 'd') // returns false
function solution(str, ending){
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
    var rakedGarden= garden.split(' ').map(value=>value=='rock'?'rock':'gravel').join(' ')
    return rakedGarden;
}