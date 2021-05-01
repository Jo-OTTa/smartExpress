import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {Alert, Modal, ScrollView, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Appbar, Menu  } from 'react-native-paper';
import {Picker} from '@react-native-community/picker';
import InputForm from '../inputForm';
import { useEffect } from 'react';

const EditProduto = (props) => {

  const initialProdutosState = {
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

  const [produtos, setProduto] = useState(initialProdutosState)
  const {openModal, closeModal} = props

  useEffect(() => {
    const data = {
      nome: props.selectedProduto.nome,
      modelo: props.selectedProduto.modelo,
      marca: props.selectedProduto.marca,
      descricao: props.selectedProduto.descricao,
      estoque: props.selectedProduto.estoque,
      valor: props.selectedProduto.valor,
      categoria: props.selectedProduto.categoria,
      imagens: props.selectedProduto.imagens,
      ativo: props.selectedProduto.ativo,
      codPromocional: props.selectedProduto.codPromocional,
      desconto: props.selectedProduto.desconto,
      frete: props.selectedProduto.frete,
    }
    setProduto(data)
  }, [])

  const handleChange = (value, name) => {
    setProduto({...produtos, [name]: value})
  }

  const updateProduto = () => {

    if(produtos.nome,produtos.modelo,produtos.marca,produtos.descricao,produtos.estoque,produtos.valor,produtos.categoria,produtos.imagens,produtos.frete != ""){
      props.updateProduto({
        nome: produtos.nome,
        modelo: produtos.modelo,
        marca: produtos.marca,
        descricao: produtos.descricao,
        estoque: produtos.estoque,
        valor: produtos.valor,
        categoria: produtos.categoria,
        imagens: produtos.imagens,
        ativo: produtos.ativo,
        frete: produtos.frete,
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
          value = {produtos.nome}
          onChangeText = {(text) => handleChange(text, "nome")}
        />

        <TextInput 
          style = {styles.textInput}
          value = {produtos.modelo}
          onChangeText = {(text) => handleChange(text, "modelo")}
          numeric = {true}
        />

        <TextInput 
          style = {styles.textInput}
          value = {produtos.marca}
          onChangeText = {(text) => handleChange(text, "marca")}
        />
        
         <Picker
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
          style = {styles.textInput}
          value = {produtos.estoque}
          nomeDoCampo = {"Estoque: "} 
          evento = {(text) => handleChange(text, "estoque")}
          numeric = {true}
        />
        
        <InputForm 
          style = {styles.textInput}
          value = {produtos.valor}
          nomeDoCampo = {"Valor: "} 
          evento = {(text) => handleChange(text, "valor")}
          numeric = {true}
        />

        <InputForm 
          style = {styles.textInput}
          value = {produtos.estoque}
          nomeDoCampo = {"Estoque: "} 
          evento = {(text) => handleChange(text, "estoque")}
        />

        {/* <InputForm 
          style = {styles.textInput}
          value = {produtos.codPromocional}
          nomeDoCampo = {"Código Promocional: "} 
          evento = {(text) => handleChange(text, "codPromocional")}
        />

        <InputForm 
          style = {styles.desconto}
          value = {produtos.nome}
          nomeDoCampo = {"desconto: "} 
          evento = {(text) => handleChange(text, "valor")}
          numeric = {true}
        />
         */}

        <InputForm 
          style = {styles.frete}
          value = {produtos.frete}
          nomeDoCampo = {"Frete: "} 
          evento = {(text) => handleChange(text, "frete")}
          numeric = {true}
        />

        <Text style={styles.title}>Publicar</Text>
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
            onPress = {updateProduto}
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

export default EditProduto