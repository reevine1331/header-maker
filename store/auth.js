import firebase from "~/plugins/firebase";

export const state = () => ({
  authUser: firebase.auth().currentUser
})

export const mutations = {
  
}

export const actions = {
  login(state, platform) {
    if (!firebase.auth().currentUser) {
      if (platform === 'google') {
        firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider());
        state.authUser = firebase.auth().currentUser
      } else if (plateform === 'twitter') {

      }
    } else {
      console.log('ログイン済み', firebase.auth().currentUser.uid)
    }
    this.$router.push({
      path: "/"
    });
  },
  logout() {
    firebase.auth().signOut().then(() => {
      state.authUser = null;
      console.log('ログアウト')
    })
  }
}
