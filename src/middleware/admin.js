export default function ({ store, redirect }) {
    if(store.state.user){
        if(!store.state.user.claims.admin){
            redirect('/acceder')
        }
    } else {
        redirect('/acceder')
    }
}