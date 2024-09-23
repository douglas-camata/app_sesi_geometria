import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Figuras2D from './Figuras2D'
import Figuras3D from './Figuras3D'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { corBranco, corPrincipal} from '../styles/estilos'

const Tab = createBottomTabNavigator()
const Principal = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarLabelStyle: {fontSize: 14}
            }}    
        >
            <Tab.Screen name="Figuras 3D" component={Figuras3D} 
                options={{
                    headerStyle: {backgroundColor: corPrincipal},
                    headerTintColor: corBranco,
                    headerTitleStyle: {fontWeight: 'bold'},
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="pyramid" color={color} size={size} />
                    )
                }}    
            />
            <Tab.Screen name="Figuras 2D" component={Figuras2D} 
                options={{
                    headerStyle: {backgroundColor: corPrincipal},
                    headerTintColor: corBranco,
                    headerTitleStyle: {fontWeight: 'bold'},
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="triangle-outline" color={color} size={size} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}
export default Principal