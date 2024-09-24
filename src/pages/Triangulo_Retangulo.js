import React, { useState } from "react";
import {View, Text, TextInput, Image, TouchableOpacity, ScrollView} from 'react-native'
import { estilos } from "../styles/estilos";

const Triangulo_Retangulo = () => {
    const [valorA, setValorA] = useState('')
    const [valorB, setValorB] = useState('')
    const [area, setArea] = useState('')
    const [perimetro, setPerimetro] = useState('')
    const [hipotenuza, setHipotenuza] = useState('')

    const calcular = () => {
        let resArea = (parseFloat(valorA) * parseFloat(valorB))/2
        setArea(`S = ${resArea}`)

        let resHipotenuza =  Math.sqrt((parseFloat(valorA)**2) + (parseFloat(valorB)**2))
        setHipotenuza(`c = ${resHipotenuza.toFixed(2)}`)

        let resPerimetro =  parseFloat(valorA) + parseFloat(valorB) + parseFloat(resHipotenuza)
        setPerimetro(`P = ${resPerimetro.toFixed(2)}`)
    }

    return(
        <ScrollView style={{flex:1, padding: 15}}>
            <View style={estilos.figuraGeometrica}>
                <Image source={require('../assets/triangulo_retangulo.png')}
                style={estilos.imgFigura}/>
                <View style={estilos.linha}/>
                <View style={{flexDirection: 'row'}}>
                    <View style={{alignItems: "center"}}>
                        <Text style={estilos.texto}>a</Text>
                        <TextInput placeholder="Valor de a" style={estilos.input} 
                        keyboardType="numeric" value={valorA} onChangeText={setValorA}/>
                    </View>
                    <View style={{alignItems: "center"}}>
                        <Text style={estilos.texto}>b</Text>
                        <TextInput placeholder="Valor de b" style={estilos.input} 
                        keyboardType="numeric" value={valorB} onChangeText={setValorB}/>
                    </View>
                </View>
            </View>
            <TouchableOpacity style={estilos.botao} onPress={calcular}>
                <Text style={estilos.textoBotao}>Calcular</Text>
            </TouchableOpacity>
            <View style={estilos.figuraGeometrica}>
                <Text style={estilos.texto}>Área</Text>
                <Text>S = (a * b) / 2</Text>
                {area != '' && <Text> {area} </Text>}
            </View>
            <View style={estilos.figuraGeometrica}>
                <Text style={estilos.texto}>Perimetro</Text>
                <Text> P = a + b + c  </Text>
                {perimetro != '' && <Text> {perimetro} </Text>}
            </View>
            <View style={estilos.figuraGeometrica}>
                <Text style={estilos.texto}>Hipotenuza</Text>
                <Text> c = √(a²+ b²) </Text>
                {hipotenuza != '' && <Text> {hipotenuza} </Text>}
            </View>
        </ScrollView>
    )
}
export default Triangulo_Retangulo