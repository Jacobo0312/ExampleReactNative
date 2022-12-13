import React, { useReducer } from 'react'
import { AuthReducer } from './AuthReducer';


//Define what information we want to share

export interface AuthState {
    isLoggedIn: boolean;
    username?: string;
    favoriteIcon?: string;
}

//Define the initial state

export const authInitialState: AuthState = {
    isLoggedIn: false,
    username: undefined,
    favoriteIcon: undefined
}

//Define the actions

export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
    changeFavoriteIcon: (iconName: string) => void;
    logout: () => void;
    changeUsername: (username: string) => void;
}




//Create context

export const AuthContext = React.createContext({} as AuthContextProps);


//Component provider

export const AuthProvider = ({ children }: any) => {

    const [authState, dispatch] = useReducer
    (AuthReducer,authInitialState)

    const signIn = () => {
        dispatch({ type: 'signIn', payload: { username: 'Pedro', favoriteIcon: 'airplane-outline' } })
    }

    const changeFavoriteIcon = (iconName: string) => {
        dispatch({ type: 'changeFavoriteIcon', payload: iconName })
    }

    const logout = () => {
        dispatch({ type: 'logout' })
    }

    const changeUsername = (username: string) => {
        dispatch({ type: 'changeUsername', payload: username })
    }



    return (
        <AuthContext.Provider
            value={{
                authState,
                signIn,
                changeFavoriteIcon,
                logout,
                changeUsername
            }}
        >
            {children}
        </AuthContext.Provider>

    )
}


