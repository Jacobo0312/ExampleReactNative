import React from 'react'
import { Text, View } from 'react-native'

export const HelloWorldScreen = () => {
    return (
        <View style={
            {
                flex: 1,
                backgroundColor: 'red',
                justifyContent: 'center',
            }
        }>
            <Text style={{
                fontSize: 30,
                color: 'white',
                textAlign: 'center',
            }}>
                Hello World
            </Text>
        </View>
    )
}

