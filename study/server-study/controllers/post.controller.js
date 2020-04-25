const posts = [
    { id: '1', title: 'lalalala' },
    { id: '2', title: 'hohohoh' },
  ];

const getPosts = (req, res, next) => {
    res.status(200).json(post);
  }



const getPost = (req, res, next) => {
    const postId = req.params.postId;
    const post = posts.find(post)=>post.id===postId;
    res.status(200).json(post);
}