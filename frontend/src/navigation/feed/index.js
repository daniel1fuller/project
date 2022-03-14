import { View, Text } from 'react-native';
import React, { createContext, useState } from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import FeedScreen from '../../screens/feed'
import ProfileScreen from '../../screens/profile'
import FeedButton from '../../screens/feedButton';

const {Screen, Navigator} = createMaterialTopTabNavigator()

export const CurrentUserProfileItemInViewContext = createContext(null)

const FeedNavigation = () => {

const [currentUserProfileItemInView, setCurrentUserProfileItemInView] = useState(null)

  return (

    <Navigator
    initialRouteName='feedList'
    tabBar={() => <></>}
    >

<Screen name="feedList" component={FeedScreen} initialParams={{setCurrentUserProfileItemInView, profile: false }}/>
{/* <Screen name="feedVideo" component={FeedButton} initialParams={{initialUserId: null}}/> */}

    </Navigator>
  );
};

export default FeedNavigation;
