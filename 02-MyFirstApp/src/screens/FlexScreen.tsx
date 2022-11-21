import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const FlexScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.BOX1}>BOX1</Text>
            <Text style={styles.BOX2} >BOX2</Text>
            <Text style={styles.BOX3}>BOX3</Text>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#28C4D9',
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    BOX1: {
        borderWidth: 4,
        borderColor: 'red',


    },
    BOX2: {
        borderWidth: 4,
        borderColor: 'green',
    },
    BOX3: {
        borderWidth: 4,
        borderColor: 'blue',
    }

})
