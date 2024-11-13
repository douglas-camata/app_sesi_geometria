import React from "react";
import Conversoes from "./Conversoes";

const ConvPeso = () => {
    // Lista das unidades de temperatura
    // Lista de unidade de medidas de peso
    const unidades = [
        { un: 'mg', desc: '(1mg = 0,000001kg)' },
        { un: 'g', desc: '(1g = 0,001kg)' },
        { un: 'kg', desc: '(1kg)' },
        { un: 't', desc: '(1t = 1000kg)' },
        { un: 'arroba', desc: '(1 arroba = 15kg)' },
        { un: 'oz', desc: '(1oz = 0,02835kg)' },
        { un: 'lb', desc: '(1lb = 0,45359kg)' }
    ];

    // Objeto que guarda a relação de cada unidade com quilogramas (kg)
    const conversoes = {
        'mg': 0.000001,    // 1mg = 0,000001kg
        'g': 0.001,        // 1g = 0,001kg
        'kg': 1,           // 1kg é ele mesmo
        't': 1000,         // 1t = 1000kg
        'arroba': 15,      // 1arroba = 15kg
        'oz': 0.02835,     // 1oz = 0,02835kg
        'lb': 0.45359      // 1lb = 0,45359kg
    };

    return (
        <Conversoes
            unSelecionada="kg"
            unidades={unidades}
            conversoes={conversoes}
            img={require('../assets/peso.png')} // Imagem representativa de temperatura
        />
    );
};

export default ConvPeso;
