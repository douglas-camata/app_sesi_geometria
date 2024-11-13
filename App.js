import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "react-native";
import Principal from './src/pages/Principal'

import { corBranco, corPrincipal } from './src/styles/estilos'

// Declarar tela das figuras geométricas
import Cubo from "./src/pages/Cubo"
import Paralelepipedo from "./src/pages/Paralelepipedo"
import Esfera from "./src/pages/Esfera";
import Cone from "./src/pages/Cone";
import Cilindro from "./src/pages/Cilindro";
import Quadrado from "./src/pages/Quadrado";
import Retangulo from "./src/pages/Retangulo";
import Circulo from "./src/pages/Circulo";
import Triangulo_Retangulo from "./src/pages/Triangulo_Retangulo";
import Triangulo_Equilatero from "./src/pages/Triangulo_Equilatero";
import Triangulo_Isosceles from "./src/pages/Triangulo_Isoceles";
import ConvComprimento from "./src/pages/ConvComprimento";
import ConvArea from "./src/pages/ConvArea";
import ConvPeso from "./src/pages/ConvPeso";
import ConvVolume from "./src/pages/ConvVolume";
import ConvTempo from "./src/pages/ConvTempo";
import ConvTemperatura from "./src/pages/ConvTemperatura";
import ConvVelocidade from "./src/pages/ConvVelocidade";
import ConvDadosComputacionais from "./src/pages/ConvDadosComputacionais";


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
        <Stack.Screen name="Paralelepipedo" component={Paralelepipedo} 
          options={{
            headerStyle: {backgroundColor: corPrincipal},
            headerTintColor: corBranco,
            headerTitleStyle: {fontWeight: 'bold'},           
        }} />
        <Stack.Screen name="Esfera" component={Esfera} 
          options={{
            headerStyle: {backgroundColor: corPrincipal},
            headerTintColor: corBranco,
            headerTitleStyle: {fontWeight: 'bold'},           
        }} />
        <Stack.Screen name="Cone" component={Cone} 
          options={{
            headerStyle: {backgroundColor: corPrincipal},
            headerTintColor: corBranco,
            headerTitleStyle: {fontWeight: 'bold'},           
        }} />
        <Stack.Screen name="Cilindro" component={Cilindro} 
          options={{
            title: 'Cilíndro',
            headerStyle: {backgroundColor: corPrincipal},
            headerTintColor: corBranco,
            headerTitleStyle: {fontWeight: 'bold'},           
        }} />
        <Stack.Screen name="Quadrado" component={Quadrado} 
          options={{
            headerStyle: {backgroundColor: corPrincipal},
            headerTintColor: corBranco,
            headerTitleStyle: {fontWeight: 'bold'},           
        }} />
        <Stack.Screen name="Retangulo" component={Retangulo} 
          options={{
            title: 'Retângulo',
            headerStyle: {backgroundColor: corPrincipal},
            headerTintColor: corBranco,
            headerTitleStyle: {fontWeight: 'bold'},           
        }} />
        <Stack.Screen name="Circulo" component={Circulo} 
          options={{
            title: 'Círculo',
            headerStyle: {backgroundColor: corPrincipal},
            headerTintColor: corBranco,
            headerTitleStyle: {fontWeight: 'bold'},           
        }} />
        <Stack.Screen name="TrianguloRetangulo" component={Triangulo_Retangulo} 
          options={{
            title: 'Triângulo Retângulo',
            headerStyle: {backgroundColor: corPrincipal},
            headerTintColor: corBranco,
            headerTitleStyle: {fontWeight: 'bold'},           
        }} />
        <Stack.Screen name="TrianguloEquilatero" component={Triangulo_Equilatero} 
          options={{
            title: 'Triângulo Equilátero',
            headerStyle: {backgroundColor: corPrincipal},
            headerTintColor: corBranco,
            headerTitleStyle: {fontWeight: 'bold'},           
        }} />
        <Stack.Screen name="TrianguloIsosceles" component={Triangulo_Isosceles} 
          options={{
            title: 'Triângulo Isósceles',
            headerStyle: {backgroundColor: corPrincipal},
            headerTintColor: corBranco,
            headerTitleStyle: {fontWeight: 'bold'},           
        }} />
        <Stack.Screen name="ConvComprimento" component={ConvComprimento} 
          options={{
            title: 'Unidade de Comprimento',
            headerStyle: {backgroundColor: corPrincipal},
            headerTintColor: corBranco,
            headerTitleStyle: {fontWeight: 'bold'},           
        }} />
        <Stack.Screen name="ConvArea" component={ConvArea} 
          options={{
            title: 'Unidade de Área',
            headerStyle: {backgroundColor: corPrincipal},
            headerTintColor: corBranco,
            headerTitleStyle: {fontWeight: 'bold'},           
          }} />
          <Stack.Screen name="ConvPeso" component={ConvPeso} 
          options={{
            title: 'Unidade de Peso',
            headerStyle: {backgroundColor: corPrincipal},
            headerTintColor: corBranco,
            headerTitleStyle: {fontWeight: 'bold'},           
        }} />
        <Stack.Screen name="ConvVolume" component={ConvVolume} 
          options={{
            title: 'Unidade de Volume',
            headerStyle: {backgroundColor: corPrincipal},
            headerTintColor: corBranco,
            headerTitleStyle: {fontWeight: 'bold'},           
        }} />
        <Stack.Screen name="ConvTemperatura" component={ConvTemperatura} 
          options={{
            title: 'Unidade de Temperatura',
            headerStyle: {backgroundColor: corPrincipal},
            headerTintColor: corBranco,
            headerTitleStyle: {fontWeight: 'bold'},           
        }} />
        <Stack.Screen name="ConvTempo" component={ConvTempo} 
          options={{
            title: 'Unidade de Tempo',
            headerStyle: {backgroundColor: corPrincipal},
            headerTintColor: corBranco,
            headerTitleStyle: {fontWeight: 'bold'},           
        }} />
        <Stack.Screen name="ConvVelocidade" component={ConvVelocidade} 
          options={{
            title: 'Unidade de Velocidade',
            headerStyle: {backgroundColor: corPrincipal},
            headerTintColor: corBranco,
            headerTitleStyle: {fontWeight: 'bold'},           
        }} />
        <Stack.Screen name="ConvDadosComputacionais" component={ConvDadosComputacionais} 
          options={{
            title: 'Unidade de Dados Computacionais',
            headerStyle: {backgroundColor: corPrincipal},
            headerTintColor: corBranco,
            headerTitleStyle: {fontWeight: 'bold'},           
        }} />
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App