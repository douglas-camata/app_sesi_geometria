import React, {useState} from 'react'
import {View,Text,TextInput,Image,TouchableOpacity,ScrollView} from 'react-native'
import { estilos } from '../styles/estilos'

const Paralelepipedo = () => {
    const [valorA, setValorA] = useState('')
    const [valorB, setValorB] = useState('')
    const [valorC, setValorC] = useState('')
    const [volume, setVolume] = useState('')
    const [area, setArea] = useState('')

    const calcular = () => {
        let resArea = 6 * (valorA ** 2)
        setArea(` S = ${resArea} `)

        let resVolume = valorA ** 3
        setVolume(` V = ${resVolume} `)        
    }

    return (
        <ScrollView style={{flex: 1, padding: 15}} >
            <View style={estilos.figuraGeometrica}>
                <Image source={require('../assets/paralelepipedo.png')} 
                    style={estilos.imgFigura} />
                <View style={estilos.linha} />
                <View style={{flexDirection: 'row'}}>
                    {/* View para receber valor das variáveis para calculo */}
                    <View style={{alignItems: 'center'}}>
                        <Text style={estilos.texto}> a </Text>
                        <TextInput placeholder='Valor de a' style={estilos.input}
                            keyboardType='numeric' value={valorA} onChangeText={setValorA} />
                    </View>

                    <View style={{alignItems: 'center'}}>
                        <Text style={estilos.texto}> b </Text>
                        <TextInput placeholder='Valor de b' style={estilos.input}
                            keyboardType='numeric' value={valorB} onChangeText={setValorB} />
                    </View>

                    <View style={{alignItems: 'center'}}>
                        <Text style={estilos.texto}> c </Text>
                        <TextInput placeholder='Valor de c' style={estilos.input}
                            keyboardType='numeric' value={valorC} onChangeText={setValorC} />
                    </View>
                </View>
            </View>
            <TouchableOpacity style={estilos.botao} onPress={calcular} >
                <Text style={estilos.textoBotao}>Calcular</Text>
            </TouchableOpacity>
            <View style={estilos.figuraGeometrica}>
                <Text style={estilos.texto}>Área:</Text>
                <Text> S = 2 * (a * b + b * c + a * c) </Text>
                {area != '' && <Text> {area} </Text> }
            </View>
            <View style={estilos.figuraGeometrica}>
                <Text style={estilos.texto}>Volume:</Text>
                <Text> V = a * b * c </Text>
                {volume != '' && <Text> {volume} </Text> }
            </View>
        </ScrollView>
    )
}
export default Paralelepipedo
