import React, { useContext } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Ionicons'
import { AuthContext } from '../context/AuthContext';


interface Props {
    name: string;
    size?: number;
    color?: string;
    onPress?: () => void;
}




export const TouchableIcon = ({ name, size, color }: Props) => {

    const { changeFavoriteIcon, authState } = useContext(AuthContext);



    return (

        <TouchableOpacity onPress={() => changeFavoriteIcon(name)} >
            <Icon
                name={name}
                size={size}
                color={color}
            />
        </TouchableOpacity>
    )
}
