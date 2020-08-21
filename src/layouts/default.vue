<template>

<div>
    
    <AppBar />

    <div class="container">

        <Nuxt />

    </div>    

</div>

</template>

<style scoped>

.container{
    margin: initial auto;
    padding: 1rem;
    max-width: 800px;
}

</style>

<script>

    export default {
        head: {
            meta: [
                { name: 'viewport', content: 'width=device-width, initial-scale=1' }
            ]
        }
    }

</script>
