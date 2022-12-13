import 'react-native-gesture-handler';
import React, { Children } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/Navigator/StackNavigator';
import { DrawerNavigator } from './src/DrawerNavigator/DrawerNavigator';
import { AuthProvider } from './src/context/AuthContext';

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <DrawerNavigator />
      </AppState>
      {/* <StackNavigator /> */}
    </NavigationContainer>

  )
}


const AppState = ({ children }: any) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}


export default App