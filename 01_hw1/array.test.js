const assert = require('assert')

let {
    arrayMin,
    arrayMax,
    arrayMinIndex,
    arrayMaxIndex,
    arraySum,
    arrayRevers,
    arrayOdds,
    arraySwap,
    bubbleSort,
    selectionSort,
    insertSort
} = require('./array')

describe ('Arrays test', function() {
    it('Should return result of minimal element of array', function () {

        assert.equal(arrayMin([1, 2, 3, 4, 5, 6]), 1);
    })

    it('Should return result of maximum element of array', function () {

        assert.equal(arrayMax([1, 2, 3, 4, 5, 6]), 6);
    })

    it('Should return result of index of minimal element of array', function () {

        assert.equal(arrayMinIndex([1, 2, 3, 4, 5, 6]), 0);
    })

    it('Should return result of index of maximal element of array', function () {

        assert.equal(arrayMaxIndex([1, 2, 3, 4, 5, 6]), 5);
    })

    it('Should return result of sum of array elements with odd index', function () {

        assert.equal(arraySum([1, 2, 3, 4, 5, 6]), 12);
    })

    it('Should return result of reversed array', function () {

        assert.deepEqual(arrayRevers([1, 2, 3, 4, 5, 6]), [6, 5, 4, 3, 2, 1]);
    })

    it('Should return result of count of odd array elements', function () {

        assert.equal(arrayOdds([1, 2, 3, 4, 5, 6]), 3);
    })

    it('Should return result of array with shifted half', function () {

        assert.deepEqual(arraySwap([1, 2, 3, 4, 5, 6]), [4, 5, 6, 1, 2, 3]);
    })

    it('Should return result of bubble-sorted array', function () {

        assert.deepEqual(bubbleSort([6, 5, 4, 9, 8, 7, 1, 2, 3]), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
    })

    it('Should return result of selection-sorted array', function () {

        assert.deepEqual(selectionSort([6, 5, 4, 9, 8, 7, 1, 2, 3]), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
    })

    it('Should return result of insert-sorted array', function () {

        assert.deepEqual(insertSort([6, 5, 4, 9, 8, 7, 1, 2, 3]), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
    })
})