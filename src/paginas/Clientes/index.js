import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { pegaUsuarios } from '../../servicos/requisicoes/usuarios';
import estilos from './estilos';
import Repositorios from '../Repositorios';
import InfoCliente from '../infoCliente';

export default function Usuarios({ navigation }) {
    const [user, setUser] = useState([]);
    const estaNaTela = useIsFocused()

    useEffect( async () => {
        const resultUser = await pegaUsuarios()
        console.log('usuario:::::::;', resultUser);
        setUser(resultUser)
    },[estaNaTela])

    return (

        <SafeAreaView >
        <ScrollView>
                <Text style={estilos.textoNome}>{user.length} Clientes criados</Text>
                <FlatList
                    data={user}
                    keyExtractor={user => user.id}
                    renderItem={({ item }) => (
                        <><Text style={estilos.textoNome}>Nome: {item.name}</Text><Text style={estilos.textoEmail}>Email: {item.email}</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('InfoCliente', { id: item.id }, (console.log('aqui', InfoCliente)))}>
                            <Text style={estilos.seguidoresTexto}>ver cliente</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Repositorios', { id: item.id }, (console.log('aqui', Repositorios)))}>
                            <Text style={estilos.seguidoresTexto}>ver status</Text>
                        </TouchableOpacity></>
                    )}
                />
        </ScrollView>

        </SafeAreaView>
        
    );
}
