import React from 'react'
import { View, Text, FlatList } from 'react-native'
import ProfilePostListItem from './item'
import styles from './styles'

export default function ProfilePostListHorizontal({ posts }) {
    return (
        <View style={styles.container}>
            <FlatList
            horizontal
                numColumns={1}
                removeClippedSubviews
                nestedScrollEnabled
                data={posts}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (<ProfilePostListItem item={item} />)}
            />
        </View>
    )
}
