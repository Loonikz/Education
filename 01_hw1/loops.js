// 1. Найти сумму четных чисел и их количество в диапазоне от 1 до 99
function getSumNum(){
    let result = {
        sum: 0,
        counter: 0,
    }
    for(let i = 1; i <= 99; i++){
        if(i % 2 === 0){
            result.sum = result.sum + i;
            result.counter = result.counter + 1;
        }
    }
    return result
}
// console.log(getSumNum())

// 2. Проверить простое ли число? (число называется простым, если оно делится только само на себя и на 1)
function checkNum(i) {
    let num = i
    for (let i = 2; i < num; i++) {
        if( num % i === 0) {
            return false
        }
    }
    return i > 1
}
// console.log(checkNum(7))
// console.log(checkNum(6))

// 3. Найти корень натурального числа с точностью до целого
// (рассмотреть вариант последовательного подбора и метод бинарного поиска)
// Вариант последовательного подбора
function getSqrtNum(num){
    let i = 1
    while (i * i <= num){
        i++
    }
    return i - 1
}
// console.log(getSqrtNum(25))
// Вариант бинарного поиска
function getSqrtNum1(num) {
    let a = num
    if (typeof num !== 'number') {
        return 'Введите число'
    }
    while (num * num > a) {
        num = num / 2
    }
    while (num * num < a) {
        num++
    }
    return Math.floor(num)
}
// console.log(getSqrtNum1(16))

// 4. Вычислить факториал числа n. n! = 1*2*…*n-1*n;!
function factorial(n) {
    let result = 1
    if (typeof n !== 'number') {
        return 'Введите число'
    }
    while(n){
        result = result * n--
    }
    return result
}
// console.log(factorial(5))

// 5. Посчитать сумму цифр заданного числа
function sumOfNum(num){
    let result = 0
    if (typeof num !== 'number') {
        return 'Введите число'
    }
    while(Math.floor(num) > 0){
        result = result + num % 10
        num = num / 10
    }
    return Math.floor(result)
}
// console.log(sumOfNum(345))

// 6. Вывести число, которое является зеркальным отображением последовательности цифр заданного числа,
// например, задано число 123, вывести 321.
function getMirror(num) {
    let result = 0
    let digit = 0
    if (typeof num !== 'number') {
        return 'Введите число'
    }
    while(Math.floor(num) > 0) {
        digit = num % 10
        result = (result * 10) + digit
        num = num / 10|0
    }
    return Math.floor(result)
}
// console.log(getMirror(45857484))

module.exports = {
    getSumNum,
    checkNum,
    getSqrtNum,
    getSqrtNum1,
    factorial,
    sumOfNum,
    getMirror
}