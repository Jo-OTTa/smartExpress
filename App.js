import React from 'react';
import { StyleSheet, View,} from 'react-native';
import { Menu  } from 'react-native-paper';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import AddUsuario from './components/usuarios/listUsuario';
import ListProduto from './components/produtos/listProduto';
import ListPagamento from './components/formaPagamento/listPagamento';

import Home from './components/Home'

const Drawer = createDrawerNavigator()

export default function App() {
  return (
  
    <NavigationContainer styles = {styles.menu}>
      <Drawer.Navigator initialRouteName="Listar Produto">
        <Drawer.Screen name="Cadastrar Usuário" component={AddUsuario} />
        <Drawer.Screen name="Listar Produto" component={ListProduto} />
        <Drawer.Screen name="Adicionar Pagamento" component={ListPagamento} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
 menu:{
    backgroundColor: '#ff3547',
 }


});
