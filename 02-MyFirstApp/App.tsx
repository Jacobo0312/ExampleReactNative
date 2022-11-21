import React from 'react'
import { Alert, SafeAreaView } from 'react-native'
import { MainButton } from './src/components/MainButton'
import { TableAsign } from './src/components/TableAsign'
import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen'
import { CardProduct } from './src/screens/CardProduct'
import { CounterScreen } from './src/screens/CounterScreen'
import { DimensionsScreen } from './src/screens/DimensionsScreen'
import { FlexScreen } from './src/screens/FlexScreen'
import { HelloWorldScreen } from './src/screens/HelloWorldScreen'
import { PositionScreen } from './src/screens/PositionScreen'
import { TasksScreen } from './src/screens/TasksScreen'
import { TestCardsScreen } from './src/screens/TestCardsScreen'

export const App = () => {

  //Alert
  const showAlert = () => {
    Alert.alert('Alerta', 'Esto es una alerta');
  };
  
  return (
    <SafeAreaView style={{flex:1}}>
      {/* <BoxObjectModelScreen /> */}
      {/* <DimensionsScreen/> */}
      {/* <PositionScreen/> */}
      {/* <FlexScreen/> */}
      {/* <TestCardsScreen/> */}

      <TasksScreen/>
      
      {/* <MainButton title='TEST' color='gray' onPress={showAlert}/>
      <MainButton title='TEST' color='green' onPress={showAlert}/>
      <MainButton title='TEST' color='red' onPress={showAlert}/>
      
      <MainButton title='TEST' color='yellow' onPress={showAlert}/> */}

      {/* <TableAsign/> */}
    </SafeAreaView>
    // <HelloWorldScreen/> 
    // <CounterScreen/>
  )
}

