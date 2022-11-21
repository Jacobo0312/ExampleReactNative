import React from 'react'
import { View,Text, StyleSheet } from 'react-native'

export const TasksScreen = () => {
  return (
    <View style={styles.container}>



    </View>
    
  )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '28',
    },
    purpleBox:{
        backgroundColor: '#5856D6',
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
    },
    orangeBox:{
        backgroundColor: '#F0A23B',
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
    },
    blueBox:{
        backgroundColor: '#28C4D9',
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
    },


})
