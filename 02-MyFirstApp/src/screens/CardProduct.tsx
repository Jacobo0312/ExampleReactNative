import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Counter } from '../components/counter/index';

export const CardProduct = () => {

    return (
        <View style={styles.container}>

            <View style={styles.cardContainer}>


                <View style={styles.counterContainer}>
                    <Counter />
                </View>


                <View style={styles.containerImage}>
                    <Image
                        style={styles.image}
                        source={ require('../assets/food.png')}
                    />
                </View>


                <View style={styles.containerTitle}>
                    <Text style={styles.textName}>Healthy chiken</Text>
                    <Text style={styles.textPortion}>{<Text style={{
                        color: '#F15A22',
                        fontSize:18,
                    }}>330</Text>} Gramos</Text>
                </View>


                <View style={styles.containerPrice}>
                    <Text style={styles.textPrice}>$10.000 $15.000</Text>
                </View>


                <View style={styles.containerDescription}>
                    <Text style={styles.textDescription}>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laorenulla facilisi.
                    </Text>
                </View>
            </View>
        </View>
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    },
    cardContainer: {
        backgroundColor: '#F4F4F4',
        width: 300,
        height: 400,
        marginHorizontal: 10,
        shadowColor: '#000',

        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,

        elevation: 14,
    },

    counterContainer: {
        alignItems: 'flex-end',
        flex: 0.3,
        padding: 5,
    },
    containerImage: {
        flex: 1.5,
        justifyContent: 'center',
        alignItems: 'center',       
    },
    containerTitle: {
        flex: 0.4,
        flexDirection: 'row',
    },
    containerPrice: {
        flex: 0.3,
    },
    containerDescription: {
        flex: 0.8,
        paddingHorizontal: 10,
    },
    image: {
        flex:1,
        resizeMode: 'contain',
    },
   
    textName: {
        flex: 3,
        backgroundColor: '#302F35',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        paddingLeft: 10,
        paddingVertical: 7,
    },
    textPortion: {
        flex: 1,
        backgroundColor: 'white',
        color: 'black',
        fontSize:13,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 4,

    },
    textPrice: {
        flex: 1,
        fontSize: 23,
        fontWeight: 'bold',
        fontStyle: 'normal',
        color: '#302F35',
        paddingLeft: 10,
        paddingVertical: 5,
    },
    textDescription: {
        flex: 1.5,
        color: '#302F35',
        fontSize: 18,

    },

});







