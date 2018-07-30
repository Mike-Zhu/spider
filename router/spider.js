const { searchFromSG } = require('./behavior')
module.exports = {
    index: async (ctx) => {
        await ctx.render(`/pages/index`, {
            httpContext: ctx,
        });
    },
    search: async (ctx) => {
        const { name } = ctx.query
        const content = await searchFromSG(name)
        await ctx.render(`/pages/search`, {
            httpContext: ctx,
            body:content
        });
    },
    defaultUrl: async (ctx) => {
        const { url } = ctx.request
        if (url.indexOf(staticPath) === 0) {
            await ctx.render(`/Tour/leader_index`, {
                config,
                Helper,
                httpContext: ctx
            });
        }
    },
    slbhealthcheck: async (ctx) => {
        ctx.body = "ok"
    }
}