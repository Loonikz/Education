function complexFunction(arg1, arg2) {
    return arg1 + arg2
}

function cache(func) {
    let cache = [];
    return function (arg1, arg2) {
        for (let i = 0; i < cache.length; i++) {
            if (arguments[0] === cache[i].arg1 && arguments[1] === cache[i].arg2) {
                return cache[i].result
            }
        }
        let result = func(arg1, arg2);
        cache.push({ arg1: arguments[0], arg2: arguments[1], result });
        return result;
    };
}

let cachedFunc = cache(complexFunction);

cachedFunc('foo', 'bar')
cachedFunc('foo', 'bar')
cachedFunc('foo', 'baz')
cachedFunc('foo', 'baz')

module.exports = {
    complexFunction,
    cache
}