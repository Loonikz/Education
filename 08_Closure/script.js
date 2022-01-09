// 1. Новый фильм "Как натренировать своего дракона” только
// выпустили! В кассах кинотеатра много людей, стоящих в
// огромную очередь. У каждого из них есть банкнота в 100, 50 или
// 25 долларов. Билет на «Бэтмен против Супермена: На заре
// справедливости» стоит 25 долларов. Вася в настоящее время
// работает клерком. Он хочет продать билет каждому человеку в
// этой очереди. Может ли Вася продать каждому билет и отдать
// сдачу, если у него изначально нет денег и он продает билеты
// строго в том порядке, в котором люди следуют в очереди?
//     Верните YES, если Вася может продать каждому билет и отдать
// сдачу. В противном случае верните NO. Может ли Вася продать
// каждому билет и отдать сдачу?

function tickets(person) {
    for (let i = 0; i < person.length; i++) {
        if (Number(person[i]) + Number(person[i + 1]) >= Number(person[i + 2])) {
            return `Yes`
        } else {
            return `No`;
        }
    }
}

// console.log(tickets([25, 25, 50])); // Yes
// console.log(tickets([25, 100]));    // No
// console.log(tickets([25, 25, 50, 100])); // Yes
// console.log(tickets([25, 50, 100])); // No
// console.log(tickets([`25`, `25`, `50`, `100`])); // Yes
// console.log(tickets([`25`, `50`, `100`])); // No

// 2.Напишите функцию, которая получает два бесконечных числа в
// виде строк. Вы должны вернуть результат суммы этих двух чисел
// в виде строки. Математическая работа с этими двумя числами
// недоступна. Не используйте BigInt.

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

// console.log(getSum('111111111111111111111111111111111111111111111111111','23333333333333333333333333333333333333333333333333'))
// console.log(getSum('123', '324'))

// 3.Создайте функцию, которая получает два аргумента: первый -
// это массив объектов, второй - строка (имя автора). Ваша
// функция должна возвращать количество сообщений с автором из
// аргумента функции и комментариев с тем же автором. Пример
// массива:

let listOfPosts2 = [
    {
        id: 1,
        post: 'some post1',
        title: 'title 1',
        author: 'Ivanov',
        comments: [
            {
                id: 1.1,
                comment: 'some comment1',
                title: 'title 1',
                author: 'Rimus'
            },
            {
                id: 1.2,
                comment: 'some comment2',
                title: 'title 2',
                author: 'Uncle'
            }
        ]
    },
    {
        id: 2,
        post: 'some post2',
        title: 'title 2',
        author: 'Ivanov',
        comments: [
            {
                id: 1.1,
                comment: 'some comment1',
                title: 'title 1',
                author: 'Rimus'
            },
            {
                id: 1.2,
                comment: 'some comment2',
                title: 'title 2',
                author: 'Uncle'
            },
            {
                id: 1.3,
                comment: 'some comment3',
                title: 'title 3',
                author: 'Rimus'
            }
        ]
    },
    {
        id: 3,
        post: 'some post3',
        title: 'title 3',
        author: 'Rimus'
    },
    {
        id: 4,
        post: 'some post4',
        title: 'title 4',
        author: 'Uncle'
    }
]
function getQuntityPostsByAuthor (listOfPosts1, name) {
    let postsCount = 0;
    let commentsCount = 0;

    function count(listOfPosts1, name) {
        for (let i = 0; i < listOfPosts1.length; i++) {
            if (!listOfPosts1[i].hasOwnProperty('comment') && listOfPosts1[i].author === name) {
                postsCount++;
            }
            if (listOfPosts1[i].hasOwnProperty('comment') && listOfPosts1[i].author === name) {
                commentsCount++;
            }
            if (listOfPosts1[i].comments) {
                count(listOfPosts1[i].comments, name);
            }
        }
    }
    count(listOfPosts1, name);
    return `Сообщений: ${postsCount} Комментариев: ${commentsCount}`;
}

// console.log(getQuntityPostsByAuthor(listOfPosts2, 'Rimus'))

// 4. Напишите функцию кеш

function complexFunction(arg1, arg2) {
    return arg1 + arg2
}

function cache(func) {
    let cache = [];
    return function (arg1, arg2) {
        for (let i = 0; i < cache.length; i++) {
            if (arguments[0] === cache[i].arg1 && arguments[1] === cache[i].arg2) {
                console.log(cache[i].result)
                return cache[i].result
            }
        }
        let result = func(arg1, arg2);
        cache.push({ arg1: arguments[0], arg2: arguments[1], result });
        console.log(result)
        return result;
    };
}

let cachedFunc = cache(complexFunction);

cachedFunc('foo', 'bar')
cachedFunc('foo', 'bar')
cachedFunc('foo', 'baz')
cachedFunc('foo', 'baz')