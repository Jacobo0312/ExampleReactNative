

import { StyleSheet } from "react-native";

export const COLORS = {
    primary: "red",
    secondary: "purple",
    white: "#FFFFFF",
    black: "#000000",
    gray: "#6A6A6A",
    lightGray: "#F2F2F2",
    darkGray: "#2D2D2D",
    transparent: "transparent",
};


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
    },
    avatarContainer: {
        alignItems: 'center',
        marginTop: 20
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 100
    },
    menuContainer: {
        marginVertical: 30,
        marginHorizontal: 50
    },
    menuItem: {
        marginVertical: 10
    },
    menuText: {
        fontSize: 20
    }
    


})