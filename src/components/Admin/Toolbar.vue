<template>
<div class="toolbar">
    <button @click="run('bold')">Bold</button>
    <button @click="run('italic')">Italic</button>
    <button @click="run('underline')">Underline</button>
</div>
</template>

<style scoped>

.toolbar{
    display: flex;
    gap: .4rem;
}

button{
    padding: .4rem;
    box-sizing: border-box;
    border: none;
    background: transparent;
    transition: var(--transition-primary);
    border-radius: var(--radius-primary);
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
}

button:hover{
    background: #EEE;
}

</style>

<script>
export default {
    methods: {
        run(command){
            document.execCommand(command)
        }
    }
}
</script>