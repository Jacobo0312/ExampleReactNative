import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  Platform,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

interface Props {
  title: string;
  position: 'br' | 'bl' | 'center';
  onPress: () => void;
}

export const Fab = ({title, onPress, position}: Props) => {
  const ios = () => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={[
          styles.fabLocation,
          position === 'center' ? styles.center : styles.right,
        ]}
        onPress={onPress}>
        <View style={styles.fab}>
          <Text style={styles.fabText}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const android = () => {
    return (
      <View
        style={[
          styles.fabLocation,
          position === 'center' ? styles.center : styles.right,
        ]}>
        <TouchableNativeFeedback
          background={TouchableNativeFeedback.Ripple('#28425B', false, 30)}
          onPress={onPress}>
          <View style={styles.fab}>
            <Image
              style={styles.iconButton}
              source={require('../assets/iconTablex.png')}
            />
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  };

  return Platform.OS === 'ios' ? ios() : android();
};

const styles = StyleSheet.create({
  fabLocation: {},
  right: {
    right: 25,
  },
  left: {
    left: 25,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  fab: {
    backgroundColor: 'white',
    width: 40,
    height: 40,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 2,
  },
  fabText: {
    color: '#302F35',
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
  },

  iconButton: {
    width: 30,
    height: 30,
  },
});
