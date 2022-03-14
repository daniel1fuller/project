import React from 'react'
import { View, Text, FlatList } from 'react-native'
import ImagePostListItem from './item'
import ProfilePostListItem from './item'
import styles from './styles'

export default function ImagePostList({ posts }) {
    return (
        <View style={styles.container}>
            <FlatList
                numColumns={1}
                removeClippedSubviews
                nestedScrollEnabled
                data={posts}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (<ImagePostListItem item={item} />)}
            />
        </View>
    )
}
