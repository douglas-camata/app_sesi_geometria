import React, { useState } from "react";
import {View, Text, TextInput, Image, TouchableOpacity, ScrollView} from 'react-native'
import { estilos } from "../styles/estilos";

const Triangulo_Isosceles = () => {
    const [valorA, setValorA] = useState('')
    const [valorB, setValorB] = useState('')
    const [area, setArea] = useState('')
    const [perimetro, setPerimetro] = useState('')
    const [altura, setAltura] = useState('')

    const calcular = () => {
       
        let resPerimetro = (2 * parseFloat(valorA)) + parseFloat(valorB)
        setPerimetro(`P = ${resPerimetro.toFixed(2)}`)

        let resAltura = Math.sqrt((parseFloat(valorA)**2)-((parseFloat(valorB)**2)/4)) 
        setAltura(`h = ${resAltura.toFixed(2)}`)
        
        let resArea =  (parseFloat(valorB) * parseFloat(resAltura)) /2
        setArea(`S = ${resArea.toFixed(2)}`)
    }

    return(
        <ScrollView style={{flex:1, padding: 15}}>
            <View style={estilos.figuraGeometrica}>
                <Image source={require('../assets/triangulo_isosceles.png')}
                style={estilos.imgFigura}/>
                <View style={estilos.linha}/>
                <View style={{flexDirection: 'row'}}>
                    <View style={{alignItems: "center"}}>
                        <Text style={estilos.texto}>a</Text>
                        <TextInput placeholder="Valor do a" style={estilos.input} 
                        keyboardType="numeric" value={valorA} onChangeText={setValorA}/>
                    </View>
                    <View style={{alignItems: "center"}}>
                        <Text style={estilos.texto}>b</Text>
                        <TextInput placeholder="Valor de B" style={estilos.input} 
                        keyboardType="numeric" value={valorB} onChangeText={setValorB}/>
                    </View>
                </View>
            </View>
            <TouchableOpacity style={estilos.botao} onPress={calcular}>
                <Text style={estilos.textoBotao}>Calcular</Text>
            </TouchableOpacity>
            <View style={estilos.figuraGeometrica}>
                <Text style={estilos.texto}>Área</Text>
                <Text>S =  (b * h)/ 2</Text>
                {area != '' && <Text> {area} </Text>}
            </View>
            <View style={estilos.figuraGeometrica}>
                <Text style={estilos.texto}>Perimetro</Text>
                <Text> P = 2 * a  + b</Text>
                {perimetro != '' && <Text> {perimetro} </Text>}
            </View>
            <View style={estilos.figuraGeometrica}>
                <Text style={estilos.texto}>Altura</Text>
                <Text> h = √a² - (b² / 4)  </Text>
                {altura != '' && <Text> {altura} </Text>}
            </View>
        </ScrollView>
    )
}
export default Triangulo_Isosceles