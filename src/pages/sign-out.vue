<template>
    <h1>Saliendo...</h1>
</template>

<script>
export default {
    beforeMount(){
        this.$fireAuth.signOut().then(() => {
            this.$router.push('/')
        })
    }
}
</script>