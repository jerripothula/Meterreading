import React from 'react';
import {Text, View} from 'react-native';
import Home from './Screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CameraScreen from './Screens/CameraScreen';
import Camera from './Components/Camera';
import MachPhoto from './Components/MachPhoto';
import {Provider} from 'react-redux';
import {Store} from './Redux/store';

const stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <stack.Navigator>
          <stack.Screen
            name="Home"
            options={{headerShown: false}}
            component={Home}
          />
          <stack.Screen name="CameraScreen" component={CameraScreen} />
        </stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
