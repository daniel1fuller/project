import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { Avatar } from 'react-native-paper'
import { buttonStyles } from '../../../styles'
import styles from './styles'
import firebase from 'firebase'
import { Feather } from '@expo/vector-icons'
import { useFollowing } from '../../../hooks/useFollowing'
import { useFollowingMutation } from '../../../hooks/useFollowingMutation'

/**
 * Renders the header of the user profile and
 * handles all of the actions within it like follow, unfollow and
 * routing to the user settings.
 * 
 * @param {Object} props 
 * @param {Object} props.user information of the user to display 
 * @returns 
 */
export default function ProfileHeader({ user }) {
    const navigation = useNavigation()

    const isFollowing = useFollowing(firebase.auth().currentUser.uid, user.uid).data
    const isFollowingMutation = useFollowingMutation()
    const renderFollowButton = () => {
        if (isFollowing) {
            return (
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity
                        style={buttonStyles.grayOutlinedButton}
                        onPress={() => navigation.navigate('chatSingle', { contactId: user.uid })}
                    >
                        <Text style={buttonStyles.grayOutlinedButtonText}>Message</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={buttonStyles.grayOutlinedIconButton}
                        onPress={() => isFollowingMutation.mutate({ otherUserId: user.uid, isFollowing })}

                    >
                        <Feather name="user-check" size={20} />
                    </TouchableOpacity>
                </View>
            )
        } else {
            return (
                <TouchableOpacity
                    style={buttonStyles.filledButton}
                    onPress={() => isFollowingMutation.mutate({ otherUserId: user.uid, isFollowing })}
                >
                    <Text style={buttonStyles.filledButtonText}>Follow</Text>
                </TouchableOpacity>
            )

        }
    }

    return (
        <View style={styles.container}>

            <View style={styles.infoBox}>
            <Image style={styles.image} source={{ uri: user?.photoURL }} />
            <Text style={styles.infoText}>{user?.name}</Text>
            <Text style={styles.infoText}>@{user?.displayName}</Text>
            <Text style={styles.infoText}>Atlanta, Georgia</Text>
            <Text style={styles.infoText}>1,245,178,354 followers</Text>
            <TouchableOpacity
                style={buttonStyles.aboutMeButton}
                // onPress={() => isFollowingMutation.mutate({ otherUserId: user.uid, isFollowing })}
            >
                <Text style={buttonStyles.aboutMeButtonText}>About Me</Text>
            </TouchableOpacity>
            </View>

            <View style={styles.counterContainer}>
                <View style={styles.counterItemContainer}>
                    <Text style={styles.counterNumberText}>0</Text>
                    <Text style={styles.counterLabelText}>Circle</Text>
                    <TouchableOpacity
                style={buttonStyles.bottomButtons}
                // onPress={() => isFollowingMutation.mutate({ otherUserId: user.uid, isFollowing })}
            >
                <Text style={buttonStyles.bottomButtonsText}>Follow</Text>
            </TouchableOpacity>
                </View>
                {/* <View style={styles.counterItemContainer}>
                    <Text style={styles.counterNumberText}>0</Text>
                    <Text style={styles.counterLabelText}>Family</Text>
                    <TouchableOpacity
                style={buttonStyles.bottomButtons}
                // onPress={() => isFollowingMutation.mutate({ otherUserId: user.uid, isFollowing })}
            >
                <Text style={buttonStyles.bottomButtonsText}>Add</Text>
            </TouchableOpacity>
                </View> */}
                <View style={styles.counterItemContainer}>
                    <Text style={styles.counterNumberText}>0</Text>
                    <Text style={styles.counterLabelText}>Saved</Text>
                    <TouchableOpacity
                style={buttonStyles.bottomSaveButton}
                // onPress={() => isFollowingMutation.mutate({ otherUserId: user.uid, isFollowing })}
            >
                <Text style={buttonStyles.bottomButtonsText}>Save</Text>
            </TouchableOpacity>
                </View>
            </View>
            {firebase.auth().currentUser.uid === user.uid ?
<>
                <TouchableOpacity
                    style={buttonStyles.grayOutlinedButton}
                    onPress={() => navigation.navigate('editProfile')}
                >
                    <Text style={buttonStyles.grayOutlinedButtonText}>Edit Profile</Text>
                </TouchableOpacity>
</>
                
                :
                renderFollowButton()
            }
        </View>
    )
}