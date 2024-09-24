import React from "react"
import {View, Text, TouchableOpacity, Image, ScrollView} from "react-native"
import { estilos } from '../styles/estilos'

const Figuras2D = ({ navigation }) => {
    return (
        <ScrollView style={{flex: 1}}>
            <Image source={require('../../assets/icone_sesi.png')} style={{width:360, height: 50}}/>
            <Text style={estilos.texto}>Selecione uma figura 2D</Text>
            <View style={estilos.linhaFiguras}>
                <TouchableOpacity style={estilos.figuraGeometrica} 
                    onPress={() => navigation.navigate('Quadrado')} >
                    <Text style={estilos.tituloFigura}>Quadrado</Text>
                    <Image source={require('../assets/quadrado.png')} 
                        style={estilos.imgFigura} />
                </TouchableOpacity>

                <TouchableOpacity style={estilos.figuraGeometrica} 
                    onPress={() => navigation.navigate('Retangulo')} >
                    <Text style={estilos.tituloFigura}>Retângulo</Text>
                    <Image source={require('../assets/retangulo.png')}
                        style={estilos.imgFigura} />
                </TouchableOpacity>

                <TouchableOpacity style={estilos.figuraGeometrica} 
                    onPress={() => navigation.navigate('Circulo')} >
                    <Text style={estilos.tituloFigura}>Círculo</Text>
                    <Image source={require('../assets/circulo.png')}
                        style={estilos.imgFigura} />
                </TouchableOpacity>
                
                <TouchableOpacity style={estilos.figuraGeometrica} 
                    onPress={() => navigation.navigate('TrianguloRetangulo')} >
                    <Text style={estilos.tituloFigura}>Triângulo Retângulo</Text>
                    <Image source={require('../assets/triangulo_retangulo.png')}
                        style={estilos.imgFigura} />
                </TouchableOpacity>

                <TouchableOpacity style={estilos.figuraGeometrica} 
                    onPress={() => navigation.navigate('TrianguloEquilatero')} >
                    <Text style={estilos.tituloFigura}>Triângulo Equilátero</Text>
                    <Image source={require('../assets/triangulo_equilatero.png')}
                        style={estilos.imgFigura} />
                </TouchableOpacity>

                <TouchableOpacity style={estilos.figuraGeometrica} 
                    onPress={() => navigation.navigate('TrianguloIsosceles')} >
                    <Text style={estilos.tituloFigura}>Triângulo Isósceles</Text>
                    <Image source={require('../assets/triangulo_isosceles.png')}
                        style={estilos.imgFigura} />
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default Figuras2D