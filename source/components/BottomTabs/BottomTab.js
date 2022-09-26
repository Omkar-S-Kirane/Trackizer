import React from 'react';
import {Image} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../../../source/screens/Home';
import Register1 from '../../../source/screens/Register1';
import Register2 from '../../../source/screens/Register2';
import Login from '../../../source/screens/Login';
import YourSubs from '../../../source/screens/YourSubs';

const home = require('../../../source/assets/icon/home.png');
const menu = require('../../../source/assets/icon/menu.png');
const add = require('../../../source/assets/icon/add.png');
const calendar = require('../../../source/assets/icon/calendar.png');
const folder = require('../../../source/assets/icon/folder.png');

const BottomTabs = () => {
  const stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const bottomTabScreen = () => {
    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            height: 50,
          },
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = (
                <Image source={home} style={{height: 14, width: 14}} />
              );
            } else if (route.name === 'Register1') {
              iconName = (
                <Image source={menu} style={{height: 14, width: 14}} />
              );
            } else if (route.name === 'Register2') {
              iconName = <Image source={add} style={{height: 14, width: 14}} />;
            } else if (route.name === 'Login') {
              iconName = (
                <Image source={calendar} style={{height: 14, width: 14}} />
              );
            } else if (route.name === 'YourSubs') {
              iconName = (
                <Image source={folder} style={{height: 14, width: 14}} />
              );
            }
            return iconName;
          },
        })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Register1" component={Register1} />
        <Tab.Screen name="Register2" component={Register2} />
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="YourSubs" component={YourSubs} />
      </Tab.Navigator>
    );
  };
    return (
      <NavigationContainer>
        <stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <stack.Screen name="Bottom" component={bottomTabScreen} />
        </stack.Navigator>
      </NavigationContainer>
    );
};
export default BottomTabs;
