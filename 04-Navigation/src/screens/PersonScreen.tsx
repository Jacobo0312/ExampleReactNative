import React, { useEffect } from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { Button, StyleSheet, Text, View } from 'react-native'
import { stylesheet } from '../theme/AppTheme'
import { RootStackParams } from '../Navigator/StackNavigator'

interface Props extends StackScreenProps<RootStackParams,'PersonScreen'>{
}

export const PersonScreen = ({navigation,route}:Props) => {
    const styles=stylesheet()
    const params=route.params

    useEffect(() => {
        navigation.setOptions({
            title:params.name
        })
    }, [])

  return (

    <View style={styles.globalMargin}>
    <Text style={styles.title}>PERSON</Text>
    <Text>{JSON.stringify(params,null,3)}</Text>


  </View>  )
}
