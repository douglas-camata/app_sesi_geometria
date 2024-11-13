import Conversoes from "./Conversoes";

const ConvTempo = () => {
    // Lista de unidade de medidas de tempo
    const unidades = [
        { un: 'ms', desc: '(1 ms = 0.000000278 h)' },
        { un: 's', desc: '(1 s = 0.000278 h)' },
        { un: 'm', desc: '(1 m = 0.0167 h)' },
        { un: 'h', desc: '(1 h)' },
        { un: 'dia', desc: '(1 dia = 24 h)' },
        { un: 'mês', desc: '(1 mês ≈ 730 h)' },
        { un: 'ano', desc: '(1 ano ≈ 8760 h)' },
        { un: 'década', desc: '(1 década ≈ 87600 h)' },
        { un: 'século', desc: '(1 século ≈ 876000 h)' },
        { un: 'milênio', desc: '(1 milênio ≈ 8760000 h)' }
    ];

    // Fatores de conversão para horas (h)
    const conversoes = {
        'ms': 0.000000278,
        's': 0.000278,
        'm': 0.0167,
        'h': 1,
        'dia': 24,
        'mês': 730,
        'ano': 8760,
        'década': 87600,
        'século': 876000,
        'milênio': 8760000
    };

    return (
        <Conversoes unSelecionada="h" unidades={unidades} conversoes={conversoes} img={require("../assets/tempo.png")} />
    );
};

export default ConvTempo;
