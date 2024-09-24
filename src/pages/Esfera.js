import React, {useState} from "react";
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView } from "react-native";
import { estilos } from "../styles/estilos";

const Esfera = () => {
    const [valorR, setValorR] = useState('')
    const [volume, setVolume] = useState('')
    const [area, setArea] = useState('')

    const calcular = () => {
        let resVolume = 4 * (3.14 * valorR ** 3) / 3
        setVolume(` V = ${resVolume} `)

        let resArea = 4 * (3.14 * valorR ** 2)
        setArea(` S = ${resArea} `)
    }

    return(
        <ScrollView style={{flex: 1, padding: 15}}>

            <View style={estilos.figuraGeometrica}>

                <Image source={require('../assets/esfera.png')} style={estilos.imgFigura}/>
                <View style={estilos.linha}/>

                <View style={{flexDirection: 'row'}}>
                    {/*View para receber valor das variaveis para calculo*/}
                    <View style={{alignItems: 'center'}}>
                        <Text style={estilos.texto}>r</Text>
                        <TextInput placeholder='Valor de r' style={estilos.input} keyboardType='numeric' value={valorR} onChangeText={setValorR}/>
                    </View>
                </View>

            </View>

            <TouchableOpacity style={estilos.botao} onPress={calcular}>
                <Text style={estilos.textoBotao}>Calcular</Text>
            </TouchableOpacity>

            <View style={estilos.figuraGeometrica}>
                <Text style={estilos.texto}>Área:</Text>
                <Text>S = 4 * π * r²</Text>
                {area != '' && <Text> {area} </Text>}
            </View>

            <View style={estilos.figuraGeometrica}>
                <Text style={estilos.texto}>Volume:</Text>
                <Text>V = (4 * π * r³)/ 3</Text>
                {volume != '' && <Text> {volume} </Text>}
            </View>

        </ScrollView>
    )
}

export default Esfera