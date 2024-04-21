import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import BookingScreen from '../Screens/BookingScreen/BookingScreen';
import ProfileScreen from '../Screens/ProfileScreen/ProfileScreen';
import { View, Text } from 'react-native';
import Colors from '../Utils/Colors';
import { FontAwesome } from '@expo/vector-icons';
import HomeNavigation from './HomeNavigation';
import 'react-native-gesture-handler';

const Tab = createBottomTabNavigator();

export default function CustomTabNavigation() {
  return (
    <Tab.Navigator 
    screenOptions={{
        headerShown:false,
        tabBarActiveTintColor:Colors.PRIMARY
    }}>
      <Tab.Screen name="home" component={HomeNavigation} 
      options={{
        tabBarLabel:({color}) => (
            <Text style={{color:color,fontSize:12,marginTop:-7}}>Home</Text>
        ),
        tabBarIcon:({color,size}) => <FontAwesome name="home" size={24} color={color} />
      }}
      />
      <Tab.Screen name="booking" component={BookingScreen} 
            options={{
                tabBarLabel:({color}) => (
                    <Text style={{color:color,fontSize:12,marginTop:-7}}>Booking</Text>
                ),
                tabBarIcon:({color,size}) => <FontAwesome name="bookmark" size={24} color={color} />
              }}
      />
      <Tab.Screen name="Profile" component={ProfileScreen} 
            options={{
                tabBarLabel:({color}) => (
                    <Text style={{color:color,fontSize:12,marginTop:-7}}>Profile</Text>
                ),
                tabBarIcon:({color,size}) => <FontAwesome name="user-circle" size={24} color={color} />
              }}
      />
    </Tab.Navigator>
  );
}
