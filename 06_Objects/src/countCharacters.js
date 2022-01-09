function countCharacters(string) {

    if(typeof string !== 'string') {
        return false;
    }
    let result = string.split('');
    const obj = {};
    result.forEach(function(item) {

        if( item === ' ' || item === '!'){
            return;
        }

        if(obj[item]) {
            obj[item] += 1;
        } else {
            obj[item] = 1;
        }
    });

    return obj;
}

module.exports = countCharacters;