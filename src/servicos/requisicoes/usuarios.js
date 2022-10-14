import api from "../api"

export async function buscaUsuario(nomeUsuario){
    try {
        const resultado = await api.get(`/users?login=${nomeUsuario}`);
        console.log('aqui', resultado.data)
        return  resultado.data;
    }
    catch (error){
        console.log(error)
        return {}
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
        return 'sucesso'
    }
    catch (error){
        console.log(error)
        return 'erro'
    }

}