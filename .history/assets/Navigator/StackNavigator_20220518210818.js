import React from 'react'
import DrawerNavigator from './DrawerNavigator'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Login/Login';
import { COLORS } from '../Const/color';
import Signup from '../Signup/Signup';
import ForgetPassword from '../Login/ForgetPassword';
import ProductDetail from '../ProductDetail/ProductDetail';
import { Button } from 'react-native-paper';
import { Entypo } from "@expo/vector-icons"
import Cart from '../Cart/Cart';


const Stack = createNativeStackNavigator()

const StackNavigation = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Drawer">
                <Stack.Screen name="Drawer" component={DrawerNavigator} options={{ headerShown: false }} />
                <Stack.Screen name="Login" component={Login} options={{ title: 'AF Collection', headerTintColor: COLORS.dPink }} />
                <Stack.Screen name="Signup" component={Signup} options={{ title: 'AF Collection', headerTintColor: COLORS.dPink, }} />
                <Stack.Screen name="ForgetPassword" component={ForgetPassword} options={{ title: 'AF Collection', headerTintColor: COLORS.dPink, }} />
                <Stack.Screen name="prodDetails" component={ProductDetail} options={({ route }) => ({
                    title: route.params ? route.params.name : "Details", headerTintColor: COLORS.dPink, headerTitleAlign: 'center',
                    headerRight: () => (
                        <Button
                            onPress={() => navigation.navigate("cart")}
                            style={{ backgroundColor: 'transparent' }}
                        >
                            <Entypo style={{ color: COLORS.dPink }} name="shopping-cart" size={24} color="black" />
                        </Button>
                    )
                })}

                />
                <Stack.Screen name="cart" component={Cart} options={{
                    title: "Cart", headerTintColor: COLORS.dPink, headerTitleAlign: 'center'
                }}

                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigation