import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {Alert, Modal, ScrollView, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Appbar, Menu  } from 'react-native-paper';
import {Picker} from '@react-native-community/picker';
import InputForm from '../inputForm';
import { useEffect } from 'react';

const EditPagamento = (props) => {

  const initialPagamentosState = {
    nomeCartao: "",
    titular: "",
    numeroCartao: "",
    vencimento: "",
    codSeguranca: "",
    bandeira: "", 
    
  }

  const [pagamentos, setPagamento] = useState(initialPagamentosState)
  const {openModal, closeModal} = props

  useEffect(() => {
    const data = {
      nomeCartao: props.selectedPagamento.nomeCartao,
      titular: props.selectedPagamento.titular,
      numeroCartao: props.selectedPagamento.numeroCartao,
      vencimento: props.selectedPagamento.vencimento,
      codSeguranca: props.selectedPagamento.codSeguranca,
      bandeira: props.selectedPagamento.bandeira,
    }
    setPagamento(data)
  }, [])

  const handleChange = (value, name) => {
    setPagamento({...pagamentos, [name]: value})
  }

  const updatePagamento = () => {

 
    props.updatePagamento({
      nomeCartao: pagamentos.nomeCartao,
      titular: pagamentos.titular,
      numeroCartao: pagamentos.numeroCartao,
      vencimento: pagamentos.vencimento,
      codSeguranca: pagamentos.codSeguranca,
      bandeira: pagamentos.bandeira,
    })
    props.closeModal();
  
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
        <Text style = {styles.textTitle}>Alterar</Text>
      </Appbar.Header>

      <ScrollView style = {styles.ScrollView}>
        <View style = {styles.regForm}>
        <StatusBar styll = "auto" />
        <TextInput 
          style = {styles.textInput}
          value = {pagamentos.nomeCartao}
          onChangeText = {(text) => handleChange(text, "nomeCartao")}
        />

        <TextInput 
          style = {styles.textInput}
          value = {pagamentos.vencimento}
          onChangeText = {(text) => handleChange(text, "vencimento")}
          numeric = {true}
        />

        <TextInput 
          style = {styles.textInput}
          value = {pagamentos.numeroCartao}
          onChangeText = {(text) => handleChange(text, "numeroCartao")}
        />

        <InputForm 
          style = {styles.textInput}
          value = {pagamentos.estoque}
          nomeDoCampo = {"Estoque: "} 
          evento = {(text) => handleChange(text, "estoque")}
          numeric = {true}
        />
        
        <InputForm 
          style = {styles.textInput}
          value = {pagamentos.codSeguranca}
          nomeDoCampo = {"Valor: "} 
          evento = {(text) => handleChange(text, "codSeguranca")}
          numeric = {true}
        />

        <InputForm 
          style = {styles.textInput}
          value = {pagamentos.bandeira}
          nomeDoCampo = {"Estoque: "} 
          evento = {(text) => handleChange(text, "bandeira")}
        />

        <View>
          <TouchableOpacity
            style = {styles.button}
            onPress = {updatePagamento}
          >
            <Text style = {styles.textButton}>Salvar</Text>
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

export default EditPagamento