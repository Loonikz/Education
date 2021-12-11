const assert = require('assert')

let {
    day,
    numToString,
    stringToNum,
    getDistance,
} = require('./function')

describe ('Functions test', function() {
    it('Should return result of string view of day', function () {

        assert.equal(day(1), 'Понедельник');
        assert.equal(day(2), 'Вторник');
        assert.equal(day(3), 'Среда');
        assert.equal(day(4), 'Четверг');
        assert.equal(day(5), 'Пятница');
        assert.equal(day(6), 'Суббота');
        assert.equal(day(7), 'Воскресенье');
    })

    it('Should return result of string view of number', function () {

        assert.equal(numToString(899), 'восемьсот девяносто девять');
    })

    it('Should return result of number view of string', function () {

        assert.equal(stringToNum('пятьсот девяносто четыре'), 594);
    })

    it('Should return result of distance between two points', function () {

        assert.equal(getDistance(1, 6, 1, 1), 5);
    })
})
