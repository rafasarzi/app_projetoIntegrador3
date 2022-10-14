import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, Alert, Picker} from 'react-native';
import estilos from './estilos';
import { salvarRepositoriosDoUsuario, deletarRepositorioDoUsuario } from '../../servicos/requisicoes/repositorios';

export default function InfoRepositorio({ route, navigation }) {
    const [nome, setNome] = useState('Presente');
    const [data, setData] = useState(route.params.item.data);

    async function salvar(){
        const resultado = await salvarRepositoriosDoUsuario(
            route.params.item.postId,
            nome,
            data,
            route.params.item.id
        )
        
        if( resultado === 'sucesso'){
            Alert.alert('Status atualizado!')
            navigation.goBack();
        }
        else {
            Alert.alert('Erro')
        }
    }

    async function deletar(){
        const resultado = await deletarRepositorioDoUsuario(route.params.item.id)
        
        if( resultado === 'sucesso'){
            Alert.alert('Status deletado!')
            navigation.goBack();
        }
        else {
            Alert.alert('Erro ao deletar o status')
        }
    }

    return (
        <View style={estilos.container}>
            <Picker
                nome={nome}
                style={estilos.entrada}
                onValueChange={(value) => setNome(value)}
            >
                <Picker.Item label="Presente" value="Presente" />
                <Picker.Item label="Ausente" value="Ausente" />
            </Picker>
            {/* <TextInput
                placeholder="Status"
                autoCapitalize="none"
                style={estilos.entrada}
                value={nome}
                onChangeText={setNome}
            /> */}
            <TextInput
                placeholder="Data de criação"
                autoCapitalize="none"
                style={estilos.entrada}
                value={data}
                onChangeText={setData}
            />
            <TouchableOpacity 
                style={estilos.botao} 
                onPress={salvar}
            >
                <Text style={estilos.textoBotao}>
                    Salvar
                </Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={[estilos.botao, {backgroundColor: '#DD2B2B', marginTop: 10}]} 
                onPress={deletar}
            >
                <Text style={estilos.textoBotao}>
                    Deletar
                </Text>
            </TouchableOpacity>
        </View>
    );
}

