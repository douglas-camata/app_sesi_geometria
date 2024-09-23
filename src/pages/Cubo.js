import React, {useState} from 'react'
import {View,Text,TextInput,Image,TouchableOpacity,ScrollView} from 'react-native'
import { estilos } from '../styles/estilos'

const Cubo = () => {
    const [valorA, setValorA] = useState('')
    const [volume, setVolume] = useState('')
    const [area, setArea] = useState('')

    const calcular = () => {
        let resVolume = valorA ** 3
        setVolume(` V = ${resVolume} `)

        let resArea = 6 * (valorA ** 2)
        setArea(` S = ${resArea} `)
    }

    return (
        <ScrollView style={{flex: 1, padding: 15}} >
            <View style={estilos.figuraGeometrica}>
                <Image source={require('../assets/cubo.png')} 
                    style={estilos.imgFigura} />
                <View style={estilos.linha} />
                <View style={{flexDirection: 'row'}}>
                    {/* View para receber valor das variáveis para calculo */}
                    <View style={{alignItems: 'center'}}>
                        <Text style={estilos.texto}> a </Text>
                        <TextInput placeholder='Valor de a' style={estilos.input}
                            keyboardType='numeric' value={valorA} onChangeText={setValorA} />
                    </View>
                </View>
            </View>
            <TouchableOpacity style={estilos.botao} onPress={calcular} >
                <Text style={estilos.textoBotao}>Calcular</Text>
            </TouchableOpacity>
            <View style={estilos.figuraGeometrica}>
                <Text style={estilos.texto}>Área:</Text>
                <Text> S = 6 x a² </Text>
                {area != '' && <Text> {area} </Text> }
            </View>
            <View style={estilos.figuraGeometrica}>
                <Text style={estilos.texto}>Volume:</Text>
                <Text> V = a³ </Text>
                {volume != '' && <Text> {volume} </Text> }
            </View>
        </ScrollView>
    )
}
export default Cubo
