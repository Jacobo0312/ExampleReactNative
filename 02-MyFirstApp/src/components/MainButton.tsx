import React from 'react';
import { View, StyleSheet, Alert, TouchableOpacity, Text } from 'react-native';


interface Props {
  title: string;
  color: 'gray' | 'green' | 'red' | 'yellow';
  onPress: () => void;
}

export const MainButton = ({ title, onPress, color }: Props) => {

  const colorButton = () => {
    switch (color) {
      case 'gray':
        return styles.gray;
      case 'green':
        return styles.green;
      case 'red':
        return styles.red;
      case 'yellow':
        return styles.yellow;
    }
  };


  return (

    <TouchableOpacity
      activeOpacity={0.8}

      onPress={onPress}>

      <View style={[colorButton(),styles.buttonContainer, ]}>
        <Text style={styles.textBold}>{title}</Text>
      </View>
    </TouchableOpacity>

  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: 250,
    height: 41,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  textBold: {
    fontFamily: 'poppinsbold',
    fontWeight: '700',
    fontSize: 12,
    color: 'white',
  },
  gray: {
    backgroundColor: '#888888',
  },
  green: {
    backgroundColor: '#99AE38',
  },
  red: {
    backgroundColor: '#FF3333',
  },
  yellow: {
    backgroundColor: '#FFDB1F',
  },

});
