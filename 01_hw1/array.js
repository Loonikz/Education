// 1. Найти минимальный элемент массива
function arrayMin(arr){
    let min = arr[0]
    if(Array.isArray(arr) !== true) {
        return "Введите массив"
    }
        for (let i = 0; i < arr.length; i++) {
            if(min > arr[i]) {
                min = arr[i]
            }
        }
    return min
}

// console.log(arrayMin([10, 4, 2, 1, -4, 3]))
// console.log(arrayMin(10, 4, 2, 1, -4, 3))
// 2. Найти максимальный элемент массива

function arrayMax(arr){
    let max = arr[0]
    if(Array.isArray(arr) !== true) {
        return "Введите массив"
    }
    for (let i = 0; i < arr.length; i++) {
        if(max < arr[i]) {
            max = arr[i]
        }
    }
    return max
}

// console.log(arrayMax([10, 4, 2, 1, -4, 3]))
// console.log(arrayMax(10, 4, 2, 1, -4, 3))

// 3. Найти индекс минимального элемента массива
function arrayMinIndex(arr){
    let index = 0
    let indexMin = arr[0]
    if(Array.isArray(arr) !== true) {
        return "Введите массив"
    }
    for (let i = 0; i < arr.length; i++) {
        if(indexMin > arr[i]) {
            indexMin = arr[i]
            index = i
        }
    }
    return index
}

// console.log(arrayMinIndex([10, -10, -6, 22, 32]))

// 4. Найти индекс максимального элемента массива
function arrayMaxIndex(arr){
    let index = 0
    let indexMax = arr[0]
    if(Array.isArray(arr) !== true) {
        return "Введите массив"
    }
    for (let i = 0; i < arr.length; i++) {
        if(indexMax < arr[i]) {
            indexMax = arr[i]
            index = i
        }
    }
    return index
}

// console.log(arrayMaxIndex([100, -10, -6, 22, 32]))

// 5. Посчитать сумму элементов массива с нечетными индексами
function arraySum(arr){
    let result = 0
    if(Array.isArray(arr) !== true) {
        return "Введите массив"
    }
    for (let i = 1; i < arr.length; i++) {
        result = result + arr[i]
        i++
    }
    return result
}

// console.log(arraySum([5, 7, 13, 4, -3, -6]))

// 6. Сделать реверс массива (массив в обратном направлении)
function arrayRevers(arr){
    if(Array.isArray(arr) !== true) {
        return "Введите массив"
    }
    for (let i = 0; i < (arr.length / 2 - arr.length % 2); i++) {
        arr = swap(arr, i, arr.length - i - 1)
    }
    return arr
}
// console.log(arrayRevers([5, 7, 13, 4, -3, -6]))

// 7. Посчитать количество нечетных элементов массива
function arrayOdds(arr){
    let result = 0
    if(Array.isArray(arr) !== true) {
        return "Введите массив"
    }
    for (let i = 0; i < arr.length; i++){
        if( arr[i] % 2 !== 0 ){
            result = result + 1
        }
    }
    return result
}
// console.log(arrayOdds([5, 7, 13, 4, -3, -6]))

// 8. Поменять местами первую и вторую половину массива, например, для массива 1 2 3  4, результат 3 4 1 2
function arraySwap(arr){
    if(Array.isArray(arr) !== true) {
        return "Введите массив"
    }
    let firstPartLen = Math.floor(arr.length / 2),
        secondPartLen = arr.length - firstPartLen,
        newArr = []
    for (let i = 0; i < secondPartLen; i++) {
        newArr[i] = arr[i + firstPartLen]
    }
    for (let i = 0; i < firstPartLen; i++) {
        newArr[i + secondPartLen] = arr[i]
    }
    return newArr
}
// console.log(arraySwap([5, 7, 13, 4, -3, -6]))

//9. Отсортировать массив (пузырьком (Bubble), выбором (Select), вставками (Insert))
// Bubble:
function bubbleSort(arr) {
    if(Array.isArray(arr) !== true) {
        return "Введите массив"
    }
    for (let i = 0, endI = arr.length - 1; i < endI; i++) {
        let wasSwap = false
        for (let j = 0, endJ = endI - i; j < endJ; j++) {
            if (arr[j] > arr[j + 1]) {
                let swap = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = swap
                wasSwap = true
            }
        }
        if (!wasSwap) break
    }
    return arr
}
//console.log(bubbleSort([5, 7, 13, 4, -3, -6]))
// Select:
function selectionSort(arr) {
    if (!Array.isArray(arr)) {
        return 'Введите массив'
    }
    for (let i = 0; i < arr.length - 1; i++) {
        let indexMin = i
        for (let k = i + 1; k < arr.length; k++) {
            if (arr[indexMin] > arr[k]) {
                indexMin = k
            }
        }
        if (indexMin !== i) {
            [arr[i], arr[indexMin]] = [arr[indexMin], arr[i]]
        }
    }
    return arr
}
//console.log(selectionSort([15, 7, 13, 4, -9, -20]))
// Insert:
function insertSort(arr) {
    if (!Array.isArray(arr)) {
        return 'Введите массив'
    }
    for (let i = 1, l = arr.length; i < l; i++) {
        let current = arr[i]
        for (k = i; k > 0 && arr[k - 1] > current; k--) {
            arr[k] = arr[k - 1]
        }
        arr[k] = current
    }
    return arr
}
//console.log(insertSort([14, 7, 13, 4, -9, -22]))

//Function for swap
function swap(arr, index1, index2) {

    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;

    return arr;
}

module.exports = {
    arrayMin,
    arrayMax,
    arrayMinIndex,
    arrayMaxIndex,
    arraySum,
    arrayRevers,
    arrayOdds,
    arraySwap,
    bubbleSort,
    selectionSort,
    insertSort
}