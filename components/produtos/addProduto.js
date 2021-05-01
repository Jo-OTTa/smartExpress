import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Modal, ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Picker} from '@react-native-community/picker';
import { Appbar, Menu  } from 'react-native-paper';
import InputForm from '../inputForm';

const AddProduto = (props) => {

  const initialFormState = {
    id: 1,
    mome: "",
    modelo: "",
    marca: "",
    descricao: "",
    estoque: "",
    valor: "",
    categoria: "",
    imagens: "",
    ativo: "true",
    // codPromocional: "",
    // desconto: "",
    frete: "",
    
  }

  const [produtos, setProduto] = useState(initialFormState)
  const {openModal, closeModal} = props

  const handleChange = (value, name) => {
    setProduto({...produtos, [name]: value})
  }

  const addProduto = async () => {
    props.addProduto(produtos) 
    props.closeModal()
  }
 
  return(
   
    <Modal
      visible = {openModal}
      onRequestClose = {closeModal}
      animationType = "slide"
    >
      <Appbar.Header style = {styles.Appbar}>
        <Appbar.BackAction 
        size={30}
        onPress={closeModal} 
        />
        <Text style = {styles.textTitle}>Cadastrar</Text>
      </Appbar.Header>

      <ScrollView style = {styles.ScrollView}>
        <View style = {styles.regForm}>
          <StatusBar barStyle='light-content' backgroundColor=''/>
      
          <InputForm 
            nomeDoCampo = {"Nome: "} 
            evento = {(text) => handleChange(text, "nome")}
          />

          <InputForm 
            nomeDoCampo = {"Modelo: "} 
            evento = {(text) => handleChange(text, "modelo")}
            numeric = {true}
          />

          <InputForm 
            nomeDoCampo = {"Marca: "} 
            evento = {(text) => handleChange(text, "marca")}
          />

          <Text style = {styles.titleInput}>Categoria</Text>
          
          <Picker
          style = {styles.textInput}
            selectedValue = {produtos.marca}
            onValueChange = {(itemValue, intemIndex) =>   
            handleChange(itemValue, "marca")}
          >
            
            <Picker.Item label = "Veículos"  value = "veiculos"/>
            <Picker.Item label = "Tecnologia"  value = "tecnologia"/>
            <Picker.Item label = "Casa e Móveis"  value = "casaemoveis"/>
            <Picker.Item label = "Eletrodomésticos"  value = "eletrodomesticos"/>
            <Picker.Item label = "Esporte e Fitness"  value = "esportefitness"/>
            <Picker.Item label = "Ferramentas"  value = "ferramentas"/>
            <Picker.Item label = "Construção"  value = "construcao"/>
            <Picker.Item label = "Indústria e Comércio"  value = "industriaecomercio"/>
            <Picker.Item label = "Saúde"  value = "saude"/>
            <Picker.Item label = "Acessórios para Veículos"  value = "acessoriosparaveiculos"/>
            <Picker.Item label = "Beleza e cuidado Pessoal"  value = "Belezaecuidadopessoal"/>
            <Picker.Item label = "Moda"  value = "moda"/>
            <Picker.Item label = "Bebês"  value = "bebes"/>
            <Picker.Item label = "Brinquedos"  value = "brinquedos"/>
            <Picker.Item label = "Imóveis"  value = "imoveis"/>
            <Picker.Item label = "Produtos Sustentáveis"  value = "produtossustentaveis"/>
            <Picker.Item label = "+Categorias"  value = "maiscategorias"/>
          </Picker>

          <InputForm 
            nomeDoCampo = {"Descrição: "} 
            evento = {(text) => handleChange(text, "descricao")}
            numeric = {true}
          />
          
          <InputForm 
            nomeDoCampo = {"Valor: "} 
            evento = {(text) => handleChange(text, "valor")}
            numeric = {true}
          />

          <InputForm 
            nomeDoCampo = {"Estoque: "} 
            evento = {(text) => handleChange(text, "estoque")}
          />

          
          <InputForm 
            nomeDoCampo = {"Frete: "} 
            evento = {(text) => handleChange(text, "frete")}
            numeric = {true}
          />

          <Text style = {[styles.titleInput]}> Publicar</Text>

          <Switch
            style = {{alignItems:'center'}}
            trackColor = {{false: "#e17a83", true: "#e4abb0"}}
            thumbColor = {produtos.ativo ? "#ff3547" : "#f4f3f4"}
            onValueChange = {(toglleSwitch) => handleChange(toglleSwitch, "ativo")}
            value={produtos.ativo}
          >
          </Switch>

          <View>
            <TouchableOpacity
              style = {styles.button}
              onPress = {addProduto}
            >
              <Text style = {styles.textButton}>Cadastrar</Text>
            </TouchableOpacity>
            
          </View>
    
        </View>
      </ScrollView>
    </Modal>
  );

}

const styles = StyleSheet.create({

  ScrollView:{
    flex: 1,
    paddingHorizontal: 30,
  },
  regForm: {
   alignSelf: "stretch",
   marginTop:30
  },
  textTitle: {
    fontSize: 20,
    color: '#fff',
  },
  button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    backgroundColor: '#ff3547',
    marginVertical:30,
    padding: 20
  },
  textButton: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  Appbar:{
    backgroundColor: '#ff3547',
    height: 20,
    paddingBottom: 30
  },
  titleInput: {
    fontWeight:'300',
    color: '#757575',
    fontSize: 20,
    marginBottom:10
  },
  textInput: {
    alignSelf:'stretch',
    height: 40,
    borderColor: '#ced4da',
    borderWidth: 1,
    color: '#757575',
    fontSize:20,
    marginBottom:20,
    height: 50,
    padding: 10,
    paddingLeft: 15
  }
  
});

export default AddProduto