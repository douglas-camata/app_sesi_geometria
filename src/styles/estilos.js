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
  },
  linha: {
    width: '100%',  
    height: 1,      
    backgroundColor: corPrincipal,
    marginVertical: 10,      
  },
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