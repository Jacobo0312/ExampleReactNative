import { createStackNavigator } from '@react-navigation/stack';
import { Text } from 'react-native';
import { PersonScreen } from '../screens/PersonScreen';
import { Screen1 } from '../screens/Screen1';
import { Screen2 } from '../screens/Screen2';
import { Screen3 } from '../screens/Screen3';

export type RootStackParams = {
  Screen1: undefined;
  Screen2: undefined;
  Screen3: undefined;
  PersonScreen: { id: number; name: string };
};



const Stack = createStackNavigator<RootStackParams>();

export const  StackNavigator=()=> {

  const header={
    headerTitle:()=><Text>TEXT</Text>,
    headerRight:()=><Text>TEXT</Text>,
    headerLeft:()=><Text>TEXT</Text>,
    headerStyle:{
      elevation:0,
      shadowColor:"transparent"
    }
  }


  return (
    <Stack.Navigator
      initialRouteName='Screen1'
      screenOptions={{
        headerStyle:{
          elevation:0,
          shadowColor:'transparent'
        },
        cardStyle:{
          backgroundColor:'white'
        }
      }}


    
    >
      <Stack.Screen name="Screen1"  options=
      
      {{title:'Page1',
      
      
      
      
      }} component={Screen1} />
      <Stack.Screen name="Screen2"  options={{title:'Page2'}}  component={Screen2} />
      <Stack.Screen name="Screen3" options={{title:'Page3'}}   component={Screen3} />
      <Stack.Screen name="PersonScreen" options={{title:'Person'}}   component={PersonScreen} />
      
    </Stack.Navigator>
  );

}