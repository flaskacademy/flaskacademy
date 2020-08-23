<template>

<v-card class="pa-10 rounded-lg">

<v-img src="/images/branding/isotype.svg" class="mx-auto mb-5" width="64px" height="64px"></v-img>

<div class="d-flex justify-center mb-5">
    <span class="text-h5">Iniciar sesión</span>
</div>

<v-text-field outlined hide-details="auto" :error-messages="emailError" required :error="emailError ? true : false" type="email" class="mb-5" v-model="email" v-on:change="validateEmail" label="Correo electrónico"></v-text-field>
<v-text-field outlined hide-details="auto" :error-messages="passwordError" required :error="passwordError ? true : false" v-model="password" v-on:change="resetPasswordError" type="password" label="Contraseña"></v-text-field>

<div class="d-flex justify-space-between mt-5">
    <v-btn text color="primary">Registrarse</v-btn>
    <v-btn color="primary" depressed v-on:click="login" :loading="loading">Acceder</v-btn>
</div>

</v-card>
    
</template>

<script>

const validator = require('email-validator')

export default {
    layout: 'form',
    data: () => ({
        email: '',
        emailError: '',
        password: '',
        passwordError: '',
        loading: false
    }),
    methods: {
        validateEmail(){
            if(this.email == ''){
                this.emailError = ''
            } else if(validator.validate(this.email)){
                this.emailError = ''
            } else {
                console.log('this')
                this.emailError = 'Escribe una dirección de correo electrónico válida'
            }  
        },
        resetPasswordError(){
            this.passwordError = ''
        },
        login(){
            this.loading = true
            this.$fireAuth.signInWithEmailAndPassword(this.email, this.password).then(() => {
                this.loading = false
            }).catch(error => {
                this.loading = false
                switch(error.code){
                    case 'auth/wrong-password':
                        this.passwordError = 'La contraseña que ingresaste es incorrecta'
                        break
                    case 'auth/user-not-found':
                        this.emailError = 'El correo electrónico que ingresaste no está asociado a ninguna cuenta'
                        break
                    default:
                        console.error(error)
                }
            })
        }
    }
}

</script>