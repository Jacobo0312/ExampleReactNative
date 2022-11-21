import {StyleSheet} from 'react-native';
export const counterStyles = () => {
  return StyleSheet.create({

    container: {
    borderRadius: 100,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor:'#E4E4E4',
      padding: 3,
      flex:1,
    },
    title: {
      color: '#3871B5',
      fontSize: 20,
      fontWeight: 'bold',
      marginHorizontal: 5

    },
  });
};
