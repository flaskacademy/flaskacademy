<template>
<div class="editor">
    <input type="text" placeholder="Título" v-model="title">
    <input type="text" placeholder="Slug" v-model="slug">
    <Toolbar/>
    <div v-for="(section, index) in sections" :key="index" class="section">
        <input v-model="section.id" placeholder="ID"/>
        <div contenteditable :id="'section-'+index" v-html="section.content" placeholder="Contenido"></div>
        <button @click="removeSection(index)">Eliminar</button>
    </div>
    <button @click="addSection">Añadir sección</button>
    <button @click="addGuide">Añadir</button>
</div>
</template>

<style scoped>

.editor{
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.editor .section{
    background: #FFF;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.editor .section input, .editor .section textarea{
    border: none;
    font-family: 'Heebo', sans-serif;
}

</style>

<script>
export default {
    data: () => ({
        title: '',
        slug: '',
        sections: [
            { 
                id: '',
                content: ''
            }
        ]
    }),
    methods: {
        addSection(){
            this.sections.push({ id: 'Id aquí', content: 'Contenido aquí' })
        },
        removeSection(index){
            this.sections.splice(index, 1)
        },
        addGuide(){
            
            this.sections.map((section, index) => {
                const section_content = document.getElementById('section-'+index).innerHTML
                section.content = section_content
            })

            console.log(this.sections)

            /*
            this.$fireStore.collection('guides').doc(this.slug).set({
                title: this.title,
                published: false
            })
            */
        }
    }
}
</script>