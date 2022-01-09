function findTitle(array, string) {
    let result = [];
    if (!Array.isArray(array)) {
        return false
    }
    for (let i = 0; i < array.length; i++) {
        if (!array[i].title) {
            continue;
        }
        if (array[i].title.toLowerCase().includes(string)) {
            result.push(array[i]);
        }
    }
    return result;
}
let arr = [{
    title: 'Some title1'
}, {
    title: 'I like JS'
}, {
    user: 'This obj does not have key title js'
}, {
    title: 'Js - is the best!'
}];

module.exports = {
    findTitle,
    arr
}