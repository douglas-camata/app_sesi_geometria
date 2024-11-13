import React from "react";
import Conversoes from "./Conversoes";

const ConvArea = () => {
    //Criando uma lista (vetor) de unidade de medidas
    const unidades = [
        {un: 'mm²', desc: '(1mm² = 0,000001m²)'},
        {un: 'cm²', desc: '(1cm² = 0,0001m²)'},
        {un: 'in²', desc: '(1in² = 0,00064516m²)'},
        {un: 'm²', desc: '(1m²)'},
        {un: 'km²', desc: '(1km² = 1.000.000m²)'},
        {un: 'he', desc: '(1he = 10.000m²)'},
        {un: 'alq', desc: '(1alqueire = 24.200m²)'},
    ]

    //Objeto que guarda a relação de cada unidade com milímetros (mm)
    const conversoes = {
        'mm²': 0.000001,    // 1mm² = 0,000001 m²
        'cm²': 0.0001,      // 1cm² = 0,0001m² 
        'in²': 0.00064516,  // 1in² (inch) polegada = 0,00064516m²
        'm²' : 1,           // 1m² é ele mesmo
        'km²': 1000000,     // 1km² = 1.000.000m²
        'he' : 10000,       // 1he (hectare) = 10.000m²
        'alq': 24200,       // 1alqueire = 24.200m²
    }

    return (
        <Conversoes
            unSelecionada="m²"
            unidades={unidades}
            conversoes={conversoes}
            img={require('../assets/area.png')} // Referência de imagem corrigida
        />
    );
};

export default ConvArea;


