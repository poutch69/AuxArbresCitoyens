import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/Home';
import SignUpScreen from './screens/SignUp';
import Connexion from './screens/Connexion';
import MapPage from './screens/MapPage';
import TabBasedNavigation from './screens/TabBasedNavigation';
import MenuPage from './screens/MenuPage';


const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      {/* screenOptions={{headerShown: false}} */}
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='SignUp' component={SignUpScreen}/>
        <Stack.Screen name='Connexion' component={Connexion}/>
        <Stack.Screen name='MapPage' component={MapPage}/>
        <Stack.Screen name='TabBasedNavigation' component={TabBasedNavigation}/>
        <Stack.Screen name='MenuPage' component={MenuPage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default MyStack;