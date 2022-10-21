import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import estilos from './estilos';

export default function Cabecalho({ logout }) {

  return (
    <View style={estilos.container}>
      <Text style={estilos.texto}>Bem vindo</Text>
      <TouchableOpacity style={estilos.botao} onPress={logout}>
        <Icon 
          name={'log-out'} 
          size={20} 
          color="#ccc"
        />
      </TouchableOpacity>
    </View>
  );
}