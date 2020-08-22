
<template>

<nav role="navigation">
    <Isologo/>
    <Search/>
    <div v-if="$store.state.user">
        <div v-if="$store.state.user.claims">
            <Item v-if="$store.state.user.claims.admin" to="/admin" label="Admin"/>
        </div>
        <Item v-if="$store.state.user" to="/salir" label="Salir"/>
    </div>
</nav>

</template>

<style scoped>

nav{
    display: flex;
    align-items: center;

    gap: 1rem;

    padding: 0 1rem;
    margin: 0;

    box-sizing: border-box !important;

    width: 100%;
    height: 4rem;

    background: #FFF;
}

@media screen and (max-width: 600px) {
    .item{
        display: none;
    }
    .search{
        display: none !important;
    }
}

</style>