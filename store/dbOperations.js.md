import firebase from "firebase/app";
import "firebase/storage";

export default {
    actions: {
        async uploadToStorage(_state, { file, path }) {
            return await firebase
                .storage()
                .ref()
                .child(path + Math.random() + file.name)
                .put(file)
                .then(async (snapshot) => {
                    console.log("Uploaded", snapshot.totalBytes, "bytes.");
                    console.log("File metadata:", snapshot.metadata);
                    return await snapshot.ref.getDownloadURL();
                })
                .catch((error) => {
                    console.error(`Upload failed:, ${error}`);
                    throw error;
                });
        },

        async removeFromStorage(_state, url) {
            return await firebase
                .storage()
                .refFromURL(url)
                .delete()
                .then(() => console.log(`File ${url} deleted from storage`))
                .catch((error) => {
                    console.log(`Problem to delete file  ${error}`);
                    throw error;
                });
        },

        async writeToDatabase(_state, { payload, path }) {
            try {
                return await firebase.database().ref(path).set(payload);
            } catch (error) {
                console.log(`Error writing to database: ${error}`);
                throw error;
            }
        },

        async readFromDatabase(_state, path) {
            try {
                return (
                    await firebase.database().ref(path).once("value")
                ).val();
            } catch (error) {
                console.log(`Error reading from database: ${error}`);
                throw error;
            }
        },
    },
};
