const assert = require('assert')

let {
    sumOrMultiply,
    quarter,
    getSum,
    getSumMax,
    getRate
} = require('./operators')

describe('Operators: Part 1', function() {
    it('Should return result, if "a" even returns a * b else returns a + b', function () {

        assert.equal(sumOrMultiply(4, 7), 28);
        assert.equal(sumOrMultiply(9, 8), 17);
        assert.equal(sumOrMultiply('9', 8), 'Введите число');
    })
})

describe('Operators: Part 2', function() {
it('Should return result if quarter according to "x" an "y"', function () {

    assert.equal(quarter(1, 2), `I`);
    assert.equal(quarter(-1, 1), `II`);
    assert.equal(quarter(1, 0), "Точка лежит на оси");
    assert.equal(quarter(0, 0), "Точка - начало координат");
    assert.equal(quarter(1, -1), "IV");
    assert.equal(quarter(-1, -1), "III");
    })
})

describe('Operators: Part 3', function() {
    it('Should return result sum of positive array elements', function () {

        assert.equal(getSum(1, 2, 3), 'Введите массив');
        assert.equal(getSum([-1, 2, 3]), 5);
        assert.equal(getSum([-1, -2, -3]), 0);
    })
})

describe('Operators: Part 4', function() {
    it('Should return result, if sum > multiply returns "sum + 3" else returns "multiply + 3"', function () {

        assert.equal(getSumMax(1, 2, 1), "max: " + 7);
        assert.equal(getSumMax(2, 2, 3), "max: " + 15);
        assert.equal(getSumMax(0, 2, 3), "max: " + 8);
        assert.equal(getSumMax('0', 2, 3), 'Введите число');
    })
})

describe('Operators: Part 5', function() {
    it('Should return result of mark according to rating', function () {

        assert.equal(getRate(10), "F");
        assert.equal(getRate(20), "E");
        assert.equal(getRate(40), "D");
        assert.equal(getRate(60), "C");
        assert.equal(getRate(75), "B");
        assert.equal(getRate(90), "A");
        assert.equal(getRate(101), "Введите число от 0 до 100");
        assert.equal(getRate('101'), "Введите число");
    })
})