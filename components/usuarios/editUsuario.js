import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {Alert, Modal, ScrollView, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Appbar, Menu  } from 'react-native-paper';
import {Picker} from '@react-native-community/picker';
import InputForm from '../inputForm';
import { useEffect } from 'react';

const EditUsuario = (props) => {

  const initialUsuariosState = {
    mome: "",
    modelo: "",
    marca: "",
    descricao: "",
    estoque: "",
    valor: "",
    categoria: "",
    imagens: "",
    ativo: "",
    frete: "",
    
  }

  const [usuarios, setUsuario] = useState(initialUsuariosState)
  const {openModal, closeModal} = props

  useEffect(() => {
    const data = {
      nome: props.selectedUsuario.nome,
      sobrenome: props.selectedUsuario.sobrenome,
      nascimento: props.selectedUsuario.nascimento,
      documento: props.selectedUsuario.documento,
      sexo: props.selectedUsuario.sexo,
      contato: props.selectedUsuario.contato,
      email: props.selectedUsuario.email,
      senha: props.selectedUsuario.senha,

    }
    setUsuario(data)
  }, [])

  const handleChange = (value, name) => {
    setUsuario({...usuarios, [name]: value})
  }

  const updateUsuario = () => {

    if(usuarios.nome,usuarios.sobrenome,usuarios.nascimento,usuarios.documento,usuarios.sexo,usuarios.contato,usuarios.categoria,usuarios.imagens,usuarios.frete != ""){
      props.updateUsuario({
        nome: usuarios.nome,
        sobrenome: usuarios.sobrenome,
        nascimento: usuarios.nascimento,
        documento: usuarios.documento,
        sexo: usuarios.sexo,
        contato: usuarios.contato,
        email: usuarios.email,
        senha: usuarios.senha,
      })
      props.closeModal();
    }else {

    }
    
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
          value = {usuarios.nome}
          onChangeText = {(text) => handleChange(text, "nome")}
        />

        <TextInput 
          style = {styles.textInput}
          value = {usuarios.sobrenome}
          onChangeText = {(text) => handleChange(text, "sobrenome")}
          numeric = {true}
        />

        <TextInput 
          style = {styles.textInput}
          value = {usuarios.nascimento}
          onChangeText = {(text) => handleChange(text, "nascimento")}
        />

        <TextInput 
          style = {styles.textInput}
          value = {usuarios.documento}
          onChangeText = {(text) => handleChange(text, "documento")}
        />
        
        <TextInput 
          style = {styles.textInput}
          value = {usuarios.sexo}
          onChangeText = {(text) => handleChange(text, "sexo")}
        />

        <TextInput 
          style = {styles.textInput}
          value = {usuarios.contato}
          onChangeText = {(text) => handleChange(text, "contato")}
        />
   
        <TextInput 
          style = {styles.textInput}
          value = {usuarios.email}
          onChangeText = {(text) => handleChange(text, "email")}
        />

        <TextInput 
          style = {styles.textInput}
          value = {usuarios.senha}
          onChangeText = {(text) => handleChange(text, "senha")}
        />

        <View>
          <TouchableOpacity
            style = {styles.button}
            onPress = {updateUsuario}
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

export default EditUsuario