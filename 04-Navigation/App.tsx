import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/Navigator/StackNavigator';
import { DrawerNavigator } from './src/DrawerNavigator/DrawerNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
      {/* <StackNavigator /> */}
    </NavigationContainer>

  )
}

export default App