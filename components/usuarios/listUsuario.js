import React from 'react';
import { useState } from 'react';
import { Avatar, IconButton, Appbar, Button, Card, Title, Paragraph} from 'react-native-paper';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import AddUsuario from './addUsuario';
import DeleteUsuario from './deleteUsuario';
import EditUsuario from './editUsuario';

const ListUsuario = () => {

    const [ListUsuarioModalOpen, setUsuarioModalOpen] = useState(false)
    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false)
    const [isEditModalOpen, setEditModalOpen] = useState(false)
    const [Usuarios, setUsuarios] = useState([])
    const [selectedUsuario, setSelectedUsuario] = useState(false)

    const toggleAddUsuario = () => {
        setUsuarioModalOpen(!ListUsuarioModalOpen)
    }
    
    const addUsuario = (data) => {
        setUsuarios([data, ...Usuarios])
    }

    const deleteUsuario = nome => {
        setUsuarios(Usuarios.filter(cli => cli.nome !== nome ))
    }

    const updateUsuario = (data) => {
        setUsuarios(Usuarios.map(cli => cli.nome == data.nome ? data : cli ))
    }

    const deletModalUsuario = () => {
        setDeleteModalOpen(!isDeleteModalOpen)
    }

    const editModalUsuario = () => {
        setEditModalOpen(!isEditModalOpen)
    }
    
    return (
        <View>
            <Appbar.Header style = {styles.Appbar}>
                <TouchableOpacity onPress = {toggleAddUsuario} style = {styles.buttonModal}>
                <Avatar.Icon style = {styles.buttonHeader} size={24} icon="plus" />
                <Text style = {styles.textTitle}> Adicionar Usuário</Text>
                </TouchableOpacity>
            </Appbar.Header>

            <View>
 
                {ListUsuarioModalOpen ? <AddUsuario
                    openModal = {ListUsuarioModalOpen}
                    closeModal = {toggleAddUsuario}
                    addUsuario = {addUsuario}
                /> : null}

                {isDeleteModalOpen ? <DeleteUsuario
                    openModal = {isDeleteModalOpen}
                    closeModal = {deletModalUsuario}
                    selectedUsuario = {selectedUsuario}
                    deleteUsuario = {deleteUsuario}
                /> : null}

                {isEditModalOpen ? <EditUsuario
                    openModal = {isEditModalOpen}
                    closeModal = {editModalUsuario}
                    selectedUsuario = {selectedUsuario}
                    updateUsuario = {updateUsuario}
                /> : null}

                {Usuarios.map(data => (

                    <Card>
                    <Card.Content style = {{marginTop:30}}>
                        <Title><Avatar.Image size={24} style = {styles.icons} source={require('../../assets/smartphone.jpg')} /></Title>
                        <Paragraph>{data.modelo}</Paragraph>

                        <TouchableOpacity
                        style = {styles.button}
                        onPress = {() => {
                            deletModalUsuario();
                            setSelectedUsuario(data);
                        }}
                    >
                        <Text style = {{color: 'red'}}>Excluir</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style = {styles.button}
                        onPress = {() => {
                            editModalUsuario();
                            setSelectedUsuario(data);
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
    UsuariosListContainer: {
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
    }
});

export default ListUsuario