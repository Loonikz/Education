const {
    findTitle,
    arr
} = require('../findTitle')

describe('findTitle', () => {
    test('Should return result of search', () => {
        expect(findTitle(arr, 'js')).toStrictEqual([ { title: 'I like JS'}, { title: 'Js - is the best!' } ])
        expect(findTitle('', 'js')).toStrictEqual(false)
    })
})