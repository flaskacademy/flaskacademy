export default {
    srcDir: 'src/',
    components: true,
    css: [
        './assets/css/main.css'
    ],
    modules: [
        '@nuxtjs/pwa'
    ],
    pwa: {
        manifest: {
            name: 'Flask Academy',
            lang: 'es'
        }
    }
}