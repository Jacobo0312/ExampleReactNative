import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { TouchableIcon } from '../components/TouchableIcon'


export const Tab1Screen = () => {



  return (
    <View>
        <Text>ICONOS</Text>

      <TouchableIcon name="airplane-outline" size={30} color="black" />
      <TouchableIcon name="airplane-sharp" size={30} color="black" />
      <TouchableIcon name="alarm-outline" size={30} color="black" />
      <TouchableIcon name="alarm-sharp" size={30} color="black" />
      <TouchableIcon name="albums-outline" size={30} color="black" />
      <TouchableIcon name="albums-sharp" size={30} color="black" />
      <TouchableIcon name="alert-circle-outline" size={30} color="black" />
      <TouchableIcon name="alert-circle-sharp" size={30} color="black" />
      
      
      
      

    </View>

  )
}
