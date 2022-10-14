import React from "react";
import { View,TouchableOpacity, Text } from "react-native";
import Usuarios from "../Clientes";
import CriarCliente from "../CriarCliente";
import estilos from "../CriarRepositorio/estilos";
import Principal from "../Principal";

export default function Home({navigation}){
    return <View style={estilos.container}>
            <Text>Aqui</Text>
            <TouchableOpacity onPress={() => navigation.navigate('CriarCliente', (console.log('aqui', CriarCliente)))}
            style={estilos.botao}>
                <Text style={estilos.textoBotao}>
                    Cadastrar
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Principal', (console.log('aqui', Principal)))}
            style={estilos.botao}>
                <Text style={estilos.textoBotao}>
                    Buscar
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Clientes', (console.log('aqui', Usuarios)))}
            style={estilos.botao}>
                <Text style={estilos.textoBotao}>
                    Clientes
                </Text>
            </TouchableOpacity>
    </View>
}