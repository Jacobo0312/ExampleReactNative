import React, { useEffect, useReducer } from 'react'


interface AuthState {
    validating: boolean;
    token: string | null;
    username: string;
    name: string;
}

type LoginPayload = {
    username: string;
    name: string;
}


type AuthAction =
    | { type: 'logout' }
    | { type: 'login', payload: LoginPayload };


export const Login = () => {


    const initialState: AuthState = {
        validating: true,
        token: null,
        username: '',
        name: '',
    }

    const authReducer = (state: AuthState, action: AuthAction): AuthState => {

        switch (action.type) {
            case 'logout':
                return {
                    validating: false,
                    token: null,
                    username: '',
                    name: '',
                }
            case 'login':
                const { name, username } = action.payload;
                return {
                    validating: false,
                    token: 'ABC123',
                    username,
                    name,
                }

            default:
                return state;
        }


    }

    const [{ validating, token }, dispatch] = useReducer(authReducer, initialState)

    useEffect(() => {
        setTimeout(() => {
            dispatch({ type: 'logout' })
        }, 1500);
    }, [])

    const login = () => {
        dispatch({
            type: 'login',
            payload: {
                username: 'jacobo0312',
                name: 'Jacobo'
            }
        })
    }

    const logout = () => {
        dispatch({
            type: 'logout'
        })
    }


    if (validating) {
        return (
            <>
                <h3>Login</h3>
                <div className='alert alert-info'>
                    Validating...
                </div>
            </>
        )
    } else {

        return (

            <div>
                <h3>Login</h3>

                {
                    (token)
                        ?
                        <>
                            <div className='alert alert-success'>Authorized </div>
                            <button className='btn btn-danger' onClick={logout} >
                                Logout
                            </button>
                        </>
                        :
                        <>
                            <div className='alert alert-danger'>Not authorized </div>
                            <button className='btn btn-primary' onClick={login}>
                                Login
                            </button>
                        </>
                }

            </div>


        )

    }


}



