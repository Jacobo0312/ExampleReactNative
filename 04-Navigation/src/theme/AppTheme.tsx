

import { StyleSheet } from "react-native";


export const stylesheet =()=> StyleSheet.create({
    globalMargin: {
        marginHorizontal: 20
    },
    title: {
        fontSize: 30,
        marginBottom: 10
    },
    bigButton: {
        width: 100,
        height: 100,
        borderRadius: 20,

        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,

        elevation: 5,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 7.5
    },
    textButton: {
        fontSize: 20,
        fontWeight: 'bold'
    }

})