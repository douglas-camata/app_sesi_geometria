import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "react-native";
import Principal from './src/pages/Principal'
import { corPrincipal } from './src/styles/estilos'

const Stack = createNativeStackNavigator()

const App = () => {
  return(
    <NavigationContainer>
      <StatusBar backgroundColor={corPrincipal} barStyle='light-content' />
      <Stack.Navigator>
        <Stack.Screen name="Principal" component={Principal} 
          options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App