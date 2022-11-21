import React from 'react'
import { Dimensions, StyleSheet, Text, useWindowDimensions, View } from 'react-native'

export const DimensionsScreen = () => {

    // const {width, height} = Dimensions.get('window')

    const {width,height}=useWindowDimensions()


  return (
    <View>

    <View style={styles.container}>
        <View style={styles.purpleBox}/>  
        <View style={styles.orangeBox}/>
        
    </View>
    <Text style={styles.title}>WIDTH: {width} HEIGHT: {height}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        backgroundColor: 'red',
        width: '100%',
        height: 600,
    },
    purpleBox:{
        backgroundColor: '#5856D6',
        width: '50%',
        height: '50%',
    },
    orangeBox:{
        backgroundColor: '#F0A23B',
        width: '50%',
        height: '50%',
    },
    title:{
        fontSize: 20,
        textAlign: 'center',
    }


})
