import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { AlbumScreen } from '../screens/AlbumScreen';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { COLORS } from '../theme/AppTheme';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator=()=> {
  return (
    <Tab.Navigator

      sceneContainerStyle={{
        backgroundColor:'white'
      }}

      screenOptions={({ route }) => ({
        // tabBarPressColor:COLORS.secondary,

        tabBarShowIcon:true,

        tabBarIndicatorStyle:{
          backgroundColor:COLORS.secondary,
        },

        tabBarIcon: (props) => {

          let iconName: string = "";

          switch (route.name) {
              case "Chat":
                  iconName = "chatbox-ellipses"
                  break;
              case "Contacts":
                  iconName = "people"
                  break;
              case "Album":
                  iconName = "albums"
                  break;

          }

          return<Icon name={iconName} size={30} color="black" />

      }



      })}



    
    
    
    
    
    
    >
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Contacts" component={ContactsScreen} />
      <Tab.Screen name="Album" component={AlbumScreen} />
    </Tab.Navigator>
  );
}