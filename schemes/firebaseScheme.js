import { LocalScheme } from '~auth/runtime'

export default class firebaseScheme extends LocalScheme {
    async fetchUser() {
        await this.$fire.auth.signInWithEmailAndPassword(
            this.options.endpoints.user,
            this.options.endpoints.password
        )

        const user = this.$fire.auth.currentUser

        if (user) {
            this.$auth.setUser(user)
        }
    }
}
