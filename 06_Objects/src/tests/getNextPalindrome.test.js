const getNextPalindrome = require('../getNextPalindrome')

describe('countCharacters', () => {
    test('Should return result', () => {
        expect(getNextPalindrome(7)).toStrictEqual(11)
        expect(getNextPalindrome(99)).toStrictEqual(101)
        expect(getNextPalindrome(888)).toStrictEqual(898)
    })
    test('Should return false', () => {
        expect(getNextPalindrome('[123]')).toStrictEqual(false)
    })
})