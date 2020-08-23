<template>

<v-app-bar app :color="$vuetify.theme.dark ? 'dark' : 'white'" flat>

    <v-img 
        max-width="42"
        max-height="42"
        class="mr-4"
        src="/images/branding/isotype.svg"
    ></v-img>

    <v-toolbar-title>Flask Academy</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn text>Acceder</v-btn>

    <v-btn outlined class="ml-2" color="primary">Registrarse</v-btn>

</v-app-bar>

</template>