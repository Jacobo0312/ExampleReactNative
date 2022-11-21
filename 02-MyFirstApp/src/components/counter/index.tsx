import React from 'react';
import {View, Text} from 'react-native';
import {useState} from 'react';
import {counterStyles} from './styles';
import { FabCounter } from '../fabCounter/index';

export const Counter = () => {
  const [contador, setContador] = useState(10);
  const styles = counterStyles();

  return (
    <View style={styles.container}>
      <FabCounter
        title="-"
        position="left"
        onPress={() => setContador(contador - 1)}
      />
      <Text style={styles.title}>{contador}</Text>
      <FabCounter
        title="+"
        position="right"
        onPress={() => setContador(contador + 1)}
      />
    </View>
  );
};
