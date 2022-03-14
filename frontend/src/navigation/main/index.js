import React, { useEffect } from 'react'
import { View, Text, StatusBar } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { userAuthStateListener } from '../../redux/actions';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthScreen from '../../screens/auth'
import HomeScreen from '../home';
import SavePostScreen from '../../screens/savePost';
import EditProfileScreen from '../../screens/profile/edit';
import EditProfileFieldScreen from '../../screens/profile/edit/field';
import Modal from 'frontend/src/components/modal/index.js';
import ProfileScreen from '../../screens/profile';
import FeedScreen from '../../screens/feed';
import { useState } from 'react';
import ChatSingleScreen from '../../screens/chat/single';
import FeedButton from '../../screens/feedButton';
import PhotoScreen from '../../screens/cameraPhoto';
import SaveImageScreen from '../../screens/savePhoto';
import ChatScreen from '../../screens/chat/list';
import CameraScreen from '../../screens/camera';

const Stack = createStackNavigator()

export default function Route() {
    const currentUserObj = useSelector(state => state.auth)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userAuthStateListener());
    }, [])

    if (!currentUserObj.loaded) {
        return (
            <View></View>
        )
    }

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{fontSize: 14}}>
                {currentUserObj.currentUser == null ?
                    <Stack.Screen name="auth" component={AuthScreen} options={{ headerShown: false }} />
                    :
                    <>
                        <Stack.Screen name="home" component={HomeScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="savePost" component={SavePostScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="saveImage" component={SaveImageScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="videoScreen" component={CameraScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="photoScreen" component={PhotoScreen} options={{ headerShown: false }} />


                        <Stack.Screen name="userPosts" component={FeedScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="feedButton" component={FeedButton} options={{ headerShown: false }} />
                        <Stack.Screen name="profileOther" component={ProfileScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="editProfile" component={EditProfileScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="editProfileField" component={EditProfileFieldScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="chatSingle" component={ChatSingleScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="chatScreen" component={ChatScreen} options={{ headerShown: false }} />
                    </>
                }
            </Stack.Navigator>
            <Modal />
        </NavigationContainer>
    )
}
