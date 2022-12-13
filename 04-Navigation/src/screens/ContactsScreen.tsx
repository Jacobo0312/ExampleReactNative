import React, { useContext } from 'react'
import { Button, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../context/AuthContext';
import { stylesheet } from '../theme/AppTheme'


export const ContactsScreen = () => {

    const styles = stylesheet();

    const { signIn,authState } = useContext(AuthContext);

    const isLoggedIn = () => {
        if (authState.isLoggedIn) {
            return <Text style={{ color: 'green' }}>Authenticated</Text>
        }
        else {
            return <Button
                title='Sign In'
                onPress={() => { signIn() }}
            />

    }
}




    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Contacts Screen</Text>
            {isLoggedIn()}

            {
                authState.favoriteIcon &&
                <Icon
                name={authState.favoriteIcon}
                size={30}
                color='red'
            />
            }

        </View>
    )
}




