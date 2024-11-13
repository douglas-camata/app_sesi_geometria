import React from "react";
import Conversoes from "./Conversoes";

const ConvVolume = () => {
    const unidades = [
        { un: 'ml', desc: '(1 ml = 0.001 l)' },
        { un: 'dl', desc: '(1 dl = 0.1 l)' },
        { un: 'l', desc: '(1 l)' },
        { un: 'mm³', desc: '(1 mm³ = 0.000001 l)' },
        { un: 'cm³', desc: '(1 cm³ = 0.001 l)' },
        { un: 'm³', desc: '(1 m³ = 1000 l)' },
    ];

    const conversoes = {
        'ml': 0.001,
        'dl': 0.1,
        'l': 1,
        'mm³': 0.000001,
        'cm³': 0.001,
        'm³': 1000,
    };

    return (
        <Conversoes
            unSelecionada="l"
            unidades={unidades}
            conversoes={conversoes}
            img={require('../assets/volume.png')} // Referência de imagem corrigida
        />
    );
};

export default ConvVolume;
