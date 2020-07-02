//import React from 'react';
//import { Image } from 'react-native';
import { createAppContainer ,createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import BookDonateScreen  from  '../screens/bookDonateScreen'
import BookRequestScreen  from  '../screens/bookRequestScreen'

export const AppTabNavigator=createBottomTabNavigator ({
    DonateBooks: {
        screen: BookDonateScreen,
        navigationOptions: {
            tabBarLabel: "Book request"
        }


    },
    RequestBook: {
            screen: BookRequestScreen,
            navigationOptions: {
                tabBarLabel: "Book request"
            
            }
        }
});