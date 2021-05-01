import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Modal, ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Picker} from '@react-native-community/picker';
import { Appbar, Menu  } from 'react-native-paper';
import InputForm from '../inputForm';

const AddUsuario = (props) => {

  const initialFormState = {

    nome: "",
    sobrenome: "",
    nascimento: "",
    documento: "",
    sexo: "",
    contato: "",
    email: "",
    senha: "",

  }

  const [usuarios, setUsuario] = useState(initialFormState)
  const {openModal, closeModal} = props

  const handleChange = (value, name) => {
    setUsuario({...usuarios, [name]: value})
  }

  const addUsuario = async () => {
    props.addUsuario(usuarios) 
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
            nomeDoCampo = {"Sobrenome: "} 
            evento = {(text) => handleChange(text, "sobrenome")}
          />
          
          <InputForm 
            nomeDoCampo = {"Data de Nascimento: "} 
            evento = {(text) => handleChange(text, "nascimento")}
            numeric = {true}
          />


          <InputForm 
            nomeDoCampo = {"CPF/CNPJ: "} 
            evento = {(text) => handleChange(text, "documento")}
          />

          <Text style = {styles.titleInput}>Sexo:</Text>
          
          <Picker
          style = {styles.textInput}
            selectedValue = {usuarios.sexo}
            onValueChange = {(itemValue, intemIndex) =>   
            handleChange(itemValue, "sexo")}
          >
            
            <Picker.Item label = "Masculino"  value = "masculino"/>
            <Picker.Item label = "Feminino"  value = "feminino"/>

          </Picker>

          <InputForm 
            nomeDoCampo = {"Contato: "} 
            evento = {(text) => handleChange(text, "contato")}
            numeric = {true}
          />
          
          <InputForm 
            nomeDoCampo = {"E-mail: "} 
            evento = {(text) => handleChange(text, "email")}
            numeric = {true}
          />

          <InputForm 
            nomeDoCampo = {"Senha: "} 
            evento = {(text) => handleChange(text, "senha")}
          />
      
          <View>
            <TouchableOpacity
              style = {styles.button}
              onPress = {addUsuario}
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

export default AddUsuario