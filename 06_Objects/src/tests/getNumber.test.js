const getNumber = require('../getNumber')

describe('getNumber', () => {
    test('Should return even', () => {
        expect(getNumber([1, 5, 7, 9, 15, 19, 777, -15, -11, 4, 9, 23, -17])).toStrictEqual(4)

    })
    test('Should return odd', () => {
        expect(getNumber([0, 2, 8, -4, 0, -122, 13, -4, 28, 12])).toStrictEqual(13)
    })
})