import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import SignUp from '../screens/SignUp'
import Login from '../screens/Login'
import Welcome from '../screens/Welcome'
import colors from '../assets/config/colors'
import Dashboard from '../screens/Dashboard'
import Activity from '../screens/Activity'
import BookAppointment from '../screens/BookAppointment'

const RootStack = () => {
    const Stack = createStackNavigator()
  return (
    <NavigationContainer>
         <Stack.Navigator
          screenOptions={{
             headerStyle: {
            backgroundColor: "transparent"
        },
        headerTintColor: colors.primary,
            headerTransparent: true,
            headerTitle: "",
           headerLeftContainerStyle: {
             paddingLeft: 20
            }
           }}
          initialRouteName="Login"
>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Signup" component={SignUp}/>
            <Stack.Screen name="Dashboard" component={Dashboard}/>
            <Stack.Screen options={{headerTintColor: colors.primary}} name="Welcome" component={Welcome}/>
            <Stack.Screen name="Activity" component={Activity}/>
            <Stack.Screen name="BookAppointment" component={BookAppointment}/>

            </Stack.Navigator>

    </NavigationContainer>
  )
}

export default RootStack