
<template>

<nav role="navigation">
    <Isologo/>
    <Search/>
    <Item to="/guides" label="Guías"></Item>
</nav>

</template>

<style scoped>

nav{
    display: flex;
    align-items: center;

    gap: 1rem;

    padding: 0 1rem;
    margin: 0;

    box-sizing: border-box;

    width: 100vw;
    height: 4rem;

    border-bottom: 1px solid #EEE;
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