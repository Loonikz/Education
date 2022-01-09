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

module.exports = {
    getQuntityPostsByAuthor,
    listOfPosts2
}
