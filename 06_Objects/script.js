// 1.Составьте алгоритм, который считает, сколько времени вам нужно на
// приготовление яиц.
//     Правила:
// -Яйца варить 5 минут
// -Вместительность емкости не более 5 яиц одновременно
function getCookingTime(eggsAmount) {
    if (eggsAmount < 1 || typeof eggsAmount === 'string') {
        return false
    }
    let result = 5;
    let times = Math.ceil(eggsAmount / 5);
    if (eggsAmount.length <= 5) {
        return result;
    } else {
        return times * 5;
    }
}
// console.log(getCookingTime(0));
// console.log(getCookingTime(1));
// console.log(getCookingTime(5));
// console.log(getCookingTime(9));

// 2.Получая массив чисел. Все они либо нечетные, либо четные, кроме одного. Тебе нужно его найти.
function  getNumber(array) {
    let count = 0;
    let even = [];
    let odd = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) even.push(array[i])
        else odd.push(array[i])
        count++
        if (even.length !== 0 && odd.length !== 0 && even.length !== odd.length) {
            return even.length > odd.length ? odd[0] : even[0]
        }
    }
}
// console.log(getNumber([1, 5, 7, 9, 15, 19, 777, -15, -11, 4, 9, 23, -17])) //returns 4
// console.log(getNumber([0, 2, 8, -4, 0, -122, 13, -4, 28, 12])) //returns 13

// 3.Принимая массив объектов и случайную строку. У объектов может
// быть ключ: «title» с разными значениями. Создайте алгоритм, который
// фильтрует массив, заданный как первый параметр, и возвращает массив
// объектов, которые содержат в своих заголовках заданную строку в
// качестве второго параметра (без учета регистра).
function findTitle(array, string) {
    let result = [];
    if (!Array.isArray(array)) {
        return false
    }
    for (let i = 0; i < array.length; i++) {
        if (!array[i].title) {
            continue;
        }
        if (array[i].title.toLowerCase().includes(string)) {
            result.push(array[i]);
        }
    }
    return result;
}
let arr = [{
    title: 'Some title1'
}, {
    title: 'I like JS'
}, {
    user: 'This obj does not have key title js'
}, {
    title: 'Js - is the best!'
}];
// console.log(findTitle(arr, 'js'))  // return [ { title: 'I like JS'}, { title: 'Js - is the best!' } ]

// 4.Принимая строку, ваша функция должна вернуть обьект, в котором
// ключи – символы строки, значение – количество повторений символов в
// строке
function countCharacters(string) {

    if(typeof string !== 'string') {
        return false;
    }
    let result = string.split('');
    const obj = {};
    result.forEach(function(item) {

        if( item === ' ' || item === '!'){
            return;
        }

        if(obj[item]) {
            obj[item] += 1;
        } else {
            obj[item] = 1;
        }
    });

    return obj;
}
// console.log(countCharacters('sparrow')); // should return {s: 1, p: 1, a: 1, r: 2, o: 1, w: 1}
// console.log(countCharacters('aabcddeffge')) // should return {a: 2, b: 1, c: 1, d: 2, e: 2, f: 2, g: 1}
// console.log(countCharacters('a 2ab !d')) // should return {a: 2, b:1, d:1, 2:1}

// 5. Принимая число, ваша функция должна найти следующий положительный палиндром большего размера.
// Палиндром - это слово, фраза, число или другая последовательность символов, которая читается так же,
// как вперед и назад, например, «мадам».
function getNextPalindrome(number) {
    if (typeof number !== 'number') {
        return false;
    }
    function isPalindrome(num) {
        let numToString = num.toString()
        let reversNum = ''
        for (let i = numToString.length - 1; i >= 0; i--) {
            reversNum += numToString[i]
        }
        return numToString === reversNum
    }
    for (let i = number + 1; i < Infinity; i++) {
        if (isPalindrome(i) && i > 10) {
            return i
        }
    }
}
// console.log(getNextPalindrome(7)) // returns 11
// console.log(getNextPalindrome(99)) // returns 101
// console.log(getNextPalindrome(132)) // returns 141
// console.log(getNextPalindrome(888)) // returns 898
// console.log(getNextPalindrome(999)) // returns 1001
// console.log(getNextPalindrome('[1,2,3]')) // returns 1001
