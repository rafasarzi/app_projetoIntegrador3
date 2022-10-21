import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, Alert, Picker } from 'react-native';
import { EntradaTexto } from '../../componentes/EntradaTexto';
import { criarUsuario, pegaUsuarios } from '../../servicos/requisicoes/usuarios';
import estilos from '../Principal/estilos';

export default function CriarCliente({ navigation }) {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [login, setLogin] = useState('')
    const [statusError, setStatusError] = useState('')
    const [mensagemError, setMensagemError] = useState('')

    async function criar(){
        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
        if (!(emailRegex).test(email)) {
            setMensagemError('Digite um email válido')
            setStatusError('email')
            console.log('email', email)
        }else if (email === ''){
            setMensagemError('Digite seu email')
            setStatusError('email')
            console.log('email', email)
        }else if(nome ===''){
            setMensagemError('Digite seu nome')
            setStatusError('nome')
        }else if(login === ''){
            setMensagemError('Digite username')
            setStatusError('login')
        }
        // else if (pegaUsuarios(email === email)){
        //     console.log('email', email);
        //     setMensagemError('Email já cadastrado')
        //     setStatusError('email')
        // }
        else{
             await criarUsuario(
                nome,
                email,
                login,
            )
            setEmail('')
            setLogin('')
            setNome('')
            setMensagemError('')
            setStatusError('')
        }

    }

    return (
        <View style={estilos.container}>
            <EntradaTexto 
                label="E-mail"
                value={email}
                onChangeText={texto => setEmail(texto)}
                error={statusError == 'email'}
                messageError={mensagemError}
            />
            <EntradaTexto
                label="Nome"
                value={nome}
                onChangeText={texto => setNome(texto)}
                error={statusError == 'nome'}
                messageError={mensagemError}
            />
            <EntradaTexto
                label="Username"
                value={login}
                onChangeText={texto => setLogin(texto)}
                error={statusError == 'login'}
                messageError={mensagemError}           
             />
            <TouchableOpacity 
                style={estilos.botao}
                onPress={criar}
            >
                <Text style={estilos.textoBotao}>
                    CRIAR
                </Text>
            </TouchableOpacity>
        </View>
    );
}
