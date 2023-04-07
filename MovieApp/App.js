// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/pages/Home';
import Constants from './src/style/constants';
import MovieDetail from './src/pages/MovieDetail';
import {Provider} from 'react-redux';
import {Store} from './src/redux/store';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={Store}>
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
    </Provider>
  );
}

const headerStyle = {
  title: 'Movies',
  headerStyle: {backgroundColor: Constants.baseColor},
  headerTitleStyle: {
    color: Constants.textColor,
  },
};

export default App;
