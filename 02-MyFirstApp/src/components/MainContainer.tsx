import React from 'react';
import {View, StyleSheet} from 'react-native';
import {TestCard} from './TestCard';

export const MainContainer = () => {
  return (
    <View style={styles.BoxContainers}>
      <View style={styles.HorizontalRule}></View>
      <TestCard />
      <TestCard />
      <TestCard />
      <TestCard />
      <TestCard />
      <TestCard />
      <TestCard />
      <TestCard />
    </View>
  );
};

const styles = StyleSheet.create({
  BoxContainers: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: 100,
    paddingRight: 9,
    width: 400,
  },
  HorizontalRule: {
    borderTopColor: 'gray',
    borderTopWidth: StyleSheet.hairlineWidth,
    width: 350,
  },
});
