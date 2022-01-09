function getSum(a, b) {
    const sumArrA = a.split('');
    const newArrA = sumArrA.map(Number)

    const sumArrB= b.split('');
    const  newArrB = sumArrB.map(Number)

    const sum = newArrB.map(function (num, ind) {
        return num + newArrA[ind];
    });
    return sum.join('');
}

module.exports = getSum;