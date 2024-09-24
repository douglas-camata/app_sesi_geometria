import React, { useState } from "react";
import {View, Text, TextInput, Image, TouchableOpacity, ScrollView} from 'react-native'
import { estilos } from "../styles/estilos";

const Retangulo = () => {
    const [valorA, setValorA] = useState('')
    const [valorB, setValorB] = useState('')
    const [area, setArea] = useState('')
    const [perimetro, setPerimetro ] = useState('')
    const [diagonais, setDiagonais ] = useState('')

    const calcular = () => {
        let resArea =  parseFloat(valorA) * parseFloat(valorB)
        setArea(`S = ${resArea}`)

        let resPerimeto =  2 * (parseFloat(valorA) + parseFloat(valorB))
        setPerimetro(`P = ${resPerimeto}`)
        
        let resDiagonais =  Math.sqrt(parseFloat(valorA**2) + parseFloat(valorB**2) ) 
        setDiagonais(`D = ${resDiagonais.toFixed(2)}`)        
    }

    return(
        <ScrollView style={{flex:1, padding: 15}}>
            <View style={estilos.figuraGeometrica}>
                <Image source={require('../assets/retangulo.png')}
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
                <Text>S = a * b</Text>
                {area != '' && <Text> {area} </Text>}
            </View>
            <View style={estilos.figuraGeometrica}>
                <Text style={estilos.texto}>Perimetro</Text>
                <Text> P = 2 * (a + b) </Text>
                {perimetro != '' && <Text> {perimetro} </Text>}
            </View>
            <View style={estilos.figuraGeometrica}>
                <Text style={estilos.texto}>Diagonais</Text>
                <Text> D =  √(a² + b²) </Text>
                {diagonais != '' && <Text> {diagonais} </Text>}
            </View>
        </ScrollView>
    )
}
export default Retangulo