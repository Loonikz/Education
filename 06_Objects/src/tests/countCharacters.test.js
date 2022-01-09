const countCharacters = require('../countCharacters')

describe('countCharacters', () => {
    test('Should return result', () => {
        expect(countCharacters('aabcddeffge')).toStrictEqual({a: 2, b: 1, c: 1, d: 2, e: 2, f: 2, g: 1})
        expect(countCharacters('sparrow')).toStrictEqual({s: 1, p: 1, a: 1, r: 2, o: 1, w: 1})
        expect(countCharacters('a 2ab !d')).toStrictEqual({a: 2, b:1, d:1, 2:1})

    })
    test('Should return false', () => {
        expect(countCharacters([123])).toStrictEqual(false)
    })
})