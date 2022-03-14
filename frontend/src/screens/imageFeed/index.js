import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, Image, FlatList, Button } from 'react-native'

import firebase from 'firebase'
require('firebase/firestore')
import { connect } from 'react-redux'
import { getFeed, getImageFeed, getImageFeedTwo, getTextFeed } from '../../services/posts'
import { useUser } from '../../hooks/useUser'
import PostSingleOverlayImage from '../../components/general/post/overlayImage'
import PostSingleOverlayQuickFeed from '../../components/general/post/overlayQuickFeed'
import PostSingleOverlayQuickFeedFeed from '../../components/general/post/overlayQuickFeedFeed'
import ImagePostListItem from './imagePostList/item'
import { SafeAreaView } from 'react-native-safe-area-context'
import PopHeader from '../../services/PopHeader'
import ImagePostList from './imagePostList'
import { ScrollView } from 'react-native-gesture-handler'

function ImageFeedScreen(props, item) {
    const [posts, setPosts] = useState([]);
    const [postsTwo, setPostsTwo] = useState([]);
    const user = useUser(firebase.auth().currentUser.uid).data

    useEffect(() => {
            getImageFeed()
            // getImageFeedTwo()
            // getTextFeed()firebase.auth().currentUser.uid
            .then(setPosts)
    }, [])


    // const user = useUser(item.creator).data

    // useEffect(() => {
    //     let posts = [];
    //     if(props.usersLoaded == props.following.length){
    //         for (let i = 0; i < props.following.length; i++){
    //             const user = props.users.find(el => el.uid === props.following[i]);
    //             if(user != undefined){
    //                 posts = [...posts, ...user.posts];
    //             }
    //         }

    //         posts.sort(function(x,y) {
    //             return x.creation - y.creation;
    //         })

    //         setPosts(posts);
    //     }

    // }, [props.usersLoaded])

    return (
        <SafeAreaView style={styles.container}>
            <PopHeader />
            <ScrollView>
            <ImagePostList user={user} posts={posts}/>
            </ScrollView>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerInfo: {
        margin: 20
    },
    containerGallery: {
        flex: 1
    },
    containerImage: {
        flex: 1 / 3

    },
    image: {
        flex: 1,
        aspectRatio: 1 / 1
    }
})

export default ImageFeedScreen