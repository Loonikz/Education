const lastResult = document.querySelector('.lastResult')
const lowOrHigh = document.querySelector('.lowOrHigh')
const guessGenerate = document.querySelector('.guessGenerate')
const guessField = document.querySelector('.guessField')
const exitButton = document.querySelector('.guessExit');
const settingFrom = document.querySelector('.settingFrom');
const settingTo = document.querySelector('.settingTo');
const settingAttempt = document.querySelector('.settingAttempt');
const settingsButton = document.querySelector('.settingsButton');
const guesses = document.querySelector('.guesses')

let number = Math.floor(Math.random() * 100)
let guessCount = 1
let attempts = 5
let rangeMin
let rangeMax
let resetButton
exitButton.disabled = true

function getRandomNumber() {
    number = Math.floor(Math.random() * (rangeMax - rangeMin + 1) + rangeMin);
}

function checkGuess() {
    console.log(number)
    let guessNum = Number(guessField.value)
    if (!Number.isInteger(guessNum)) {
        alert('Ты должен вводить числа! Начинаем заново...');
        resetGame()
        setGameOver()
    }
    if (guessCount === 1) {
        guesses.textContent = 'Предыдущие попытки: '
    }
    exitButton.disabled = guessCount < 1;
    if (guessNum === number) {
        lastResult.textContent = 'Ты угадал число, поздравляю!'
        guesses.textContent = guesses.textContent + guessNum + '.'
        lowOrHigh.textContent = ''
        setGameOver()
    }else if (guessCount === attempts) {
        lastResult.textContent = 'Увы, ты потратил все попытки и проиграл :('
        guesses.textContent = guesses.textContent + guessNum + '.'
        lowOrHigh.textContent = ''
        setGameOver()
    }
    else if (guessNum > number) {
        lowOrHigh.textContent = `Твоё число больше загаданного, попробуй еще. Попыток осталось: ${attempts - guessCount}`
        guesses.textContent = guesses.textContent + guessNum + ', '
    } else if (guessNum < number) {
        lowOrHigh.textContent = `Твоё число меньше загаданного, попробуй еще. Попыток осталось: ${attempts - guessCount}`
        guesses.textContent = guesses.textContent + guessNum + ', '
    }
    guessCount++
    guessField.value = ''
    guessField.focus()
}
guessGenerate.addEventListener('click', checkGuess)

function setGameOver() {
    guessField.disabled = true
    guessGenerate.disabled = true
    exitButton.disabled = true
    settingsButton.disabled = true
    resetButton = document.createElement('button')
    resetButton.textContent = 'Начать заново'
    document.body.appendChild(resetButton)
    resetButton.addEventListener('click', resetGame)
}

function resetGame() {
    guessCount = 1

    let reset = document.querySelectorAll('.container__result p')
    for (let i = 0; i < reset.length; i++) {
        reset[i].textContent = ''
    }
    resetButton.parentNode.removeChild(resetButton)

    guessField.disabled = false
    guessGenerate.disabled = false
    settingsButton.disabled = false
    guessField.value = ''
    guessField.focus()

    attempts = 5
    number = Math.floor(Math.random() * 100)
}

exitButton.addEventListener('click', function () {
    setGameOver();
    resetGame();
    lowOrHigh.textContent = `Чтобы сыграть снова, жми на кнопку Generate или воспользуйся функцией 
                                собственной настройки, сохранив значения с помощью кнопки Set:)`
});

function saveSettings() {
    let userFirstNum = Number(settingFrom.value)
    let userSecondNum = Number(settingTo.value)
    let userAttempts = Number(settingAttempt.value)
    if (!Number.isInteger(userFirstNum) || !Number.isInteger(userSecondNum) || !Number.isInteger(userAttempts)) {
        alert('Минимальное, максимальное числа и количество возможных попыток должны быть циферными значениями');
        return false;
    } else if (userFirstNum < 1 || userFirstNum > 1) {
        alert('Минимальное число = 1');
        return false;
    } else if (userSecondNum < 1) {
        alert('Введи максимальное число (1-200)');
        return false;
    } else if (userSecondNum < 0 || userSecondNum > 200) {
        alert('Максимальный диапазон чисел: 1-200');
        return false;
    } else if (userAttempts < 1 || userAttempts > 15) {
        alert('Максимальный диапазон возможных попыток: от 1 до 15');
        return false;
    } else {
        rangeMin = userFirstNum;
        rangeMax = userSecondNum;
        attempts = userAttempts;
        getRandomNumber()
    }
}
settingsButton.addEventListener('click', saveSettings)