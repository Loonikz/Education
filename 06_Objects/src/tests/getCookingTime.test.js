const getCookingTime = require('../getCookingTime')

describe('getCookingTime', () => {
    test('Should return boolean', () => {
        expect(getCookingTime(0)).toStrictEqual(false)
        expect(getCookingTime(-9)).toStrictEqual(false)
        expect(getCookingTime('1')).toStrictEqual(false)
    })
    test('Should return result', () => {
        expect(getCookingTime(1)).toStrictEqual(5)
        expect(getCookingTime(5)).toStrictEqual(5)
        expect(getCookingTime(9)).toStrictEqual(10)
    })
})