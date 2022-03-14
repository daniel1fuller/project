// import React, { useContext, useEffect, useRef, useState } from 'react'
// import { Dimensions, FlatList, View, RefreshControl } from 'react-native'
// import useMaterialNavBarHeight from '../../hooks/useMaterialNavBarHeight'
// import PostSingle from '../../components/general/post'
// import { getFeed, getPostsByUserId } from '../../services/posts'
// import { SafeAreaView } from 'react-native-safe-area-context'
// import PopHeader from '../../services/PopHeader'
// import ProfilePostListHorizontal from '../../components/profile/postListHorizontal'
// import { ScrollView } from 'react-native-gesture-handler'
// import ProfilePostList from '../../components/profile/postList'
// import { useUser } from '../../hooks/useUser'
// import { CurrentUserProfileItemInViewContext } from '../../navigation/feed'
// import firebase from 'firebase'
// import FeedPostList from '../../components/profile/feedPostList'
// import FeedPostListHorizontal from '../../components/profile/feedPostListHorizontal'
// import FeedFeedPostListHorizontal from '../../components/profile/feedFeedPostListHorizontal'
// import styles from './styles'

// /**
//  * Component that renders a list of posts meant to be 
//  * used for the feed screen.
//  * 
//  * On start make fetch for posts then use a flatList 
//  * to display/control the posts.
//  */
// export default function Nothing({ route,item }) {
//     const { setCurrentUserProfileItemInView, creator, profile } = route.params
//     const [posts, setPosts] = useState([])
//     const mediaRefs = useRef([])
//     const [userPosts, setUserPosts] = useState([])
//     const user = useUser(firebase.auth().currentUser.uid).data
//     const {initialUserId} = route.params

//     const [refreshing, setRefreshing] = useState(false)


// console.log(user)

//     let provideUserId = null
//     if(CurrentUserProfileItemInViewContext != null){
//         provideUserId = useContext(CurrentUserProfileItemInViewContext)
//     }

//     useEffect(() => {
//         if (profile) {
//             getPostsByUserId(creator).then(setPosts)
//         } else {
//             getFeed().then(setPosts)
//         }
//     }, [])


//     /**
//      * Called any time a new post is shown when a user scrolls
//      * the FlatList, when this happens we should start playing 
//      * the post that is viewable and stop all the others
//      */
//     const onViewableItemsChanged = useRef(({ changed }) => {
//         changed.forEach(element => {
//             const cell = mediaRefs.current[element.key]
//             if (cell) {
//                 if (element.isViewable) {
//                     if (!profile) {
//                         setCurrentUserProfileItemInView(element.item.creator)
//                     }
//                     cell.play()
//                 } else {
//                     cell.stop()
//                 }
//             }

//         });
//     })

//     const feedItemHeight = Dimensions.get('window').height - useMaterialNavBarHeight(profile);
//     /**
//      * renders the item shown in the FlatList
//      * 
//      * @param {Object} item object of the post 
//      * @param {Integer} index position of the post in the FlatList 
//      * @returns 
//      */
//     const renderItem = ({ item, index }) => {
//         return (
//             <View style={{ height: feedItemHeight, backgroundColor: 'black' }}>
//                 <PostSingle item={item} ref={PostSingleRef => (mediaRefs.current[item.id] = PostSingleRef)} />
//             </View>
//         )
//     }

//     return (
//         <View style={styles.container}>
//             <FlatList
//                 data={posts}
//                 windowSize={4}
//                 initialNumToRender={0}
//                 maxToRenderPerBatch={2}
//                 removeClippedSubviews
//                 viewabilityConfig={{
//                     itemVisiblePercentThreshold: 0
//                 }}
//                 renderItem={item}
//                 pagingEnabled
//                 keyExtractor={item => item.id}
//                 decelerationRate={'normal'}
//                 onViewableItemsChanged={onViewableItemsChanged.current}
//             />
//         </View>
//     )
// }
