import React from "react";
import Conversoes from "./Conversoes";

const ConvTemperatura = () => {
    // Lista das unidades de temperatura
    const unidades = [
        { un: 'K', desc: '(K = °C + 273.15)' },
        { un: '°C', desc: '(1 °C)' },
        { un: '°F', desc: '(°F = (°C * 9/5) + 32)' },
    ];

    // Fatores de conversão para °C
    const conversoes = {
        'K': (celsius) => celsius + 273.15,  // Convertendo K para °C
        '°C': 1,       // Unidade principal
        '°F': (celsius) => (celsius * 9/5) + 32, // Fórmula de conversão para °F
    };

    return (
        <Conversoes
            unSelecionada="°C"
            unidades={unidades}
            conversoes={conversoes}
            img={require('../assets/temperatura.png')} // Imagem representativa de temperatura
        />
    );
};

export default ConvTemperatura;
