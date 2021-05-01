import React, { useState } from 'react';
import {Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import InputForm from '../inputForm';

const DeletePagamento = (props) => {


  const {openModal, closeModal, selectedPagamento} = props;

  const deletePagamento =  () => {
    props.closeModal();
    props.deletePagamento(props.selectedPagamento.nome)
  }
 
  return(
   
    <Modal
      visible = {openModal}
      onRequestClose = {closeModal}
      animationType = "slide"
      transparent    >
      <View style = {styles.BackgroundContainer}>
        <View style = {styles.container}>
          <Text style = {styles.title}>Gostaria de deletar o pagamento ({selectedPagamento.nome})?</Text>
          
          <View>
            <TouchableOpacity
              style = {styles.button}
              onPress = {deletePagamento}
            >
              <Text style = {{color: "red"}}>Deletar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style = {styles.button}
              onPress = {closeModal}
            >
              <Text>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );

}

const styles = StyleSheet.create({
  BackgroundContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,1)"
  },
  container:{
    width: "90%",
    padding: 15,
    maxHeight: "40%",
    backgroundColor: "white",
    borderRadius: 8,
    elevation: 4
  }

});

export default DeletePagamento