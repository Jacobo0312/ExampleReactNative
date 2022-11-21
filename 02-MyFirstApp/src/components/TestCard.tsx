import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Fab} from '../components/Fab';
import '../assets/iconTablex.png';

export const TestCard = () => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardTitle}>BUSY</Text>
        <Text style={styles.cardTitle}>1</Text>
      </View>

      <View style={styles.cardInfo}>
        <Text style={styles.cardBody}>
          {
            <Text style={styles.textRegular}>
              Customer: {<Text style={styles.textBold}>6</Text>}{' '}
            </Text>
          }
        </Text>

        <Text style={styles.cardBody}>
          {
            <Text style={styles.textRegular}>
              Time: {<Text style={styles.textBold}>5252</Text>}{' '}
            </Text>
          }
        </Text>

        <Text style={styles.cardBody}>
          {
            <Text style={styles.textRegular}>
              Order: {<Text style={styles.textPending}>Pending</Text>}{' '}
            </Text>
          }
        </Text>
      </View>

      <View>
        <Fab title="0" position="center" onPress={() => console.log('TEST')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'white',
    width: 150,
    height: 150,
    marginHorizontal: 10,
    borderRadius: 10,
    margin: 20,
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    paddingVertical: 8,
    paddingHorizontal: 8,
    paddingLeft: 15,
    paddingRight: 15,
  },
  cardBody: {
    fontFamily: 'poppinsregular',
    width: 150,
    height: 23,
    fontSize: 16,
    paddingLeft: 15,
  },

  cardInfo: {
    display: 'flex',
    paddingTop: 8,
    paddingBottom: 8,
  },

  textBold: {
    fontFamily: 'poppinsbold',
    fontWeight: '700',
    fontSize: 16,
    color: '#302F35',
  },
  textRegular: {
    fontFamily: 'poppinsbold',
    fontWeight: 'normal',
    fontSize: 16,
    color: '#302F35',
  },
  textPending: {
    fontFamily: 'poppinsbold',
    fontWeight: '700',
    fontSize: 16,
    color: '#F15A22',
  },

  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FF3333',
  },
});
