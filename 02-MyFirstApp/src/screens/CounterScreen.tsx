import React, { useState } from 'react'
import {StyleSheet, Text, View } from 'react-native'
import { Fab } from '../components/Fab'

export const CounterScreen = () => {
    const [counter, setCounter] = useState(0)
    return (
        <View style={styles.container}>

            <Text style={styles.text}>Counter: {counter}</Text>

            <Fab
                title="+"
                onPress={() => setCounter(counter + 1)}
                position="br"
            />

            <Fab
                title="-"
                onPress={() => setCounter(counter - 1)}
                position="bl"
            />

        </View>

    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        top: -15,
    },
    text: {
        textAlign: 'center',
        fontSize: 40,
    }
})

