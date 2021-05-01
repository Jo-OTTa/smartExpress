import React from 'react';
import { useState } from 'react';
import { Avatar, IconButton, Appbar, Button, Card, Title, Paragraph} from 'react-native-paper';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView,Image } from 'react-native';
import AddPagamento from './addPagamento';
import DeletePagamento from './deletePagamento';
import EditPagamento from './editPagamento';

const ListPagamento = () => {

    const [ListPagamentoModalOpen, setPagamentoModalOpen] = useState(false)
    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false)
    const [isEditModalOpen, setEditModalOpen] = useState(false)
    const [pagamentos, setPagamentos] = useState([])
    const [selectedPagamento, setSelectedPagamento] = useState(false)

    const toggleAddPagamento = () => {
        setPagamentoModalOpen(!ListPagamentoModalOpen)
    }
    
    const addPagamento = (data) => {
        setPagamentos([data, ...pagamentos])
    }

    const deletePagamento = nome => {
        setPagamentos(pagamentos.filter(cli => cli.nome !== nome ))
    }

    const updatePagamento = (data) => {
        setPagamentos(pagamentos.map(cli => cli.nome == data.nome ? data : cli ))
    }

    const deletModalPagamento = () => {
        setDeleteModalOpen(!isDeleteModalOpen)
    }

    const editModalPagamento = () => {
        setEditModalOpen(!isEditModalOpen)
    }
    
    return (
        <View>
            <Appbar.Header style = {styles.Appbar}>
                <TouchableOpacity onPress = {toggleAddPagamento} style = {styles.buttonModal}>
                <Avatar.Icon style = {styles.buttonHeader} size={24} icon="plus" />
                <Text style = {styles.textTitle}> Adicionar Pagamento</Text>
                </TouchableOpacity>
            </Appbar.Header>

            <View style = {{padding:30}}>
 
                {ListPagamentoModalOpen ? <AddPagamento
                    openModal = {ListPagamentoModalOpen}
                    closeModal = {toggleAddPagamento}
                    addPagamento = {addPagamento}
                /> : null}

                {isDeleteModalOpen ? <DeletePagamento
                    openModal = {isDeleteModalOpen}
                    closeModal = {deletModalPagamento}
                    selectedPagamento = {selectedPagamento}
                    deletePagamento = {deletePagamento}
                /> : null}

                {isEditModalOpen ? <EditPagamento
                    openModal = {isEditModalOpen}
                    closeModal = {editModalPagamento}
                    selectedPagamento = {selectedPagamento}
                    updatePagamento = {updatePagamento}
                /> : null}

                {pagamentos.map(data => (

                    <Card>
                    <Card.Content style = {{marginTop:30}}>
                        <Title><Avatar.Image size={24} style = {styles.icons} source={require('../../assets/smartphone.jpg')} /></Title>
                        <Paragraph>{data.modelo}</Paragraph>

                        <TouchableOpacity
                        style = {styles.button}
                        onPress = {() => {
                            deletModalPagamento();
                            setSelectedPagamento(data);
                        }}
                    >
                        <Text style = {{color: 'red'}}>Excluir</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style = {styles.button}
                        onPress = {() => {
                            editModalPagamento();
                            setSelectedPagamento(data);
                        }}
                    >
                        <Text style = {{color: 'blue'}}>Editar</Text>
                    </TouchableOpacity>
                    </Card.Content>
                    </Card>
            
                    
                ))}

            </View>
       
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        paddingHorizontal: 30,
    },
    Appbar:{
        alignItems:'center',
        backgroundColor: '#ff3547',
        height: 20,
        paddingBottom: 30
    },
    nameList: {
        fontWeight: "bold",
        fontSize: 16,
    },
    listItem: {
        fontSize: 16,
    },
    pagamentosListContainer: {
        marginBottom: 25,
        elevation: 4,
        backgroundColor: "white",
        padding: 10,
        borderRadius: 6,
        borderTopWidth: 1,
        borderWidth: 5,
        borderColor: "rgba(0,0,0,1)",
    },
    textTitle: {
        fontSize: 20,
        color: '#fff',
        marginLeft: 40,
        marginTop: -25
    },
    buttonHeader:{
        backgroundColor: '#fff',
        color: '#ff3547',
        
        marginLeft: 10
    },
    icons:{
        width: 50,
    },
    button: {
        borderColor: '#ff3547',
        borderWidth: 1,
    }
});

export default ListPagamento