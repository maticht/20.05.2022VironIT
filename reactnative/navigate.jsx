import React, {FC} from 'react'
import Store from './Store'
import Basket from './Basket'
import AdminPage from './adminPage'

import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";

const Stack = createStackNavigator();
const Navigate = () => {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name='Store'
                component={Store}
                options={{title: 'Store'}}
            />
            <Stack.Screen
                name='Basket'
                component={Basket}
                options={{title: 'Basket'}}
            />
            <Stack.Screen
                name='AdminPage'
                component={AdminPage}
                options={{title: 'AdminPage'}}
            />
        </Stack.Navigator>
    </NavigationContainer>
}
export default Navigate;