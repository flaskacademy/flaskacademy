<template>
    <div>
        <input type="email" v-model="email" required>
        <input type="password" v-model="password" required>
        <button @click="login">Acceder</button>
    </div>
</template>

<script>
export default {
    middleware: 'visitor',
    data: () => ({
        email: '',
        password: ''
    }),
    methods: {
        login(){
            event.preventDefault
            this.$fireAuth.signInWithEmailAndPassword(this.email, this.password)
            .then(() => {
                this.$router.push('/')
            })
            .catch(error => console.error(error))
        }
    }
}
</script>