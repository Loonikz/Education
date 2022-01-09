const getSum = require('../getSum')

describe('getSum', () => {
    test('Should return result to string', () => {
        expect(getSum('123','324')).toStrictEqual('447')
    })
})