import React from 'react'
import { View, Text, FlatList } from 'react-native'
import FeedPostListItem from './item'
import ProfilePostListItem from './item'
import styles from './styles'

export default function FeedPostList({ posts }) {
    return (
        <View style={styles.container}>
            <FlatList
                numColumns={1}
                removeClippedSubviews
                nestedScrollEnabled
                data={posts}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (<FeedPostListItem item={item} />)}
            />
        </View>
    )
}

// import React from 'react'
// import { View, Text, FlatList } from 'react-native'
// import ProfilePostListItem from './item'
// import styles from './styles'

// export default function ProfilePostList({ posts }) {
//     return (
//         <View style={styles.container}>
//             <FlatList
//                 numColumns={1}
//                 removeClippedSubviews
//                 nestedScrollEnabled
//                 data={posts}
//                 keyExtractor={(item) => item.id}
//                 renderItem={({ item }) => (<ProfilePostListItem item={item} />)}
//             />
//         </View>
//     )
// }

