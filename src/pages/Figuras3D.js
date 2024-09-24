import React from "react"
import {View, Text, TouchableOpacity, Image, ScrollView} from "react-native"
import { estilos } from '../styles/estilos'

const Figuras3D = ({ navigation }) => {
    return (
        <ScrollView style={{flex: 1}}>
            <Image source={require('../../assets/icone_sesi.png')} style={{width:360, height: 50}}/>
            <Text style={estilos.texto}>Selecione uma figura 3D</Text>
            <View style={estilos.linhaFiguras}>
                {/* Card da figura Cubo */}
                <TouchableOpacity style={estilos.figuraGeometrica} 
                    onPress={() => navigation.navigate('Cubo')} >
                    <Text style={estilos.tituloFigura}>Cubo</Text>
                    <Image source={require('../assets/cubo.png')} 
                        style={estilos.imgFigura} />
                </TouchableOpacity>

                {/* Card da figura do Paralelepipedo */}
                <TouchableOpacity style={estilos.figuraGeometrica} 
                    onPress={() => navigation.navigate('Paralelepipedo')} >
                    <Text style={estilos.tituloFigura}>Paralelepipedo</Text>
                    <Image source={require('../assets/paralelepipedo.png')}
                        style={estilos.imgFigura} />
                </TouchableOpacity>
                
                {/* Card da figura do Esfera */}
                <TouchableOpacity style={estilos.figuraGeometrica} 
                    onPress={() => navigation.navigate('Esfera')} >
                    <Text style={estilos.tituloFigura}>Esfera</Text>
                    <Image source={require('../assets/esfera.png')}
                        style={estilos.imgFigura} />
                </TouchableOpacity>

                {/* Card da figura do Cone */}
                <TouchableOpacity style={estilos.figuraGeometrica} 
                    onPress={() => navigation.navigate('Cone')} >
                    <Text style={estilos.tituloFigura}>Cone</Text>
                    <Image source={require('../assets/cone.png')}
                        style={estilos.imgFigura} />
                </TouchableOpacity>

                {/* Card da figura do Cilindro */}
                <TouchableOpacity style={estilos.figuraGeometrica} 
                    onPress={() => navigation.navigate('Cilindro')} >
                    <Text style={estilos.tituloFigura}>Cilindro</Text>
                    <Image source={require('../assets/cilindro.png')}
                        style={estilos.imgFigura} />
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default Figuras3D