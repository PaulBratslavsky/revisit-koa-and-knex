const services = require('../services');

const getPost = async (ctx) => {
  const id = ctx.params.id;
  const post = await services.getPost(ctx, id);
  ctx.body = post || "Post not found";
};

const getPosts = async (ctx) => {
  const posts = await services.getPosts(ctx);
  ctx.body = posts;
};

const createPost = async (ctx) => {
  const newPost = ctx.request.body;
  const post = await services.createPost(ctx, newPost);
  ctx.body = post;
};

const updatePost = async (ctx) => {
  const id = ctx.params.id;
  const updatedPostData = ctx.request.body;
  const updatedPost = await services.updatePost(ctx, id, updatedPostData);
  ctx.body = updatedPost || "Update failed";
};

const deletePost = async (ctx) => {
  const id = ctx.params.id;
  await services.deletePost(ctx, id);
  ctx.body = "Post deleted";
};

module.exports = {
  getPost,
  getPosts,
  createPost,
  updatePost,
  deletePost
};
