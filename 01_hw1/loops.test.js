const assert = require('assert')

let {
    getSumNum,
    checkNum,
    getSqrtNum,
    getSqrtNum1,
    factorial,
    sumOfNum,
    getMirror
} = require('./loops')

describe ('Loops test', function() {
    it('Should return result sum and quantity of even numbers from 1 to 99', function () {

        assert.deepEqual(getSumNum(), {sum: 2450, counter: 49});
    })

    it('Should return result, "true" if number is prime, else "false"', function () {

        assert.equal(checkNum(7), true);
        assert.equal(checkNum(6), false);
    })

    it('Should return result, root for a number (selection method)', function () {

        assert.equal(getSqrtNum(49), 7);
        assert.equal(getSqrtNum1(49), 7);
    })

    it('Should return result factorial of a number', function () {

        assert.equal(factorial(5), 120);
    })

    it('Should return result sum of chars in number', function () {

        assert.equal(sumOfNum(345), 12);
    })

    it('Should return result of reversed number', function () {

        assert.equal(getMirror(45857484), 48475854)
    })
})