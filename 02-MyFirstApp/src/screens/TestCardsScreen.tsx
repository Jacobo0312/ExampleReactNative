import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Fab } from '../components/Fab'

export const TestCardsScreen = () => {
    //Cards
    return (
        <View style={styles.container}>
            <View style={styles.cardContainer}>
                <Text style={styles.cardTitle}>Card                 1</Text>
                <Text style={styles.cardBody}>Customer: 6</Text>
                <Text style={styles.cardBody}>Time:5252</Text>
                <Text style={styles.cardBody}>Order: Pending</Text>

                //FAB
            </View>
            

        </View>

        
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#28C4D9',
        justifyContent: 'center',
        alignItems: 'center'
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
    },
    cardContainer: {
        backgroundColor: 'white',
        width: 150,
        height: 150,
        marginHorizontal: 10,
        borderRadius: 10,
        shadowColor: '#000',

        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,

        elevation: 14,
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
        //marginTop: 10,
        paddingVertical: 10,
        backgroundColor: 'red',
    },
    cardBody: {
        fontSize: 16,
        //textAlign: 'center',
        marginTop: 10,
        paddingHorizontal: 20,
        justifyContent: 'flex-start',
    }


})
