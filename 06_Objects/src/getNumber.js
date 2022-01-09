function  getNumber(array) {
    let count = 0;
    let even = [];
    let odd = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) even.push(array[i])
        else odd.push(array[i])
        count++
        if (even.length !== 0 && odd.length !== 0 && even.length !== odd.length) {
            return even.length > odd.length ? odd[0] : even[0]
        }
    }
}

module.exports = getNumber;