import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import MapPage from './MapPage';
import MenuPage from './MenuPage';

const Tab = createBottomTabNavigator();


const TabBasedNavigation = ({ navigation }) => {
    return (
        <Tab.Navigator 
            tabBarOptions={{ activeTintColor: 'tomato', inactiveTintColor: 'gray'}}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
      
                  if (route.name === 'MapPage') {
                    iconName = focused ? 'earth' : 'earth-outline';
                  } else if (route.name === 'MenuPage') {
                    iconName = focused ? 'apps' : 'apps-outline';
                  }
    
                  return <Ionicons name={iconName} size={30} color={'red'} />;
                },
              })}
        >
            <Tab.Screen name='MapPage' component={MapPage}/>
            <Tab.Screen name='MenuPage' component={MenuPage}/>               
        </Tab.Navigator>
    );
};


export default TabBasedNavigation;