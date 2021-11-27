var post = { id: 6, title: 'ElloWorld' };
var comments = [
    { postId: 6, body: 'great post' },
    { postId: 3, body: 'ok' },
    { postId: 6, body: 'no you' },
    { postId: 2, body: 'asdfasdfasdf asdffdsa' }
];

function commentsForPosts(post, comments) {
    return comments.filter(function (comment) {
        return comment.postId === post.id;
    });
}

console.log(commentsForPosts(post, comments));