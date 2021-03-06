const BLOG = {
    title: "EternaSuno's Blog",
    author: "EternaSuno",
    description: "World is trash, and so am I.",
    domain: "https://eterna-suno.vercel.app",
    since: 2020,

    og: {
        bgImage: "https://images.unsplash.com/photo-1509223740887-8ab81082b074?w=1050&q=80"
    },

    notion: {
        pageId: process.env.NOTION_PAGE_ID!,
        authToken: process.env.NOTION_AUTH_TOKEN
    }
};

export default BLOG;