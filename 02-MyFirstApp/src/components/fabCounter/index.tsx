import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
} from 'react-native';

interface Props {
  title: string;
  onPress: () => void;
  position?: 'right' | 'left';
}

export const FabCounter = ({title, onPress, position = 'right'}: Props) => {
  return (
    <View>
      <TouchableNativeFeedback
        onPress={onPress}
        background={TouchableNativeFeedback.Ripple('gray', false, 20)}>
        <View style={styles.fab}>
          <Text style={styles.fabText}> {title} </Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  fab: {
    backgroundColor: 'transparent',
    borderWidth: 3,
    borderColor: '#F15A22',
    width: 30,
    height: 30,
    borderRadius: 100,
    marginHorizontal: 5,
    justifyContent: 'center',


  },
  fabText: {
    flex: 1,
    color: '#F15A22',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    textAlign: 'center',
  },
});
