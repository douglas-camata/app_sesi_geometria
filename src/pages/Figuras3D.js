import React from "react"
import {View, Text, TouchableOpacity, Image} from "react-native"
import { estilos } from '../styles/estilos'

const Figuras3D = ({ navigation }) => {
    return (
        <View style={{flex: 1}}>
            <Text style={estilos.texto}>Selecione uma figura 3D</Text>
            <View style={estilos.linhaFiguras}>
                {/* Card da figura Cubo */}
                <TouchableOpacity style={estilos.figuraGeometrica} 
                    onPress={() => navigation.navigate('Cubo')} >
                    <Text style={estilos.tituloFigura}>Cubo</Text>
                    <Image source={require('../assets/cubo.png')} 
                        style={estilos.imgFigura} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Figuras3D