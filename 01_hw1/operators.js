// 1. Если а – четное посчитать а*б, иначе а+б
function sumOrMultiply(num1, num2) {
    let result = 0
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        return 'Введите число'
    }
    if(num1 % 2 === 0) {
        result = num1 * num2
    } else {
        result = num1 + num2
    }
    return result
}
// console.log(sumOrMultiply(4, 7))
// console.log(sumOrMultiply(9, 8))

// 2. Определить какой четверти принадлежит точка с координатами (х,у)
const quarter = function (x, y) {
    if (x > 0 && y > 0) {
        return `I`
    }
    if (x < 0 && y > 0) {
        return `II`
    }
    if (x < 0 && y < 0) {
        return `III`
    }
    if (x > 0 && y < 0) {
        return `IV`
    }
    if (x === 0 && y === 0) {
        return `Точка - начало координат`
    }
    return `Точка лежит на оси`
}
// console.log(quarter (9, 2))
// console.log(quarter (9, -2))
// console.log(quarter (-9, 2))
// console.log(quarter (-9, -2))
// console.log(quarter (0, 0))
// console.log(quarter (5, 0))

// 3. Найти суммы только положительных из трех чисел
function getSum(array) {
    if (Array.isArray(array) !== true) {
        return 'Введите массив'
    }
    let result = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            result = result + array[i]
        }
    }
    return result
}
// console.log(getSum([-7, 5, -1, 0, 6]))
// console.log(getSum([2,8]))

// 4. Посчитать выражение макс(а*б*с, а+б+с)+3
function getSumMax(a, b, c) {
    if(typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number'){
        return 'Введите число'
    }
    let sum = a + b + c
    let multi = a * b * c
    let max = 0
    if(multi > sum){
        max = multi + 3
        return "max: " + max
    } else {
        max = sum + 3
    }
    return "max: " + max
}
// console.log(getSumMax(1, 2, 1))

// 5. Написать программу определения оценки студента по его рейтингу, на основе следующих правил
function getRate(rate) {
    if(typeof rate !== 'number'){
        return 'Введите число';
    }
    if (rate >= 0 && rate <= 19)
        return 'F'
    else if (rate >= 20 && rate <= 39)
        return 'E'
    else if (rate >= 40 && rate <= 59)
        return 'D'
    else if (rate >= 60 && rate <= 74)
        return 'C'
    else if (rate >= 75 && rate <= 89)
        return 'B'
    else if (rate >= 90 && rate <= 100)
        return 'A'
    else return 'Введите число от 0 до 100'
}
// console.log(getRate(5))
// console.log(getRate(500))

module.exports = {
    sumOrMultiply,
    quarter,
    getSum,
    getSumMax,
    getRate
}