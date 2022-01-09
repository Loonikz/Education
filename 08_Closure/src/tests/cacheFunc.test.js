const {
    complexFunction,
    cache
} = require('../cacheFunc')

describe('cacheFunc', () => {
    test('check arguments in cache', () => {
        let complexFunction = jest.fn()
        let func = cache(complexFunction)
        func('1', 2)
        func('1', 2)
        func('1', 2)
        func('1', 2)
        expect(complexFunction).toBeCalledTimes(1);
    });
    test('check another arguments', () => {
        let complexFunction = jest.fn()
        let func = cache(complexFunction)
        func('1', 2)
        func('1', 2)
        func('1', 3)
        func('1', 2)
        expect(complexFunction).toBeCalledTimes(2);
    });
})