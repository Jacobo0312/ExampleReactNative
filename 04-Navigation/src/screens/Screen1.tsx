import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Button, StyleSheet, Text, Touchable, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { stylesheet } from '../theme/AppTheme'

interface Props extends StackScreenProps<any, any> { }

export const Screen1 = ({ navigation }: Props) => {

  const styles = stylesheet()

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Screen1</Text>

      <Button
        title="Go to Screen2"
        onPress={() => navigation.navigate('Screen2')}
      />

      <Text>Navigate with arguments</Text>

      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          style={styles.bigButton}

          onPress={() => navigation.navigate('PersonScreen', {
            id: 1,
            name: 'Pedro'
          })}>
          <Text style={styles.textButton}>Pedro</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.bigButton}
          onPress={() => navigation.navigate('PersonScreen', {
            id: 2,
            name: 'Maria'
          })}>
          <Text style={styles.textButton}>Maria</Text>
        </TouchableOpacity>

      </View>




    </View>

  )
}
