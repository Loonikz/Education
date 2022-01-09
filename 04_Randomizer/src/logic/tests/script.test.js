const {
    generateNumber,
    generateClick,
    reset,
    init,
} = require('../script')

jest.mock('../utils', () => {
    const originalModule = jest.requireActual('../utils');
    //Mock the default export and named export 'foo'
    return {
        __esModule: true,
        ...originalModule,
        // getValue: jest.fn(() => true),
        // getInputId: jest.fn(() => true),
        // addListener: jest.fn(() => true),
        // callAlert: jest.fn(() => true)
    };
});

describe('tests for generate number function', function () {
    test('true', () => {
        expect(generateNumber({
            minNumber: 1,
            maxNumber: 2,
            arr: [1, 2]
        })).toBe(true);
    })
})

describe('tests for reset function', function () {
    test('reset', function () {
        expect(reset({
            minNumber: 1,
            maxNumber: 2,
            arr: [1, 2]
        })).toBeUndefined();
    })
})
describe('tests for init', function () {
    test('init', function () {
        expect(init()).toBeUndefined()
    })
})

describe('test for generateClick', () => {
    test('generateClick', () => {
        expect(generateClick({
            minNumber: 1,
            maxNumber: 2,
            arr: [1, 2]
        })).toBe(false)
    })
    test('generateClick 2', () => {
        expect(generateClick({
            minNumber: 1,
            maxNumber: 1,
            arr: [1, 1]
        })).toBe(true)
    })
})