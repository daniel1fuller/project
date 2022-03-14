import React, { useState } from 'react'
import { View, TextInput, Image, Button } from 'react-native'

import firebase from 'firebase'
import { NavigationContainer } from '@react-navigation/native'
require("firebase/firestore")
require("firebase/firebase-storage")


export default function SaveImageScreen(props) {
    const [caption, setCaption] = useState("")

    const uploadImage = async () => {
        const uri = props.route.params.image;
        const childPath = `post/${firebase.auth().currentUser.uid}/${Math.random().toString(36)}`;
        console.log(childPath)

        const response = await fetch(uri);
        const blob = await response.blob();

        const task = firebase
            .storage()
            .ref()
            .child(childPath)
            .put(blob);

        const taskProgress = snapshot => {
            console.log(`transferred: ${snapshot.bytesTransferred}`)
        }

        const taskCompleted = () => {
            task.snapshot.ref.getDownloadURL().then((snapshot) => {
                savePostData(snapshot);
                console.log(snapshot)
            })
        }

        const taskError = snapshot => {
            console.log(snapshot)
        }

        task.on("state_changed", taskProgress, taskError, taskCompleted);
    }

    const savePostData = (media) => {
        firebase.firestore()
            .collection('post')
            .add({
                creator: firebase.auth().currentUser.uid,
                media,
                type: 1,
                caption,
                likesCount: 0,
                commentsCount: 0,
                creation: firebase.firestore.FieldValue.serverTimestamp()
            })
            .then((function () {
                props.navigation.navigate('feed')
            }))
        }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image source={{ uri: props.route.params.image }} />
            <TextInput
                maxLength={50}
                placeholder="Write a Caption . . ."
                onChangeText={(caption) => setCaption(caption)}
            />

            <Button title="saveImage" onPress={() => uploadImage()} />
        </View>
    )
}