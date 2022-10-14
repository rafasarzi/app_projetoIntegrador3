import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createNativeStackNavigator();

import Principal from './paginas/Principal';
import Repositorios from './paginas/Repositorios';
import CriarRepositorio from './paginas/CriarRepositorio';
import InfoRepositorio from './paginas/InfoRepositorio';
import Home from './paginas/Home';
import Usuarios from './paginas/Clientes'
import CriarCliente from './paginas/CriarCliente'
import Login from './paginas/Login'

export default function Rotas() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Tab.Screen name="Home" component={Home} options={{ headerShown: false }}/>
                <Tab.Screen name="Clientes" component={Usuarios} />
                <Tab.Screen name="Principal" options={{ title: "Perfil" }} component={Principal} />
                <Tab.Screen name="Repositorios" component={Repositorios} />
                <Tab.Screen name="CriarCliente" options={{ title: "Criar Cliente" }} component={CriarCliente} />
                <Tab.Screen name="InfoRepositorio" options={{ title: "Repositório Info" }} component={InfoRepositorio} />
                <Tab.Screen name="CriarRepositorio" options={{ title: "Criar Repositório" }} component={CriarRepositorio} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}