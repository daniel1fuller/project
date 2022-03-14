import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import PostSingleOverlayImage from '../../../../components/general/post/overlayImage';
import { useUser } from '../../../../hooks/useUser';

import styles from './styles';
export default function ImagePostListItem({ item}) {
    const navigation = useNavigation()
    const user = useUser(item.creator).data
    console.log(user)
    return (
        <>
        <TouchableOpacity
            style={styles.container}
            onPress={() => navigation.navigate('feedButton', { creator: item.creator, profile: true })}>
            <Image style={styles.image} source={{ uri: item.media }} />
        </TouchableOpacity>
        <PostSingleOverlayImage user={user} post={item}  /> 
        </>
    )
}

