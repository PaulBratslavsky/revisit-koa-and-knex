const getPost = async (ctx, id) => {
  return await ctx.db('blog_posts').where({ id }).first();
};

const getPosts = async (ctx) => {
  return await ctx.db('blog_posts').select();
};

const createPost = async (ctx, post) => {
  return await ctx.db('blog_posts').insert(post).returning('*');
};

const updatePost = async (ctx, id, updatedPost) => {
  return await ctx.db('blog_posts').where({ id }).update(updatedPost).returning('*');
};

const deletePost = async (ctx, id) => {
  return await ctx.db('blog_posts').where({ id }).del();
};

module.exports = {
  getPost,
  getPosts,
  createPost,
  updatePost,
  deletePost
};
