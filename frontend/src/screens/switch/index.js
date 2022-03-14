import React, { useContext, useEffect, useState } from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'
import styles from './styles'
import ProfileNavBar from 'frontend/src/components/profile/navBar/index.js'
import ProfileHeader from '../../components/profile/header'
import ProfilePostList from '../../components/profile/postList'
import { SafeAreaView } from 'react-native-safe-area-context'
import FeedNavigation, { CurrentUserProfileItemInViewContext } from '../../navigation/feed'
import {useUser} from '../../hooks/useUser'
import { getPostsByUserId } from '../../services/posts'
import ProfileScreen from '../profile'
import SearchScreen from '../search'
import ChatScreen from '../chat/list'
import { Feather } from '@expo/vector-icons'
import { render } from 'react-dom'
import { useNavigation } from '@react-navigation/native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'

const Tab = createMaterialBottomTabNavigator()

export default function SwitchScreen() {

    return(
<Tab.Navigator
            barStyle={{ backgroundColor: 'black' }}
            initialRouteName="Discover">

            <Tab.Screen
                name="Discover"
                component={SearchScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Feather name="search" size={24} color={color} />
                    )
                }}
            />

<Tab.Screen
                name="feed"
                fontFamily= {"Quicksand_400Regular"}
                component={FeedNavigation}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Feather name="home" size={24} color={color} />
                    )
                }}
            />

</Tab.Navigator>
    )
}