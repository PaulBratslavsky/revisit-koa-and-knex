module.exports = () => ({
  rootRoute: async (ctx) => {
    ctx.body = "Root Route";
  },

  apiInfoRoute: async (ctx) => {
    ctx.body = "API Info Route";
  },

  create: async (ctx) => {
    ctx.body = "Create Route";
  },

  find: async (ctx) => {
    ctx.body = "Find Route";
  },
});
