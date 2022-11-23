import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Button, Text, View } from 'react-native'

import { stylesheet } from '../theme/AppTheme'



interface Props extends StackScreenProps<any, any>{}

export const Screen3 = ({navigation}:Props) => {

  const styles=stylesheet()
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Screen3</Text>

      <Button
        title="Go to Screen1"
        onPress={() => navigation.popToTop()}
      />

      <Button
        title="Go back"
        onPress={() => navigation.goBack()}
      />



    </View>
    
  )
}
