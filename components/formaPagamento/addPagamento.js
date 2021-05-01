import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Modal, ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Picker} from '@react-native-community/picker';
import { Appbar, Menu  } from 'react-native-paper';
import InputForm from '../inputForm';

const AddPagamento = (props) => {

  const initialFormState = {
    nomeCartao: "",
    titular: "",
    numeroCartao: "",
    vencimento: "",
    codSeguranca: "",
    bandeira: "", 
    
  }

  const [pagamentos, setPagamento] = useState(initialFormState)
  const {openModal, closeModal} = props

  const handleChange = (value, name) => {
    setPagamento({...pagamentos, [name]: value})
  }

  const addPagamento = async () => {
    props.addPagamento(pagamentos) 
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
            nomeDoCampo = {"Nome do cartão: "} 
            evento = {(text) => handleChange(text, "nomeCartao")}
          />

          <InputForm 
            nomeDoCampo = {"titular: "} 
            evento = {(text) => handleChange(text, "titular")}
            numeric = {true}
          />

          <InputForm 
            nomeDoCampo = {"Numero do cartão: "} 
            evento = {(text) => handleChange(text, "numeroCartao")}
          />

          <Text style = {styles.titleInput}>Categoria</Text>

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
            thumbColor = {pagamentos.ativo ? "#ff3547" : "#f4f3f4"}
            onValueChange = {(toglleSwitch) => handleChange(toglleSwitch, "ativo")}
            value={pagamentos.ativo}
          >
          </Switch>

          <View>
            <TouchableOpacity
              style = {styles.button}
              onPress = {addPagamento}
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

export default AddPagamento