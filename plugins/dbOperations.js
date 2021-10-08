import Vue from 'vue'

export default ({ app }, inject) => {
  // Inject $hello(msg) in Vue, context and store.
  inject('hello', msg => console.log(`Hello ${msg}!`))
}

Vue.prototype.$writeDB = async function (path, payload) {
    try {
        return await this.$fire.database.ref(path).set(payload)
    } catch (e) {
        this.$toast.error(`Error writing to database: ${e.message}`)
        throw e
    }
}

Vue.prototype.$readDB = async function (path) {
    try {
        const result = await this.$fire.database.ref(path).once('value')
        return result.val()
    } catch (e) {
        this.$toast.error(`Error reading from database: ${e.message}`)
        throw e
    }
}

Vue.prototype.$uploadFile = async function (path, file) {
    try {
        const snapshot = await this.$fire.storage().ref().child(path + file.name).put(file);
        console.log("Uploaded", snapshot.totalBytes, "bytes.");
        console.log("File metadata:", snapshot.metadata);
        return await snapshot.ref.getDownloadURL()
    }
    catch (e) {
       this.$toast.error(`Upload error: ${e.message}`)
       throw e
    }
},

Vue.prototype.$removeFile = async function ( url ) {
    try {
        const result = await this.$fire.storage().refFromURL(url).delete();
        console.log(`File ${url} deleted from storage`);
        return result
    }
    catch (e) {
       this.$toast.error(`Error Upload error: ${e.message}`)
       throw e
    }
},

        async removeFromStorage(_state, url) {
            return await firebase
                .storage()
                .refFromURL(url)
                .delete()
                .then(() => )
                .catch((error) => {
                    console.log(`Problem to delete file  ${error}`);
                    throw error;
                });
        },