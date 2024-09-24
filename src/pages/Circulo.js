import React, { useState } from "react";
import {View, Text, TextInput, Image, TouchableOpacity, ScrollView} from 'react-native'
import { estilos } from "../styles/estilos";

const Circulo = () => {
    const [valorR, setValorR] = useState('')
    const [area, setArea] = useState('')
    const [perimetro, setPerimetro ] = useState('')
    const [diametro, setDiametro] = useState('')

    const calcular = () => {
        let resArea =  3.14 * (Number(valorR)**2)
        setArea(`S = ${resArea}`)

        let resPerimetro = 2 *  3.14 * Number(valorR)
        setPerimetro(`P = ${resPerimetro}`)

        let resDiametro =  2 * Number(valorR)
        setDiametro(`D = ${resDiametro}`)
    }

    return(
        <ScrollView style={{flex:1, padding: 15}}>
            <View style={estilos.figuraGeometrica}>
                <Image source={require('../assets/circulo.png')}
                style={estilos.imgFigura}/>
                <View style={estilos.linha}/>
                <View style={{flexDirection: 'row'}}>
                    <View style={{alignItems: "center"}}>
                        <Text style={estilos.texto}>r</Text>
                        <TextInput placeholder="Valor do r" style={estilos.input} 
                        keyboardType="numeric" value={valorR} onChangeText={setValorR}/>
                    </View>
                </View>
            </View>
            <TouchableOpacity style={estilos.botao} onPress={calcular}>
                <Text style={estilos.textoBotao}>Calcular</Text>
            </TouchableOpacity>
            <View style={estilos.figuraGeometrica}>
                <Text style={estilos.texto}>Área</Text>
                <Text>S = π * r²</Text>
                {area != '' && <Text> {area} </Text>}
            </View>
            <View style={estilos.figuraGeometrica}>
                <Text style={estilos.texto}>Perimetro</Text>
                <Text>S = 2 π * r</Text>
                {perimetro != '' && <Text> {perimetro} </Text>}
            </View>
            <View style={estilos.figuraGeometrica}>
                <Text style={estilos.texto}>Diametro</Text>
                <Text> D = 2 * r </Text>
                {diametro != '' && <Text> {diametro} </Text>}
            </View>
        </ScrollView>
    )
}
export default Circulo