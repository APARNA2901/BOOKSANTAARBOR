import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer ,createSwitchNavigator } from 'react-navigation';


import WelcomeScreen from './screens/welcomeScreen';
import {AppTabNavigator} from './components/AppTabNavigator'

export default function App() {
  return (
    <AppContainer/>
    
  );
}

const switchTabNavigator= createSwitchNavigator({
  WelcomeScreen: {
    screen: WelcomeScreen
  },
  BottomTab: {
    screen: AppTabNavigator
  }
  
});

const AppContainer= createAppContainer(switchTabNavigator);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
