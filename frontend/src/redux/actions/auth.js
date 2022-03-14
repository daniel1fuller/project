import firebase from 'firebase'
require('firebase/firebase-auth')

import { USER_STATE_CHANGE, CLEAR_DATA } from '../constants'
import { getImagePostsByUser, getPostsByUser, getTextPostsByUser } from './post'

export const userAuthStateListener = () => dispatch => {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            dispatch(getCurrentUserData())
            dispatch(getPostsByUser(firebase.auth().currentUser.uid))
            dispatch(getImagePostsByUser(firebase.auth().currentUser.uid))
            dispatch(getTextPostsByUser(firebase.auth().currentUser.uid))
        } else {
            dispatch({ type: USER_STATE_CHANGE, currentUser: null, loaded: true })
        }
    })
}

export const getCurrentUserData = () => dispatch => {
    firebase.firestore()
        .collection('user')
        .doc(firebase.auth().currentUser.uid)
        .onSnapshot((res) => {
            if (res.exists) {
                return dispatch({
                    type: USER_STATE_CHANGE,
                    currentUser: res.data(),
                    loaded: true
                })
            }
        })
}

export const login = (email, password) => dispatch => new Promise((resolve, reject) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            resolve()
        })
        .catch(() => {
            reject()
        })
})

export const register = (email, password) => dispatch => new Promise((resolve, reject) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .add({
        liveChatCount:0
    })
        .then(() => {
            resolve()
        })
        .catch((error) => {
            reject(error)
        })
})

export function clearData(){
    return((dispatch) => {
        dispatch({type: CLEAR_DATA})
    })
}