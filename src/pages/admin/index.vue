<template>
<div>

    <h1>Admin</h1>

    <AddGuide></AddGuide>

    <Guides></Guides>

</div>
</template>

<script>

export default {
    middleware: 'admin'
}

</script>