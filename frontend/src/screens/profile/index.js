import React, { useContext, useEffect, useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { useSelector } from 'react-redux'
import styles from './styles'
import ProfileNavBar from 'frontend/src/components/profile/navBar/index.js'
import ProfileHeader from '../../components/profile/header'
import ProfilePostList from '../../components/profile/postList'
import { SafeAreaView } from 'react-native-safe-area-context'
import { CurrentUserProfileItemInViewContext } from '../../navigation/feed'
import {useUser} from '../../hooks/useUser'
import { getPostsByUserId } from '../../services/posts'
import PopHeader from '../../services/PopHeader'
import ProfilePostListHorizontal from '../../components/profile/postListHorizontal'





export default function ProfileScreen({route}) {

    const {initialUserId} = route.params
    const [userPosts, setUserPosts] = useState([])
    

    let provideUserId = null
    if(CurrentUserProfileItemInViewContext != null){
        provideUserId = useContext(CurrentUserProfileItemInViewContext)
    }

    const user = useUser(initialUserId ? initialUserId : provideUserId).data

    useEffect(() => {
        if(user===undefined){
            return
        }
getPostsByUserId(user.uid).then(setUserPosts)
    }, [user])

if(user===undefined){
    return<></>
}

    return (
        <SafeAreaView style={styles.container}>
            <PopHeader />
            <ScrollView >
            <ProfileHeader user={user}/>
            <ProfilePostListHorizontal posts={userPosts}/>
            <ProfilePostList  user={user} posts={userPosts} />
            </ScrollView>
        </SafeAreaView>
    )
}
