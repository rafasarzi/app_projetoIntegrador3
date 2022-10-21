import { Alert } from "react-native";
import api from "../api"

export async function buscaUsuario(nomeUsuario){
    try {
        const resultado = await api.get(`/users?email=${nomeUsuario}`);
        console.log('aqui', resultado.data)
        return  resultado.data;
    }
    catch (error){
        console.log(error)
        return Alert.alert('Erro:  Usuário não encontrador')
    }
}
export async function pegaUsuarios(){
    try {
        const resultado = await api.get(`/users`);
        console.log('aqui', resultado.data)
        return  resultado.data;
    }
    catch (error){
        console.log('errorrrr',error)
        return {}
    }
}

export async function criarUsuario(nome, email, login){
    try {
        await api.post(`/users`, {
            name: nome,
            email: email,
            login: login
        });
        return Alert.alert('Cliente cadastrado com sucesso')
    }
    catch (error){
        console.log('erorrrr',error)
        return Alert.alert('Erro: Email já cadastrado')
    }
}

    export async function atualizaCliente(nome, email, login, id){
        try {
            await api.put(`/users/${id}`, {
                name: nome,
                email: email,
                login: login
            });
            return Alert.alert('Cliente atualizado com sucesso')
        }
        catch (error){
            console.log(error)
            return Alert.alert('Não Atualizado')
        }
    }

