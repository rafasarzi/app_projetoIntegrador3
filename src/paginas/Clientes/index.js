import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { pegaUsuarios } from '../../servicos/requisicoes/usuarios';
import estilos from './estilos';
import Repositorios from '../Repositorios';

export default function Usuarios({ navigation }) {
    const [user, setUser] = useState([]);
    const estaNaTela = useIsFocused()

    useEffect( async () => {
        const resultUser = await pegaUsuarios()
        console.log('usuario:::::::;', resultUser);
        setUser(resultUser)
    },[estaNaTela])

    return (
        <ScrollView>
        <View style={estilos.container}>
                <Text style={estilos.textoNome}>{user.length} status criado</Text>
                <FlatList
                    data={user}
                    keyExtractor={user => user.id}
                    renderItem={({ item }) => (
                        <><Text style={estilos.textoNome}>Nome: {item.name}</Text><Text style={estilos.textoEmail}>Email: {item.email}</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Repositorios', { id: item.id }, (console.log('aqui', Repositorios)))}>
                            <Text style={estilos.seguidoresTexto}>ver status</Text>
                        </TouchableOpacity></>
                    )}
                />

        </View>
        </ScrollView>
    );
}
