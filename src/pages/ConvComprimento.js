import React from "react";
import Conversoes from "./Conversoes";

const ConvComprimento = () => {
    const unidades = [
        {un: 'mm', desc: '(1 mm)'},
        {un: 'cm', desc: '(1cm = 10mm)'},
        {un: 'dm', desc: '(1dm = 10cm)'},
        {un: 'ft', desc: '(1ft (pé) = 0.3048m)'},
        {un: 'm', desc: '(1m = 100cm)'},
        {un: 'in', desc: '(1in (polegada) = 2.54cm)'},
        {un: 'yd', desc: '(1yd (jarda) = 0.91m)'},
        {un: 'mile', desc: '(1mile = 1609.34m)'},
        {un: 'km', desc: '(1km = 1000m)'},
    ]

    //Objeto que guarda a relação de cada unidade com milímetros (mm)
    const conversoes = {
        mm: 1,     // 1mm é ele mesmo
        cm: 10,    // 1cm = 10mm 
        dm: 100,   // 1dm = 10cm = 100mm
        ft: 304.8, // 1ft pés = 304.8mm
        m: 1000,   // 1m = 1000mm
        in: 25.4,  // 1in (inch) polegada = 25.4mm
        yd: 914.4, // 1yd (yard) jarda = 914.4mm
        km: 1000000, // 1km quilômetro = 1000000mm
        mile: 1609344, // 1mile milha = 1609344mm
    }

    return (
        <Conversoes
            unSelecionada="m"
            unidades={unidades}
            conversoes={conversoes}
            img={require('../assets/comprimento.png')} // Referência de imagem corrigida
        />
    );
};

export default ConvComprimento;
