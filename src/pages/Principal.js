import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Figuras2D from './Figuras2D'
import Figuras3D from './Figuras3D'

const Tab = createBottomTabNavigator()
const Principal = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Figuras 3D" component={Figuras3D} />
            <Tab.Screen name="Figuras 2D" component={Figuras2D} />
        </Tab.Navigator>
    )
}
export default Principal