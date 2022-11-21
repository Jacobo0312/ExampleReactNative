import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.title} >
            BOX OBJECT MODEL
        </Text>
    </View>

  )
}


const styles = StyleSheet.create({
  container:{
    backgroundColor: 'red',
    flex: 1,
  },
  title:{
    fontSize: 20,
    padding: 50, 
    //width: 150,
    borderWidth: 10,
    // backgroundColor: 'red',
    textAlign: 'center',
    marginHorizontal: 20,
    marginVertical: 20,
    fontStyle: 'italic',
  }
})

