
import React from 'react'
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import { SettingsScreen } from '../screens/SettingsScreen';
import { StackNavigator } from '../Navigator/StackNavigator';
import { View,Text, Image } from 'react-native';
import { stylesheet } from '../theme/AppTheme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Tabs } from '../BottomTabs/Tabs';

const Drawer=createDrawerNavigator();

const styles=stylesheet();

export const DrawerNavigator = () => {

    return (

        <Drawer.Navigator 
            drawerContent={(props)=> <DrawerContent {...props}/>} 
        
        >

        <Drawer.Screen name="Tabs" options={{title:"Tabs"}}component={Tabs} />
        <Drawer.Screen name="Settings" options={{title:"Settings"}} component={SettingsScreen} />
        


        </Drawer.Navigator>
    )
 
}



const DrawerContent=(props:DrawerContentComponentProps)=>{
    return(

        <DrawerContentScrollView>
        
        {/* Avatar */}

        <View style={styles.avatarContainer}>
            <Image
                source={{
                    uri:"https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
                }}
                style={styles.avatar}
            />

        </View>
    
      
            <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
                <Text style={{fontSize:30,fontWeight:"bold"}}>Menu</Text>
            </View>
            
            <View style={styles.menuContainer}>
            <TouchableOpacity
                style={styles.menuItem}
                onPress={()=>props.navigation.navigate("Tabs")}
            >
                <Text style={styles.menuText}>Tabs</Text>
            </TouchableOpacity>
                
            <TouchableOpacity
                style={styles.menuItem}
                onPress={()=>props.navigation.navigate("Settings")}
            >
                <Text style={styles.menuText}>Settings</Text>
            </TouchableOpacity>


            <TouchableOpacity
                style={styles.menuItem}
                onPress={()=>props.navigation.navigate("")}
            >
                <Text style={styles.menuText}>Cerrar sesion</Text>
            </TouchableOpacity>

            </View>
            
        </DrawerContentScrollView>

            
       
    )
}




