<template>
<div>

    <table v-if="guides">
        <thead>
            <tr>
                <th>Título</th>
                <th>Fecha de actualización</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="guide in guides" :key="guide.id">
                <td>{{ guide.data().title }}</td>
            </tr>
        </tbody>
    </table>

</div>
</template>

<script>
export default {
    data: () => ({
        guides: null
    }),
    async fetch(){
        this.$fireStore.collection('guides').get().then(data => {
            this.guides = data.docs
        })
    }
}
</script>