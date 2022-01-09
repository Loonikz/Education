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

module.exports = getNextPalindrome;