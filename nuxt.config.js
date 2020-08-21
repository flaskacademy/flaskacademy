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
            name: 'Flask Academy: Aprende desarrollo Web.',
            short_name: 'FlaskAcademy',
            lang: 'es',
            start_url: '/'
        }
    },
    head: {
        link: [
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;700&display=swap' }
        ]
    }
}