import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

interface Props {
    text: string;
    color?: string;
    width?: boolean;
    action: (textNumber: string) => void;

}


export const Button = ({ text, color = '#2D2D2D', width,action }: Props) => {
    return (

        <TouchableOpacity
        onPress={()=>action(text)}>



            <View style={{
                ...styles.button,
                backgroundColor: color,
                width: (width) ? 180 : 80,
            }
            }>
                <Text style={{
                    ...styles.buttonText,
                    color: (color === '#9B9B9B') ? 'black' : 'white',
                }}>{text}</Text>
            </View>

        </TouchableOpacity>


    )
}


const styles = StyleSheet.create({
    button: {
        height: 80,
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10,
    },
    buttonText: {
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        color: 'white',
        fontWeight: '300',
    }

})