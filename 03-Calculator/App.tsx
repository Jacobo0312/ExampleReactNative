import React from 'react'
import { SafeAreaView, StatusBar, View } from 'react-native'
import { CalculatorScreen } from './src/screens/CalculatorScreen';
import { styles } from './src/theme/AppTheme';

const App = () => {
  return (
    <SafeAreaView style={styles.background}>
      <StatusBar 
      backgroundColor='black'
      barStyle='light-content'
      />
      <CalculatorScreen/>
    </SafeAreaView>
  )
}

export default App;




