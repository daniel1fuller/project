import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from './styles'
import { Feather } from '@expo/vector-icons'
import { getLiveChatComment } from './posts'
import { useDispatch, useSelector } from 'react-redux'
import { openLiveChatModal } from '../redux/actions/modal'
import { useNavigation } from '@react-navigation/native'
import { useUser } from '../hooks/useUser'

export default function PopHeader( {route, item, user} ) {
    const currentUser = useSelector((state) => state.auth.currentUser);
    // const user = useUser(item.creator).data
    const [comment, setComment] = useState("0")
    const dispatch = useDispatch()
    const navigation = useNavigation()

    useEffect(() => {
        getLiveChatComment(currentUser.uid).then((res) => {
          setComment(res)
        })
      }, []);

    return (
        <View style={styles.container}>
        <View style={styles.logoContainer}>
            <Text style={styles.text}>popcircle</Text>
        </View>
        <View style={styles.rightContainer}>
            <TouchableOpacity style={styles.buttonContainer}>
            <Feather name="plus-circle" size={24} color="black" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.popIconButton}
            onPress={() => navigation.navigate('chatScreen')}
            >
            <View style={styles.popIcon}>
                <Image style={styles.inboxIcon} source={require('frontend/assets/inbox.png')}/>
            </View>
                <Text style={styles.popIconText}>
                    Inbox
                </Text>
            </TouchableOpacity>


            <TouchableOpacity
            style={styles.popIconButton}
            // onPress={() => dispatch(openLiveChatModal(true, user))}
            >
                <Text style={styles.liveChatText}>live chat</Text>
                <Text style={styles.popIconText}>
                    {comment}
                </Text>
            </TouchableOpacity>


        </View>
        </View>
    )
}