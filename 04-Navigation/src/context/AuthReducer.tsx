import { AuthState } from "./AuthContext";

type AuthAction={
    type:'signIn'|'logout'|'changeUsername'|'changeFavoriteIcon';
    payload?:any;
}


export const AuthReducer=(state:AuthState,action:AuthAction):AuthState=>{

    switch (action.type) {
        case 'signIn':
            return{
                ...state,
                isLoggedIn:true,
                username:action.payload.username,
                favoriteIcon:action.payload.favoriteIcon
            }
        case 'logout':
            return{
                ...state,
                isLoggedIn:false,
                username:undefined,
                favoriteIcon:undefined
            }
        case 'changeUsername':
            return{
                ...state,
                username:action.payload
            }
        case 'changeFavoriteIcon':
            return{
                ...state,
                favoriteIcon:action.payload
            }
        default:
            return state;

    }
    
}