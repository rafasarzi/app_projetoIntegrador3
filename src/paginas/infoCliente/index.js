import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, Alert, Picker, FlatList} from 'react-native';
import estilos from './estilos';
import { atualizaCliente, salvarCliente } from '../../servicos/requisicoes/usuarios';
import { pegarRepositoriosDoUsuario } from '../../servicos/requisicoes/repositorios';

export default function InfoCliente({ route, navigation }) {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [login, setLogin] = useState('');
    const [repo, setRepo] = useState([]);
    const estaNaTela = useIsFocused()

    useEffect( async () => {
        const resultado = await pegarRepositoriosDoUsuario(route.params.id)
        console.log('resultado:::::::;', resultado);
        setRepo(resultado)
    },[estaNaTela])

    async function salvar(){
        const resultado = await atualizaCliente(
            nome,
            email,
            login,
            route.params.item.id
        )
        console.log('atualiza', resultado);
        if( resultado === 'sucesso'){
            Alert.alert('Status atualizado!')
            navigation.goBack();
        }
        else {
            Alert.alert('Erro')
        }
    }

    return (
        <View style={estilos.container}>
            <FlatList
                    data={repo}
                    style={{ width: '100%' }}
                    keyExtractor={repo => repo.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity 
                            style={estilos.repositorio}
                            onPress={() => navigation.navigate('InfoRepositorio', {item})}
                        >
                            <Text style={estilos.repositorioNome}>{item.name}</Text>
                            <Text style={estilos.repositorioData}>Data {item.data}</Text>
                        </TouchableOpacity>
                    )}
                />
            {/* <Picker
                nome={nome}
                style={estilos.entrada}
                onValueChange={(value) => setNome(value)}
            >
                <Picker.Item label="Presente" value="Presente" />
                <Picker.Item label="Ausente" value="Ausente" />
            </Picker> */}
            {/* <TextInput
                placeholder="Status"
                autoCapitalize="none"
                style={estilos.entrada}
                value={nome}
                onChangeText={setNome}
            /> */}
            <Text style={estilos.textoNome}>Nome: {nome}</Text>
            <Text style={estilos.textoEmail}>Email: {email}</Text>
            {/* <TextInput
                placeholder={nome}
                autoCapitalize="none"
                style={estilos.entrada}
                value={nome}
                onChangeText={setNome}
            />
            <TextInput
                placeholder={email}
                autoCapitalize="none"
                style={estilos.entrada}
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                placeholder={login}
                autoCapitalize="none"
                style={estilos.entrada}
                value={login}
                onChangeText={setLogin}
            /> */}
            <TouchableOpacity 
                style={estilos.botao} 
                onPress={salvar}
            >
                <Text style={estilos.textoBotao}>
                    Salvar
                </Text>
            </TouchableOpacity>
        </View>
    );
}

