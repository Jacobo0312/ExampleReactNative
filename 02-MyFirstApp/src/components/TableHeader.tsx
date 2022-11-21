import React from 'react';
import {Image, View, StyleSheet, Text, ImageBackground} from 'react-native';

export const TableHeader = () => {
  return (
    <View style={styles.BoxHeader}>
      <View></View>
      <View style={styles.BackButton}>
        <Image
          style={styles.LeftArrow}
          source={require('../assets/arrow-left.png')}
        />
      </View>
      <View style={styles.BelowBackButton}>
        <View style={styles.ContainerTitle}>
          <View style={styles.TitleContainer}>
            <Text style={styles.textRegular}>
              Asign a{'\n'}
              {<Text style={styles.textBold}>table</Text>}
            </Text>
          </View>
        </View>
        <View style={styles.TableFilter}>
          <View style={styles.FilterBox}>
            <View>
              <Image
                style={styles.FilterIcon}
                source={require('../assets/Filter.png')}
              />
            </View>
            <Text style={styles.textRegularFilter}>Numbers</Text>
            <View>
              <Image
                style={styles.DownArrow}
                source={require('../assets/DownArrow.png')}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  BelowBackButton: {
    flexDirection: 'row',
  },
  BoxHeader: {
    width: 400,
    height: 150,
    flexDirection: 'column',
  },
  BackButton: {
    // backgroundColor: 'red',
    width: 400,
    height: 80,
    justifyContent: 'flex-end',
    padding: 15,
  },
  ContainerTitle: {
    // backgroundColor: 'yellow',
    width: 200,
    height: 60,
  },
  TableFilter: {
    // backgroundColor: 'gray',
    width: 200,
    height: 60,
    paddingRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  FilterBox: {
    width: 160,
    height: 30,
    backgroundColor: 'white',
    borderRadius: 5,
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'row',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 2,
  },
  iconButton: {
    width: 30,
    height: 30,
  },
  textBold: {
    fontFamily: 'poppinsbold',
    fontWeight: '700',
    fontSize: 25,
    color: '#302F35',
  },
  textRegular: {
    fontFamily: 'poppinsbold',
    fontWeight: 'normal',
    fontSize: 25,
    color: '#302F35',
  },
  textRegularFilter: {
    fontFamily: 'poppinsbold',
    fontWeight: 'normal',
    fontSize: 20,
    color: '#302F35',
  },
  TitleContainer: {
    paddingLeft: 20,
    textAlign: 'justify',
    lineHeight: 30,
  },
  LeftArrow: {
    width: 21,
    height: 21,
  },
  FilterIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
    marginTop: 4,
  },
  DownArrow: {
    width: 15,
    height: 15,
    marginLeft: 10,
    marginTop: 7,
  },
});
