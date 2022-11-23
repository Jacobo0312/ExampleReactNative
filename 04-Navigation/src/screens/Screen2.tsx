import { useNavigation } from '@react-navigation/core'
import { StackScreenProps } from '@react-navigation/stack'
import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'

import { stylesheet } from '../theme/AppTheme'

interface Props extends StackScreenProps<any, any>{}


export const Screen2 = ({navigation}:Props) => {

  useEffect(() => {
    navigation.setOptions({
      title: 'Hola Mundo',
      headerBackTitle: 'Back'
    })
  }, [])


  const styles=stylesheet()
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Screen2</Text>

      <Button
        title="Go to Screen3"
        onPress={() => navigation.navigate('Screen3')}
      
      />
    </View>
    
  )
}
