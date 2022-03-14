import { UserInterfaceIdiom } from 'expo-constants'
import firebase from 'firebase'

let commentListenerInstance = null

export const getFeed = (uid = firebase.auth().currentUser.uid) => new Promise ((resolve, reject) => {
    firebase
    .firestore()
    .collection('post')
    .orderBy('likesCount', 'desc')
    .get()
    .then((res) => {
        const posts = res.docs.map((value) => {
            const id = value.id
            const data = value.data()
            return {id, ...data}
        })
        resolve(posts)
    })
})

export const getLiveChatComment = async (id) => new Promise((resolve, reject) => {
    firebase
        .firestore()
        .collection('user')
        .doc(id)
        .collection('comments') 
        .get()
        .then((res) => {
            resolve(res?.size || 0)
        })
})

export const getImageFeed = (uid = firebase.auth().currentUser.uid) => new Promise ((resolve, reject) => {
    firebase
    .firestore()
    .collection('post')
    .where('creator', '==', uid)
    .orderBy('likesCount', 'desc')
    .get()
    .then((res) => {
        const posts = res.docs.map((value) => {
            const id = value.id
            const data = value.data()
            return {id, ...data}
        })
        resolve(posts)
    })
})



export const getTextFeed = (uid = firebase.auth().currentUser.uid) => new Promise ((resolve, reject) => {
    firebase
    .firestore()
    .collection('text')
    .where('creator', '==', uid)
    .orderBy('creation', 'desc')
    .get()
    .then((res) => {
        const posts = res.docs.map((value) => {
            const id = value.id
            const data = value.data()
            return {id, ...data}
        })
        resolve(posts)
    })
})

export const getLikeById = (postId, uid) => new Promise((resolve, reject) => {
    firebase
    .firestore()
    .collection('post')
    .doc(postId)
    .collection('likes')
    .doc(uid)
    .get()
    .then((res) => resolve(res.exists))
})


export const updateLike = (postId, uid, currentLikeState) => {
    if(currentLikeState){
        firebase
        .firestore()
        .collection('post')
        .doc(postId)
        .collection('likes')
        .doc(uid)
        .delete()
    }else{
        firebase
        .firestore()
        .collection('post')
        .doc(postId)
        .collection('likes')
        .doc(uid)
        .set({})
    }
}

export const addComment = (postId, creator, comment) => {
    firebase.firestore()
    .collection('post')
    .doc(postId)
    .collection('comments')
    .add({
        creator,
        comment,
        creation: firebase.firestore.FieldValue.serverTimestamp(),
    })
}

export const addLiveChatComment = (user, creator, comment) => {
    firebase.firestore()
    .collection('user')
    .doc(user)
    .collection('comments')
    .add({
        creator,
        comment,
        creation: firebase.firestore.FieldValue.serverTimestamp(),
    })
}

export const commentListener = (postId,setCommentList) => {
    commentListenerInstance = firebase.firestore()
    .collection('post')
    .doc(postId)
    .collection('comments')
    .orderBy('creation', 'desc')
    .onSnapshot((snapshot) => {
        if(snapshot.docChanges().length == 0){
            return
        }
        let comments = snapshot.docs.map((value) => {
            const id = value.id
            const data = value.data()
            return {id, ...data}
        })
        setCommentList(comments)
    })
}

export const liveChatListener = (user ,setCommentList) => {
    liveChatListenerInstance = firebase.firestore()
    .collection('user')
    .doc(user)
    .collection('comments')
    .orderBy('creation', 'desc')
    .onSnapshot((snapshot) => {
        if(snapshot.docChanges().length == 0){
            return
        }
        let comments = snapshot.docs.map((value) => {
            const id = value.id
            const data = value.data()
            return {id, ...data}
        })
        setCommentList(comments)
    })
}

export const clearCommentListener = () => {
    if(commentListenerInstance != null){
        commentListenerInstance()
        commentListenerInstance = null
    }
}

export const clearLiveChatListener = () => {
    if(liveChatListenerInstance != null){
        liveChatListenerInstance()
        liveChatListenerInstance = null
    }
}

export const getPostsByUserId = (uid = firebase.auth().currentUser.uid) => new Promise((resolve, reject) => {
    firebase.firestore()
      .collection('post')
      .where('creator', '==', uid)
      .orderBy('creation', 'desc')
      .onSnapshot((snapshot) => {
        let posts = snapshot.docs.map(doc => {
          const data = doc.data()
          const id = doc.id
          return { id, ...data }
        })
        resolve(posts)
      })
  })

export const getImagePostsByUserId = (uid = firebase.auth().currentUser.uid) => new Promise((resolve, reject) => {
    firebase.firestore()
    .collection('posts')
    .doc(firebase.auth().currentUser.uid)
    .collection("userPosts")
      .where('creator', '==', uid)
      .orderBy('creation', 'desc')
      .onSnapshot((snapshot) => {
        let posts = snapshot.docs.map(doc => {
          const data = doc.data()
          const id = doc.id
          return { id, ...data }
        })
        resolve(posts)
      })
  })

export const getTextPostsByUserId = (uid = firebase.auth().currentUser.uid) => new Promise((resolve, reject) => {
    firebase.firestore()
    .collection('text')
    .doc(firebase.auth().currentUser.uid)
    .collection("userPosts")
      .where('creator', '==', uid)
      .orderBy('creation', 'desc')
      .onSnapshot((snapshot) => {
        let posts = snapshot.docs.map(doc => {
          const data = doc.data()
          const id = doc.id
          return { id, ...data }
        })
        resolve(posts)
      })
  })