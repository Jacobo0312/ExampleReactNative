import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { Button } from 'react-native-paper';
import { AuthContext } from '../context/AuthContext';


export const AlbumScreen = () => {


    const { logout,authState } = useContext(AuthContext);




    return (
        <View>
            <Text>Album Screen</Text>

            {
                authState.isLoggedIn &&(
                    <View>
                    <Text>{JSON.stringify(authState, null, 4)}</Text>
                    <Button onPress={logout} >Logout</Button>
                    </View>

                    
                )
        
            }
          

        </View>
    )
}

