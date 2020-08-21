<template>
    <NuxtLink :to="to" class="item">
        {{ label }}
    </NuxtLink>
</template>

<style scoped>

.item{
    transition: .25s;

    text-decoration: none;
    color: #888;

    padding: .4rem 1rem;

    border-radius: 8px;
}

.item:hover{
    background: #00000008;
}

.item.nuxt-link-active:hover{
    background: var(--color-primary-transparent);
}

.nuxt-link-active{
    color: var(--color-primary);
}

</style>

<script>
export default {
    props: ['to', 'label']
}
</script>