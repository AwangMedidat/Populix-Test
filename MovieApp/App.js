// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/Home';
import Constants from './src/style/constants';
import Icon from 'react-native-vector-icons/Ionicons';
import MovieDetail from './src/components/MovieDetail';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
        <Stack.Screen name="Home" component={Home} options={headerStyle} />
        <Stack.Screen
          name="MovieDetail"
          component={MovieDetail}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const headerStyle = {
  title: 'Movies',
  headerStyle: {backgroundColor: Constants.baseColor},
  headerTitleStyle: {
    color: Constants.textColor,
  },
  headerLeft: () => <Icon name="menu" size={34} color={Constants.textColor} />,
  headerRight: () => (
    <Icon name="search" size={25} color={Constants.textColor} />
  ),
};

export default App;
