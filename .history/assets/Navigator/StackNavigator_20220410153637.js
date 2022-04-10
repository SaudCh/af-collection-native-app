import React from 'react'
import Login from '../Login/Login'
import DrawerNavigation from './DrawerNavigation'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { COLORS } from "../Const/color";

const Stack = createNativeStackNavigator()

const StackNavigation = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Drawer">
                <Stack.Screen name="Drawer" component={DrawerNavigation} options={{ headerShown: false }} />
                <Stack.Screen name="Login" component={Login} options={{ title: 'Jazaria Store', headerTintColor: COLORS.dPink, }} />
                {/* <Stack.Screen name="Signup" component={Signup} options={{ title: 'Jazaria Store', headerTintColor: COLORS.dPink, }} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigation