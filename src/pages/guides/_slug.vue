<template>
    <div class="layout">
        <div class="side-bar">
            <h3>Contenido</h3>
            <a href="#" class="item active">Empezar</a>
            <a href="#" class="item">Auth</a>
            <a href="#" class="item">Auth</a>
        </div>
        <div class="content">
            <div class="section">
                <div class="banner">
                    <img class="avatar" src="/images/platforms/firebase.svg"/>
                    <div>
                        <h1>Guía de Firebase Auth (Web)</h1>
                        <span>Actualizada el 20/08/2020</span>
                    </div>
                </div>
            </div>
            <div class="section">
                <h2>Empezar</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed explicabo, deleniti enim reiciendis saepe aperiam eos itaque reprehenderit necessitatibus, dignissimos neque incidunt similique ipsam praesentium aliquid aspernatur unde ratione velit alias sint fugit eligendi? Non distinctio, dignissimos omnis suscipit quia delectus vero, natus sed voluptatibus tenetur blanditiis fugit esse dolore. Itaque sit, fugiat ullam perferendis enim blanditiis molestiae ipsam molestias quam quo repellendus voluptate consequatur error! Placeat doloribus ipsa rem voluptate dolorem optio maiores molestiae fugiat velit deserunt iusto, quae exercitationem, dolor quaerat soluta impedit ducimus quo consequuntur accusantium iste minus fuga ipsum aliquid assumenda? Atque molestiae praesentium esse voluptates!</p>
            </div>
            <div class="section">
                <h2>Instalar Firebase SDK</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed explicabo, deleniti enim reiciendis saepe aperiam eos itaque reprehenderit necessitatibus, dignissimos neque incidunt similique ipsam praesentium aliquid aspernatur unde ratione velit alias sint fugit eligendi? Non distinctio, dignissimos omnis suscipit quia delectus vero, natus sed voluptatibus tenetur blanditiis fugit esse dolore. Itaque sit, fugiat ullam perferendis enim blanditiis molestiae ipsam molestias quam quo repellendus voluptate consequatur error! Placeat doloribus ipsa rem voluptate dolorem optio maiores molestiae fugiat velit deserunt iusto, quae exercitationem, dolor quaerat soluta impedit ducimus quo consequuntur accusantium iste minus fuga ipsum aliquid assumenda? Atque molestiae praesentium esse voluptates!</p>
                <code class="prettyprint">
                    console.log('hello world!')
                </code>
            </div>
        </div>
    </div>
</template>

<style scoped>

.layout{
    display: flex;
    box-sizing: border-box;
}

.avatar{
    width: 5rem;
    height: 5rem;
    box-sizing: border-box;
    padding: 1rem;
    border: 1px solid #EEE;
    border-radius: 50%;/*
    max-height: 56px;
    max-width: 56px;*/
    background: #FFF;
}

.side-bar{
    width: 300px;
    padding: 1rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
}

.side-bar .item{
    width: 100%;
    text-decoration: none;
    color: initial;
    display: block;
    padding: 0.6rem 1rem;
    border-radius: var(--radius-primary);
    box-sizing: border-box;
}

.side-bar .item:hover{
    background: #00000008;
}

.side-bar .item.active{
    color: var(--color-primary);
    background: var(--color-primary-transparent);
}

.banner{
    display: flex;
    align-items: center;
    gap: 1rem;
}

h2{
    margin-bottom: 1rem;
}

.banner h1{
    font-size: 1.6rem;
}

.banner span{
    color: #888;
}

.content{
    width: 100%;
    box-sizing: border-box;
}

.section{
    background: #FFF;
    border-radius: var(--radius-secondary);
    width: 100%;
    max-width: 800px;
    margin: 2rem auto;
    padding: 2rem;
    box-sizing: border-box;
}

@media screen and (max-width: 700px){
    .side-bar{
        display: none;
    }
}

</style>

<script>
export default {
    layout: 'guide'
}
</script>