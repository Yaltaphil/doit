import firebase from "firebase/app";

export default {
    actions: {
        async login({ dispatch }, { email, password }) {
            try {
                await firebase
                    .auth()
                    .signInWithEmailAndPassword(email, password);
                const uid = await dispatch("getUid");
                console.log("Logged to firebase as...", uid);
            } catch (e) {
                console.log(e);
            }
        },

        async register({ dispatch }, { email, password }) {
            try {
                await firebase
                    .auth()
                    .createUserWithEmailAndPassword(email, password);
                const uid = await dispatch("getUid");
                // await firebase.database().ref(`/users/arrayIdx/${uid}`).set({});
                console.log(uid);
            } catch (e) {
                console.log(e);
            }
        },

        getUid() {
            const user = firebase.auth().currentUser;
            return user ? user.uid : null;
        },

        async logout() {
            try {
                await firebase.auth().signOut();
            } catch (e) {
                console.log(e);
            }
        },
    },
};
