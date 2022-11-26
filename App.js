import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './screens/Login';
import Home from './screens/Home';
import Cadastro from './screens/Cadastro';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Cadastro" component={Cadastro} />

    </Stack.Navigator>
  );
}


//Title da Home
export default function App() {
    return (
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    );
  }
