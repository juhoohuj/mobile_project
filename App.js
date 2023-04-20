import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { HomeScreen } from './components/HomeScreen';
import { AddScreen } from './components/AddScreen';
import { ProfileStack } from './components/ProfileStack';
import { ProfileScreen } from './components/ProfileScreen';
import styles from './styles/Styles';
import { useFonts } from 'expo-font';
import React from 'react';


const MyTheme = {
    ...DefaultTheme,
    //colors: {
    //  ...DefaultTheme.colors,
    //  background:'#647AA3'
    //},
  };


const Tab = createBottomTabNavigator();

const Nav = () => {
  return (
    <NavigationContainer style={styles.bottomNav}>
       <Tab.Navigator
         screenOptions={{ headerShown: false }}
         tabBarOptions={{
           activeTintColor: 'blue',
           inactiveTintColor: 'gray',
           style: { backgroundColor: '#191D32' },
         }}
       >
        <Tab.Screen name="Home" component={HomeScreen} options={{tabBarIcon: ()=> <AntDesign name="home" size={24} color="#191D32" />}} />
        <Tab.Screen name="Add" component={AddScreen} options={{tabBarIcon: ()=> <AntDesign name="plus" size={24} color="#191D32" />}} />
        <Tab.Screen name="Profile" component={ProfileScreen} options={{tabBarIcon: ()=> <AntDesign name="areachart" size={24} color="#191D32" />}}  />
      </Tab.Navigator>
    </NavigationContainer>
  );
}



export default function App() {
  const [fontsLoaded] = useFonts({
    'RobotoCondensed-Bold': require('./assets/Fonts/RobotoCondensed-BoldItalic.ttf'),
    'RobotoCondensed-Regular' : require('./assets/Fonts/RobotoCondensed-Regular.ttf'),
    'RobotoCondensed-BoldItalic' : require('./assets/Fonts/RobotoCondensed-BoldItalic.ttf'),
    'RobotoCondensed-Light' : require('./assets/Fonts/RobotoCondensed-Light.ttf')
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Nav/>
    </View>
  );
}





