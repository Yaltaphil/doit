export default ({ app }, inject) => {
    inject('db', {
        async write(path, payload) {
            try {
                return await this.$fire.database.ref(path).set(payload)
            } catch (e) {
                this.$toast.error(`Error writing to database: ${e.message}`)
                throw e
            }
        },

        async read(path) {
            try {
                const result = await this.$fire.database.ref(path).once('value')
                return result.val()
            } catch (e) {
                this.$toast.error(`Error reading from database: ${e.message}`)
                throw e
            }
        },
    })
}
