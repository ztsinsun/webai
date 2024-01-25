// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: false},
    modules: ['@nuxt/ui'],
    css: ['~/assets/css/style.css'],
    devServer: {
        port: 3001,
    },
    routeRules: {
        '/': {
            prerender: true,
        }
    },
    app: {
        head: {
            title: 'CF AI Web',
            meta: [
                {
                    name: 'keywords',
                    content: 'CF AI Web, AI, Cloudflare Workers, ChatGPT, GeminiPro, Google Generative AI'
                },
                {
                    name: 'description',
                    content: 'Integrated web platform supporting GeminiPro/Cloudflare Workers AI/ChatGPT by Jazee6'
                }
            ]
        }
    }
})
