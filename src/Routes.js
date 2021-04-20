import React from 'react'
import  { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Welcome } from './pages/Welcome'
import { UserIdentification } from './pages/UserIdentification'
import { Confirmation } from './pages/Confirmation'

export function Routes() {
  const { Screen, Navigator } = createStackNavigator()

  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Screen name='Welcome' component={Welcome} />
        <Screen name='UserIdentification' component={UserIdentification} />
        <Screen name='Confirmation' component={Confirmation} />
      </Navigator>
    </NavigationContainer>
  )
}