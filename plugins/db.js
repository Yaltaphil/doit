class DBServices {
    constructor($fire) {
        this.$fire = $fire
    }

    /** Write item to firebase
     * @param {string} path  - relative db path
     * @param {string} payload - object to write
     */
    async write(path, payload) {
        try {
            return await this.$fire.database.ref(path).set(payload)
        } catch (e) {
            this.$toast.error(`Error writing to database: ${e.message}`)
            // throw e
        }
    }

    /** Read item from firebase
     * @param {string} path - relative db path
     */
    async read(path) {
        try {
            const result = await this.$fire.database.ref(path).once('value')
            return result.val()
        } catch (e) {
            this.$toast.error(`Error reading from database: ${e.message}`)
            // throw e
        }
    }

    /** Upload file to firebase storage
     * @param {string} path - relative db path
     * @param {string} file - file to write
     * @return {string} Uploaded file url
     */
    async uploadFile(path, file) {
        try {
            const snapshot = await this.$fire
                .storage()
                .ref()
                .child(path + file.name)
                .put(file)
            // console.log('Uploaded', snapshot')
            return await snapshot.ref.getDownloadURL()
        } catch (e) {
            this.$toast.error(`Upload error: ${e.message}`)
            // throw e
        }
    }

    /** Remove file from firebase storage
     * @param {string} url - file url to delete
     */
    async removeFile(url) {
        try {
            return await this.$fire.storage().refFromURL(url).delete()
        } catch (e) {
            this.$toast.error(`Error removing file: ${e.message}`)
            // throw e
        }
    }
}

export default ({ app: { $fire } }, inject) => {
    inject('db', new DBServices($fire))
}

// TODO full CRUD db usage?