export default {
    srcDir: 'src/',
    components: true,
    css: [
        './assets/css/main.css'
    ],
    modules: [
        '@nuxtjs/pwa',
        '@nuxtjs/firebase'
    ],
    buildModules: [
        '@nuxtjs/vuetify'
    ],
    firebase: {
        config: {
            apiKey: "AIzaSyBrWkkB2kJeWNKvV-KruiNqm8pj-e61B4E",
            authDomain: "flask-academy.firebaseapp.com",
            databaseURL: "https://flask-academy.firebaseio.com",
            projectId: "flask-academy",
            storageBucket: "flask-academy.appspot.com",
            messagingSenderId: "686760133844",
            appId: "1:686760133844:web:991f9a572088c940822741",
            measurementId: "G-JCSD97C06H"
        },
        services: {
            auth: {
                persistence: 'local',
                initialize: {
                    onAuthStateChangedMutation: 'SET_AUTH_USER'
                },
                ssr: true
            },
            firestore: true,
            storage: true
        }
    },
    pwa: {
        manifest: {
            name: 'Flask Academy',
            short_name: 'Flask Academy',
            lang: 'es',
            start_url: '/'
        }
    },
    head: {
        link: [
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;700&display=swap' }
        ],
        script: [
            { src: 'https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js' }
        ]
    }
}