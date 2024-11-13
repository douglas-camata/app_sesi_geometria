import React, { useState, useEffect } from "react";
import { View, Text, TextInput, FlatList, Image } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { estilos } from "../styles/estilos";

const Conversoes = ({ unSelecionada: unidadeInicial, unidades, conversoes, img }) => {
    const [valor, setValor] = useState('1'); // O valor que o usuário digita
    const [unSelecionada, setUnSelecionada] = useState(unidadeInicial); // Unidade inicial
    const [valoresConvertidos, setValoresConvertidos] = useState([]); // Lista de conversões

    const calcular = () => {
        if (!valor || isNaN(parseFloat(valor))) {
            setValoresConvertidos([]);
            return;
        }

        // Converte o valor digitado para a unidade padrão 
        const valorConv = parseFloat(valor) * conversoes[unSelecionada];

        const resultados = unidades.map((unid) => {
            let valorNovo
            if (unid == 'ºF') 
                valorNovo = parseFloat(valor) + 273.15
            else if (unid == 'K') 
                valorNovo = (parseFloat(valor) - 32) * (5 / 9)
            else 
                valorNovo = (valorConv / conversoes[unid.un]).toFixed(3)

            return {
                unidade: `${unid.un} ${unid.desc}`,
                valor: valorNovo,
            }
        })
        setValoresConvertidos(resultados);
    };

    const formatNumber = (value) => {
        return parseFloat(value)
            .toLocaleString('pt-BR', { minimumFractionDigits: 3, maximumFractionDigits: 3 });
    };

    useEffect(() => {
        calcular();
    }, [valor, unSelecionada]);

    return (
        <View style={{ flex: 1, padding: 15 }}>
            <View style={estilos.figuraGeometrica}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={img} style={estilos.imgConv} />
                    <View>
                        <Text style={estilos.texto}> Valor </Text>
                        <TextInput
                            placeholder='Digite um valor'
                            style={estilos.input}
                            keyboardType='numeric'
                            value={valor}
                            onChangeText={setValor}
                        />
                    </View>

                    <View>
                        <Text style={estilos.texto}> Un. Medida </Text>
                        <View style={estilos.picker}>
                            <RNPickerSelect
                                value={unSelecionada}
                                onValueChange={setUnSelecionada}
                                items={unidades.map(unid => ({ label: unid.un, value: unid.un }))}
                                placeholder={{ label: "Escolha uma unidade", value: null }}
                            />
                        </View>
                    </View>
                </View>
            </View>

            <View style={estilos.figuraGeometrica}>
                <Text style={estilos.texto}>Conversão:</Text>
                <FlatList
                    style={{ width: '100%' }}
                    data={valoresConvertidos}
                    keyExtractor={(item) => item.unidade}
                    renderItem={({ item }) => (
                        <View style={[
                            estilos.linhaFlatListUn,
                            { backgroundColor: parseFloat(item.valor) === parseFloat(valor) ? '#eee' : null }
                        ]}>
                            <Text style={estilos.valorUnMedida}>{formatNumber(item.valor)}</Text>
                            <Text style={estilos.unTexto}>{item.unidade}</Text>
                        </View>
                    )}
                />
            </View>
        </View>
    );
};

export default Conversoes;
