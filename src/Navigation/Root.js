import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Feed from '../Screens/Feed'
import Login from '../Screens/Login'
import Sign from '../Screens/SignIn'

const Stack = createStackNavigator()

const Mainstack = () => {
    return(
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Sign" component={Sign} options={{ headerShown: false }} />
            <Stack.Screen name="Feed" component={Feed} options={{ headerShown: false }}/>
        </Stack.Navigator>
    </NavigationContainer>
    );
}

export default Mainstack;