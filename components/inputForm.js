import React from 'react';
import { StyleSheet, Text, TextInput, View} from 'react-native';

const InputForm = (props) => {
    return (
        <View style={styles.container}>
          <Text style = {styles.titleInput}>{props.nomeDoCampo}</Text>
          <TextInput
            keyboardType={props.numeric ? 'numeric' : 'default'}
            style = {styles.textInput}
            onChangeText = {props.evento}
            underlineColorAndroid = {"transparent"}
          ></TextInput>
        </View>
    );
}

const styles = StyleSheet.create({

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
    },
    titleInput: {
      fontWeight:'300',
      color: '#757575',
      fontSize: 20,
      marginBottom:10
    },
});

export default InputForm