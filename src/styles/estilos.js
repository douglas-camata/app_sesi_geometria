import { StyleSheet } from "react-native";

const corPrincipal = "#0055ff";
const corSecundaria = "#29292E";
const corBorda = "#CCC";
const corTexto = "#222";
const corTitulo = "#a1a1a1";
const corBranco = "#fff";

const estilos = StyleSheet.create({
  linhaFiguras: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    paddingHorizontal: 10,
  },
  figuraGeometrica: {
    minWidth: 150,
    marginVertical: 10,
    alignItems: "center",
    backgroundColor: corBranco,
    padding: 10,
    borderRadius: 8,
    // Sombra para iOS
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // Sombra para Android
    elevation: 5,
  },
  imgFigura: {
    width: 120,
    height: 120,
    marginTop: 10,
  },
  botao: {
    backgroundColor: corPrincipal,
    borderRadius: 4,
    paddingVertical: 8,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  textoBotao: {
    fontSize: 18,
    color: corBranco,
    fontWeight: "bold",
  },
  texto: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: corPrincipal,
    marginVertical: 5,
  },
  tituloFigura: {
    fontSize: 18,
    fontWeight: "bold",
    color: corPrincipal,
  },
  input: {
    margin: 3,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    backgroundColor: "#fff",
    maxWidth: 110
  },
  linha: {
    width: '100%',  
    height: 1,      
    backgroundColor: corPrincipal,
    marginVertical: 10,      
  },
  linhaFlatListUn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    gap: 10,
    width: '100%'
  },
  unTexto: {
    flex: 3,
    color: '#007AFF',
    fontSize: 16,
  },
  valorUnMedida: {
    flex: 2,
    color: '#FF4500',
    fontSize: 16,
    textAlign: 'right',
  },
  picker: {
    minWidth: 150,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    margin: 3
  },
  imgConv: {
    width: 60,
    maxHeight: 60,
  }

});
export {
  corPrincipal,
  corSecundaria,
  corBorda,
  corTexto,
  corTitulo,
  corBranco,
  estilos,
};