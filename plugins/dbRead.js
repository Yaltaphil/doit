/** Read item from firebase
 * @param path - relative db path
 */
export default ({ app }, inject) => {
    inject('dbRead', async function (path) {
        try {
            const result = await this.$fire.database.ref(path).once('value')
            return result.val()
        } catch (e) {
            this.$toast.error(`Error reading from database: ${e.message}`)
            throw e
        }
    })
}
