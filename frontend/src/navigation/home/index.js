import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { Feather } from '@expo/vector-icons';
import CameraScreen from '../../screens/camera';
import ProfileScreen from '../../screens/profile';
import SearchScreen from '../../screens/search';
import FeedScreen from 'frontend/src/screens/feed/index.js';
// import FeedNavigation from '../feed';
import firebase from 'firebase';
import FeedNavigation from '../feed';
import ChatScreen from '../../screens/chat/list';
import SwitchScreen from '../../screens/switch';
import { Switch } from 'react-native-paper';
import { useChats } from '../../hooks/useChats';
import styles from './styles'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ImageFeedScreen from 'frontend/src/screens/imageFeed/index.js'
import ImagePostList from '../../screens/imageFeed';
import FeedButton from '../../screens/feedButton';

// const Tab = createMaterialBottomTabNavigator()

const BottomTab = createBottomTabNavigator()

const EmptyScreen = () => {
    return <View></View>
}

export default function HomeScreen() {
    useChats()
    return (
        <BottomTab.Navigator
            barStyle={{ backgroundColor: 'white'}}
            initialRouteName="feed"
            screenOptions={{headerShown:false, tabBarShowLabel:false, tabBarStyle:{height:66}}}

            >
                
            <BottomTab.Screen
                name="feed"
                component={FeedNavigation}
                options={{
                    tabBarIcon: () =>{return <View style={{height:55, width:52, marginTop:23, justifyContent:'center', alignItems:'center' }}><Image style={{height:33, width:25, marginBottom:20,  }} source={require('frontend/assets/home.png')}/></View>},
                }}
                
            />
            <BottomTab.Screen
                name="search"
                tabBarLabel='search'
                component={EmptyScreen}
                options={{
                    tabBarIcon: () =>{return <View style={{height:55, width:52, marginTop:23, justifyContent:'center', alignItems:'center' }}><Image style={{height:33, width:25, marginBottom:20,  }} source={require('frontend/assets/video.png')}/></View>},
                }}
                title={<Text style={{ fontSize: 10, fontFamily:'Quicksand_400Regular' }}>hello</Text>}
            />
            <BottomTab.Screen
                name="Add"
                component={ProfileScreen}
                options={{
                    tabBarIcon: () =>{return <View style={{height:55, width:52, marginTop:20, justifyContent:'center', alignItems:'center' }}><Image style={{height:42, width:25, marginBottom:26,  }} source={require('frontend/assets/you.png')}/></View>},
                }}
                initialParams={{ initialUserId: firebase.auth().currentUser.uid }}
            />
            <BottomTab.Screen
                name="chat"
                tabBarLabel='chat'
                component={CameraScreen}
                options={{
                    tabBarIcon: () =>{return <View style={{height:55, width:52, marginTop:23, justifyContent:'center', alignItems:'center' }}><Image style={{height:33, width:21, marginBottom:20,  }} source={require('frontend/assets/add.png')}/></View>},
                    // headerTitleStyle: <Text style={{ fontSize: 10, fontFamily:'Quicksand_400Regular' }}></Text>
                }}
            />
            <BottomTab.Screen
                name="pop"
                component={EmptyScreen}
                options={{
                    tabBarIcon: () =>{return <View style={{height:55, width:52, margin:-6 }}><Image style={{height:52, width:52, marginBottom:20 }} source={require('frontend/assets/popcircle.png')}/></View>},
                    // headerTitleStyle: <Text style={{ fontSize: 10, fontFamily:'Quicksand_400Regular' }}></Text>
                }}
                
                
            />
        </BottomTab.Navigator>

    )
}

{/* <TouchableOpacity style={{borderColor:'black', borderWidth:1, height:20, width:20,flex:1}}> */}
