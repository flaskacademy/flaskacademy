<template>
    <div class="search" :class="search && 'active'">
        <input 
            id="search" 
            v-model="search" 
            type="text" 
            autocomplete="off"
            placeholder="Buscar..."
            @keydown="doSearch"
        />
        <div class="icon">
            <button  class="icon" @click="doSearch">
                <SearchIcon :class="search ? 'hide' : 'show'"/>
            </button>
        <label for="search" class="icon">
            <ChevronRightIcon :class="searching ? 'searching' : search ? 'show' : 'hide'"/>
        </label>
        </div>
    </div>
</template>

<style scoped>

.search{
    transition: var(--transition-primary) ease-in-out;
    border-radius: var(--radius-primary);
    padding: .4rem 1rem;
    display: flex;
    align-items: center;
    background: #00000010;
    cursor:pointer;
}

.search:hover, .search.active{
    background: #00000018;
}

.search .icon{
    width: 22px;
    height: 22px;
    display: block;
    cursor:pointer;
    border: none;
    background: none;
    padding: 0;
    margin: 0;
    display: flex;
}
.search .icon:focus{
    outline: none;
}

.searching{
    animation: load var(--transition-primary) infinite ease-in-out;
}

@keyframes load {
    from{
        opacity: 0;
        transform: scale(0.95) translateX(-50%);
        fill: inherit;
    } 
    to{
        transform: scale(1) translateX(0);
        fill: var(--color-primary);
    }
}

.search input{
    padding: 0;
    margin: 0;
    transition: var(--transition-primary) ease-in-out;
    opacity: 0;
    width: 0px;
    height: 1rem;
    background: none;
    cursor:pointer;
    color: #444;
    border:none;
    font-family: 'Heebo', sans-serif;
    font-size: 16px;
}

.search:hover.search input, .search.active input{
    width: 200px;
    opacity: 1;
}

.search input:focus{
    outline: none;
}

</style>

<script>

export default {
    data: () => ({
        search: '',
        searching: false
    }),
    methods: {
        doSearch: async function (event) {
            if(event.type === 'keydown'){
                if(event.key === 'Enter' || event.key == 'Tab'){
                    this.searching = true
                    await setTimeout(() => {
                        this.searching = false
                    }, 800)
                }
            } else if(event.type === 'click'){
                if(event.button === 0){
                    this.searching = true
                    await setTimeout(() => {
                        this.searching = false
                    }, 800)
                }
            }
        }
    }
}
</script>