import React, { useEffect, useState } from 'react'
import { View, Text, Image, TextInput, TouchableOpacity, FlatList } from 'react-native'
import { useSelector } from 'react-redux'
import styles from './styles'
import { Ionicons } from '@expo/vector-icons'
import { addComment, addLiveChatComment, clearLiveChatListener, liveChatListener } from '../../../services/posts'
import CommentItem from './item'
import {generalStyles} from '../../../styles'
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet'

const LiveChatModal = ({ user }) => {
    const [comment, setComment] = useState('')
    const [commentList, setCommentList] = useState('')
    const currentUser = useSelector(state => state.auth.currentUser)

    useEffect(() => {
        liveChatListener(user.uid, setCommentList)
        return () => clearLiveChatListener()
    }, [])

    const handleCommentSend = () => {
        if (comment.length == 0) {
            return;
        }
        setComment('')
        addLiveChatComment(user.uid, currentUser.uid, comment)
    }

    const renderItem = ({ item }) => {
        return <CommentItem item={item} />
    }

    return (
        <View style={styles.container}>
            <BottomSheetScrollView>
            <FlatList
                data={commentList}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
            </BottomSheetScrollView>
            <View style={styles.containerInput}>
                <Image
                    style={generalStyles.avatarSmall}
                    source={{ uri: currentUser.photoURL }} />
                <TextInput
                    value={comment}
                    onChangeText={setComment}
                    placeholder='Add comment'
                    style={styles.input}
                />
                <TouchableOpacity onPress={() => handleCommentSend()}>
                    <Ionicons name="arrow-up-circle" size={34} color={'crimson'} />
                </TouchableOpacity>
            </View>   
        </View>
    )
}

export default LiveChatModal
