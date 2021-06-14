import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from 'react-navigation/native'
import { createStackNavigator } from 'react-navigation/stack'

import Home from './screens/Homescreen';
import Spacecraft from './screens/Spacecraftscreen';
import Dailypic from './screens/Dailypic';
import Starmapscreen from './screens/Starmapscreen'



export default function App() {
  return (
    <NavigationContainer>

      <StackNavigator initialRouteName="Home" screenOptions={{
        headerShown : false
      }} >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="starmap" component={Starmapscreen} />
        <Stack.Screen name="spacecraft" component={Spacecraftscreen} />
        <Stack.Screen name="Dailypic" component={Dailypic} />

      </StackNavigator>

    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
