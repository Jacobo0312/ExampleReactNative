import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
import { StackNavigator } from '../Navigator/StackNavigator';
import { COLORS } from '../theme/AppTheme';
import { Platform, Text } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { TopTabNavigator } from '../TopTabNavigator/TopTabNavigator';




export const Tabs = () => {
    return Platform.OS === 'ios'
        ? TabIOS()
        : TabAndroid()
}


//IOS

const Tab = createBottomTabNavigator();


function TabIOS() {
    return (
        <Tab.Navigator
            sceneContainerStyle={{
                backgroundColor: "white"
            }}
            screenOptions={({ route }) => ({
                tabBarActiveTintColor: COLORS.primary,
                tabBarStyle: {
                    borderTopColor: COLORS.secondary,
                    borderTopWidth: 3,
                    elevation: 0
                },
                tabBarLabelStyle: {
                    fontSize: 15,
                },

                headerShown: false,

                tabBarIcon: (props) => {

                    let iconName: string = "";

                    switch (route.name) {
                        case "Tab1Screen":
                            iconName = "T1"
                            break;
                        case "Tab2Screen":
                            iconName = "T2"
                            break;
                        case "StackNavigator":
                            iconName = "ST"
                            break;
                    }

                    return <Text style={{ color: props.color }}>{iconName}</Text>
                }


            })}

        >
            <Tab.Screen name="Tab1Screen" component={Tab1Screen} />
            <Tab.Screen name="Tab2Screen" component={TopTabNavigator} />
            <Tab.Screen name="StackNavigator" component={StackNavigator} />
        </Tab.Navigator>

    )
}

//ANDROID

const BottomTabAndroid = createMaterialBottomTabNavigator
();

function TabAndroid() {

    return (
        <BottomTabAndroid.Navigator
            sceneAnimationEnabled={true}
            barStyle={{
                backgroundColor: COLORS.secondary
            }}
            screenOptions={({ route }) => ({
                tabBarActiveTintColor: COLORS.secondary,
                tabBarStyle: {
                    borderTopColor: COLORS.secondary,
                    borderTopWidth: 3,
                    elevation: 0
                },
                tabBarLabelStyle: {
                    fontSize: 15,
                },

                headerShown: false,

                tabBarIcon: (props) => {

                    let iconName: string = "";

                    switch (route.name) {
                        case "Tab1Screen":
                            iconName = "T1"
                            break;
                        case "Tab2Screen":
                            iconName = "T2"
                            break;
                        case "StackNavigator":
                            iconName = "ST"
                            break;
                    }

                    return <Text style={{ color: props.color }}>{iconName}</Text>
                }

        
                
            })}

        >
            <Tab.Screen name="Tab1Screen" component={Tab1Screen} />
            <Tab.Screen name="Tab2Screen" component={TopTabNavigator} />
            <Tab.Screen name="StackNavigator" component={StackNavigator} />
        </BottomTabAndroid.Navigator>
    )
}

