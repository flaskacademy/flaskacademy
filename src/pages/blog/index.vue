<template>
    <div>
        <h1>Blog</h1>
        <div v-for="post in posts" :key="post.id" class="post">
            <h3>{{ post.title.rendered }}</h3>
            <p v-html="post.excerpt.rendered"></p>
            <NuxtLink to="/">Seguir leyendo</NuxtLink>
        </div>
    </div>
</template>

<style scoped>

.post{
    border: 1px solid #EEE;
    border-radius: 8px;

    padding: 2rem;
    margin-top: 2rem;
}

.post p{
    margin-top: 1rem;
    margin-bottom: 1rem;
}

.post a{
    background: var(--color-primary);

    padding: .6rem 1.4rem;

    display: block;

    width: min-content;

    white-space: nowrap;

    border-radius: 8px;

    text-decoration: none;
    color: white;
}

</style>

<script>

const axios = require('axios').default
const api_url = 'https://api.flaskacademy.org/wp-json/wp/v2/posts'

export default {
    async asyncData(){
        let posts = []
        await axios.get(api_url).then(data => {
            let array = []
            data.data.map(async item => {
                const url = item._links['wp:featuredmedia'][0].href
                let image = null
                await axios.get(url).then(img => {
                    image = img
                })
                array.push({...item, image: image})
            })
            posts = array
        })
        return { posts }
    }
}
</script>