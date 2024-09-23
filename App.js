import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "react-native";
import Principal from './src/pages/Principal'

import { corBranco, corPrincipal } from './src/styles/estilos'

// Declarar tela das figuras geométricas
import Cubo from "./src/pages/Cubo"

const Stack = createNativeStackNavigator()

const App = () => {
  return(
    <NavigationContainer>
      <StatusBar backgroundColor={corPrincipal} barStyle='light-content' />
      <Stack.Navigator>
        <Stack.Screen name="Principal" component={Principal}  options={{headerShown: false}} />
        {/* Criando as telas das figuras */}
        <Stack.Screen name="Cubo" component={Cubo} 
          options={{
            headerStyle: {backgroundColor: corPrincipal},
            headerTintColor: corBranco,
            headerTitleStyle: {fontWeight: 'bold'},           
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App