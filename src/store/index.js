export const state = () => ({
    user: null
})

export const mutations = {
    SET_AUTH_USER: (state, { authUser, claims }) => {
        if(!authUser){
            state.user = false
        } else {
            state.user = {
                id: authUser.uid,
                email: authUser.email,
                emailVerified: authUser.emailVerified,
                claims: claims
            }
        }
    }
}