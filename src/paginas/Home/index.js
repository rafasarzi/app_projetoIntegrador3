import React from "react";
import { View,TouchableOpacity, Text } from "react-native";
import Usuarios from "../Clientes";
import Principal from"../Principal"
import CriarCliente from "../CriarCliente";
import estilos from "./estilos";
import Cabecalho from '../../componentes/Cabecalho';
import { auth } from '../../config/firebase';


export default function Home({navigation}){
  const usuario = auth.currentUser;
  function deslogar(){
    auth.signOut();
    navigation.replace('Login');
  }
    return <View style={estilos.container}>
            <Cabecalho logout={deslogar}>
            <Text style={estilos.textoUser}>Usuário: {usuario.email}</Text>
            </Cabecalho>
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