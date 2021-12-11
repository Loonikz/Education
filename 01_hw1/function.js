// 1. Получить строковое название дня недели по номеру дня.
function  day(num) {
    let day = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']
    if (typeof num !== 'number')
        return 'Введите число от 1 до 7'
    if (num < 1 || num > 7)
        return 'Введите число от 1 до 7'
    return day[num - 1]
}
// console.log(day(50))
// console.log(day(5))
// 2. Вводим число (0-999), получаем строку с прописью числа.
function numToString(num){
    let str = "";
    let hundreds = ["", "сто", "двести", "триста", "четыреста",
        "пятьсот", "шестьсот", "семьсот", "восемьсот", "девятьсот"];
    let dozens = ["", "десять", "двадцать", "тридцать", "сорок",
        "пятьдесят", "шестьдесят", "семьдесят", "восемьдесят", "девяносто"];
    let elevenToNineteen = ["", "одиннадцать", "двенадцать", "тринадцать",
        "четырнадцать", "пятнадцать", "шестнадцать", "семнадцать", "восемнадцать", "девятнадцать"];
    let units = ["", "один", "два", "три", "четыре", "пять", "шесть", "семь", "восемь", "девять"];
    let strZero = "ноль";

    if(num >= 0 && num <= 999){
        //сотни
        let indexOfhundreds = Math.floor(num/100);
        str += hundreds[indexOfhundreds] + " ";

        num = num % 100;
        if (num > 10 && num < 20){
            // от 11 до 19 (включительно)
            let indexElevenToNineteen = num%10;
            str += elevenToNineteen[indexElevenToNineteen] + " ";
        }
        else if(num >= 20 || num === 10){
            // десятки
            let indexDozens = Math.floor(num/10);
            str += dozens[indexDozens] + " ";
            if(num / 10 < 1){ //если есть 0 => 105
                let indexUnits = num%10;
                str += units[indexUnits];
            }
            //единицы
            let indexUnits = num%10;
            str += units[indexUnits];
        }
        else if (num > 0 && num < 10){
            str +=units[num];
        }
        else if(num%10 === 0){
            str += strZero;
        }
        return str;
    }
    return "Incorrect input data";
}
// console.log(numToString(899));
// 3. Вводим строку, которая содержит число, написанное прописью (0-999). Получить само число
function pseudoSplit(string, divideSign = '') {
    let result = []
    let word = ''
    if (typeof string !== 'string' || typeof divideSign !== 'string') return 'Введите строку'
    for (let i = 0; i < string.length; i++) {
        if (string[i] === divideSign) {
            result.push(word)
            word = ''
        }
        else word += string[i]
    }
    result.push(word)
    return result
}

function stringToNum(word) {
    let nums = {
        'один': 1, 'два': 2, 'три': 3, 'четыре': 4, 'пять': 5, 'шесть': 6,
        'семь': 7, 'восемь': 8, 'девять': 9, 'десять': 10, 'одиннадцать': 11,
        'двенадцать': 12, 'тринадцать': 13, 'четырнадцать': 14, 'пятнадцать': 15,
        'шестнадцать': 16, 'семнадцать': 17, 'восемнадцать': 18, 'девятнадцать': 19, 'двадцать': 20, 'тридцать': 30, 'сорок': 40, 'пятьдесят': 50,
        'шестьдесят': 60, 'семьдесят': 70, 'восемьдесят': 80, 'девяносто': 90, '': '', 'сто': 100, 'двести': 200, 'триста': 300, 'четыреста': 400,
        'пятьсот': 500, 'шестьсот': 600, 'семьсот': 700, 'восемьсот': 800, 'девятьсот': 900
    }
    if (typeof word !== 'string') {
        return 'Введите строку'
    }
    let wordArr = pseudoSplit(word.toLowerCase(), ' ')
    let result = 0
    for (let i = 0; i < wordArr.length; i++) {
        for (let num in nums) {
            if (num === wordArr[i]) result += nums[num]
        }
    }
    return result
}
console.log(stringToNum('Пятьсот девяносто четыре'))

// 4. Найти расстояние между двумя точками в двумерном декартовом пространстве.
function getDistance(x1, x2, y1, y2) {
    if (
        typeof x1 !== "number" ||
        typeof x2 !== "number" ||
        typeof y1 !== "number" ||
        typeof y2 !== "number"
    ) return 'Аргументы должны быть числами'
    return Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2)).toFixed(2)
}

// console.log(getDistance(1, 6, 1, 1))

module.exports = {
    day,
    numToString,
    stringToNum,
    getDistance,
}