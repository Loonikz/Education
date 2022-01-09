const tickets = require('../tickets')

describe('tickets', () => {
    test('function should return YES', () => {
        expect(tickets([25, 25, 50])).toStrictEqual('Yes')
        expect(tickets([25, 25, 50, 100])).toStrictEqual('Yes')
    })
    test('function should return NO', () => {
        expect(tickets([25, 100])).toStrictEqual('No')
        expect(tickets([25, 50, 100])).toStrictEqual('No')
    })
})