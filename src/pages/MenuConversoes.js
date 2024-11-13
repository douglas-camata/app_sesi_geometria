import React from "react"
import {View, Text, TouchableOpacity, Image, ScrollView} from "react-native"
import { estilos } from '../styles/estilos'

const MenuConversoes = ({ navigation }) => {
    return (
        <ScrollView style={{flex: 1}}>
            <Text style={estilos.texto}>Selecione um tipo de conversão:</Text>
            <View style={estilos.linhaFiguras}>
                {/* Card de comprimento */}
                <TouchableOpacity style={estilos.figuraGeometrica} 
                    onPress={() => navigation.navigate('ConvComprimento')} >
                    <Text style={estilos.tituloFigura}>Comprimento</Text>
                    <Image source={require('../assets/comprimento.png')} 
                        style={estilos.imgFigura} />
                </TouchableOpacity>

                {/* Card de área */}
                <TouchableOpacity style={estilos.figuraGeometrica} 
                    onPress={() => navigation.navigate('ConvArea')} >
                    <Text style={estilos.tituloFigura}>Área</Text>
                    <Image source={require('../assets/area.png')} 
                        style={estilos.imgFigura} />
                </TouchableOpacity>
                
                {/* Card de peso */}
                <TouchableOpacity style={estilos.figuraGeometrica} 
                    onPress={() => navigation.navigate('ConvPeso')} >
                    <Text style={estilos.tituloFigura}>Peso</Text>
                    <Image source={require('../assets/peso.png')} 
                        style={estilos.imgFigura} />
                </TouchableOpacity>
                
                {/* Card de volume */}
                <TouchableOpacity style={estilos.figuraGeometrica} 
                    onPress={() => navigation.navigate('ConvVolume')} >
                    <Text style={estilos.tituloFigura}>Volume</Text>
                    <Image source={require('../assets/volume.png')} 
                        style={estilos.imgFigura} />
                </TouchableOpacity>
                
                {/* Card de temperatura */}
                <TouchableOpacity style={estilos.figuraGeometrica} 
                    onPress={() => navigation.navigate('ConvTemperatura')} >
                    <Text style={estilos.tituloFigura}>Temperatura</Text>
                    <Image source={require('../assets/temperatura.png')} 
                        style={estilos.imgFigura} />
                </TouchableOpacity>
                
                {/* Card de tempo */}
                <TouchableOpacity style={estilos.figuraGeometrica} 
                    onPress={() => navigation.navigate('ConvTempo')} >
                    <Text style={estilos.tituloFigura}>Tempo</Text>
                    <Image source={require('../assets/tempo.png')} 
                        style={estilos.imgFigura} />
                </TouchableOpacity>
                
                {/* Card de velocidade */}
                <TouchableOpacity style={estilos.figuraGeometrica} 
                    onPress={() => navigation.navigate('ConvVelocidade')} >
                    <Text style={estilos.tituloFigura}>Velocidade</Text>
                    <Image source={require('../assets/velocidade.png')} 
                        style={estilos.imgFigura} />
                </TouchableOpacity>
                
                {/* Card de dados computacionais */}
                <TouchableOpacity style={estilos.figuraGeometrica} 
                    onPress={() => navigation.navigate('ConvDadosComputacionais')} >
                    <Text style={estilos.tituloFigura}>Dados Comput.</Text>
                    <Image source={require('../assets/dados_computacionais.png')} 
                        style={estilos.imgFigura} />
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default MenuConversoes