import React from "react";
import Conversoes from "./Conversoes";

const ConvDadosComputacionais = () => {
    // Lista das unidades de medida para dados computacionais
    const unidades = [
        { un: 'bit', desc: '(1 bit = 0.000000125 MB)' },
        { un: 'B', desc: '(1 B = 0.000001 MB)' },
        { un: 'KB', desc: '(1 KB = 0.001 MB)' },
        { un: 'MB', desc: '(1 MB)' },
        { un: 'GB', desc: '(1 GB = 1000 MB)' },
        { un: 'TB', desc: '(1 TB = 1000000 MB)' },
        { un: 'PB', desc: '(1 PB = 1000000000 MB)' },
    ];

    // Fatores de conversão para MB
    const conversoes = {
        'bit': 0.000000125,  // 1 bit = 0.000000125 MB
        'B': 0.000001,      // 1 B = 0.000001 MB
        'KB': 0.001,        // 1 KB = 0.001 MB
        'MB': 1,            // Unidade principal
        'GB': 1000,         // 1 GB = 1000 MB
        'TB': 1000000,      // 1 TB = 1000000 MB
        'PB': 1000000000,   // 1 PB = 1000000000 MB
    };

    return (
        <Conversoes
            unSelecionada="MB"
            unidades={unidades}
            conversoes={conversoes}
            img={require('../assets/dados_computacionais.png')} // Imagem representativa de dados
        />
    );
};

export default ConvDadosComputacionais;
