const { getQuntityPostsByAuthor,
    listOfPosts2
} = require('../getQuntityPostsByAuthor')


describe('getQuntityPostsByAuthor', () => {
    test('Should return amount of posts/comments', () => {
        expect(getQuntityPostsByAuthor(listOfPosts2, 'Rimus')).toStrictEqual('Сообщений: 1 Комментариев: 3')
    })
    test('Should return amount of posts/comments', () => {
        expect(getQuntityPostsByAuthor(listOfPosts2, 'Ivanov')).toStrictEqual('Сообщений: 2 Комментариев: 0')
    })
})