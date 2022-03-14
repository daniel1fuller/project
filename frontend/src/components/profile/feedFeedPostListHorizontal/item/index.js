import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useUser } from '../../../../hooks/useUser';
import PostSingleOverlayImage from '../../../general/post/overlayImage';
import PostSingleOverlayQuickFeed from '../../../general/post/overlayQuickFeed';
import PostSingleOverlayQuickFeedFeed from '../../../general/post/overlayQuickFeedFeed';
import styles from './styles';
export default function ProfilePostListItem({ item }) {
    const navigation = useNavigation()
    const user = useUser(item.creator).data
    console.log(user)
    return (
        <View style={styles.container}>

        <View style={styles.container2}>
            <TouchableOpacity
                style={styles.container}
                onPress={() => navigation.navigate('feedButton', { creator: item.creator, profile: true })}>
                <Image style={styles.image} source={{ uri: item.media[1] }} />
            </TouchableOpacity>
        </View>

<View style={styles.displayNameBox}>
<TouchableOpacity

    onPress={() => navigation.navigate('profileOther', { initialUserId: user?.uid })}>
        <View style={styles.insideButton}>
    <Image style={styles.avatarSmall} source={{ uri: user?.photoURL }} />
  <Text style={styles.displayNameText}>@{user?.displayName}</Text>
  </View>
</TouchableOpacity>
        </View>

        <PostSingleOverlayQuickFeedFeed user={user} post={item}  /> 

        </View>
    )
}