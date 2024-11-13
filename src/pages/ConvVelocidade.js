import React from "react";
import Conversoes from "./Conversoes";

const ConvVelocidade = () => {
    // Lista das unidades de medida para velocidade
    const unidades = [
        { un: 'cm/s', desc: '(1 cm/s = 0.036 km/h)' },
        { un: 'm/s', desc: '(1 m/s = 3.6 km/h)' },
        { un: 'km/h', desc: '(1 km/h)' },
        { un: 'mph', desc: '(1 mph = 1.60934 km/h)' },
        { un: 'nó', desc: '(1 nó = 1.852 km/h)' },
    ];

    // Fatores de conversão para km/h
    const conversoes = {
        'cm/s': 0.036,      // 1 cm/s = 0.036 km/h
        'm/s': 3.6,         // 1 m/s = 3.6 km/h
        'km/h': 1,          // Unidade principal
        'mph': 1.60934,     // 1 mph = 1.60934 km/h
        'nó': 1.852,        // 1 nó = 1.852 km/h
    };

    return (
        <Conversoes
            unSelecionada="km/h"
            unidades={unidades}
            conversoes={conversoes}
            img={require('../assets/velocidade.png')} // Referência de imagem
        />
    );
};

export default ConvVelocidade;
