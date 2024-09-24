import React, { useState } from "react";
import {View, Text, TextInput, Image, TouchableOpacity, ScrollView} from 'react-native'
import { estilos } from "../styles/estilos";

const Triangulo_Equilatero = () => {
    const [valorA, setValorA] = useState('')
    const [area, setArea] = useState('')
    const [perimetro, setPerimetro] = useState('')
    const [altura, setAltura] = useState('')

    const calcular = () => {
        let resArea =  ((parseFloat(valorA)**2) * Math.sqrt(3)) / 4
        setArea(`S = ${resArea.toFixed(2)}`)

        let resPerimetro = 3 * parseFloat(valorA)
        setPerimetro(`P = ${resPerimetro.toFixed(2)}`)

        let resAltura = (parseFloat(valorA) * Math.sqrt(3) * parseFloat(valorA)**2 / 2) 
        setAltura(`h = ${resAltura.toFixed(2)}`)
    }

    return(
        <ScrollView style={{flex:1, padding: 15}}>
            <View style={estilos.figuraGeometrica}>
                <Image source={require('../assets/triangulo_equilatero.png')}
                style={estilos.imgFigura}/>
                <View style={estilos.linha}/>
                <View style={{flexDirection: 'row'}}>
                    <View style={{alignItems: "center"}}>
                        <Text style={estilos.texto}>a</Text>
                        <TextInput placeholder="Valor do a" style={estilos.input} 
                        keyboardType="numeric" value={valorA} onChangeText={setValorA}/>
                    </View>
                </View>
            </View>
            <TouchableOpacity style={estilos.botao} onPress={calcular}>
                <Text style={estilos.textoBotao}>Calcular</Text>
            </TouchableOpacity>
            <View style={estilos.figuraGeometrica}>
                <Text style={estilos.texto}>Área</Text>
                <Text>S = ((a² * √3)/ 4)</Text>
                {area != '' && <Text> {area} </Text>}
            </View>
            <View style={estilos.figuraGeometrica}>
                <Text style={estilos.texto}>Perimetro</Text>
                <Text> P = 3 * a </Text>
                {perimetro != '' && <Text> {perimetro} </Text>}
            </View>
            <View style={estilos.figuraGeometrica}>
                <Text style={estilos.texto}>altura</Text>
                <Text> h = ((a*√3)/2) * a²  </Text>
                {altura != '' && <Text> {altura} </Text>}
            </View>
        </ScrollView>
    )
}
export default Triangulo_Equilatero