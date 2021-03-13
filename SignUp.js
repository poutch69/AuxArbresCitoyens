import React from 'react';
import { StyleSheet, View, Button, Text, Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


const SignUp = ({ navigation }) => {
    return (
        <View>
            <Text style={styles.inscrivezvoustxt}>Inscrivez-vous</Text>
            <TextInput placeholder='Pseudo' style={styles.pseudoinput}></TextInput>
            <TextInput placeholder='Nom' style={styles.nominput}></TextInput>       
            <TextInput placeholder='Prénom' style={styles.prenominput}></TextInput> 
            <TextInput placeholder='Date de naissance' style={styles.datenaissanceinput}></TextInput>      
            <TextInput placeholder='E-mail' style={styles.emailinput}></TextInput>  
            <TextInput placeholder='Code Postal' style={styles.codepostalinput}></TextInput>  
            <TextInput placeholder='Mot de passe' style={styles.mdpinput}></TextInput>
            <Button title='Inscription' style={styles.bouttoninscription} onPress={() => {Alert.alert('Votre inscrption a bien été pris en compte');}}></Button>                           
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    inscrivezvoustxt: {
      color: "rgba(0,0,0,1)",
      fontSize: 35,
      textAlign: "center",
      marginTop: 40   
    },
    pseudoinput: {
      marginTop: 40,         
      borderBottomWidth: 1,
      borderColor: "#D9D5DC",
      fontSize: 16,
      alignSelf: "center",
      lineHeight: 20,
      paddingTop: 8,
      paddingBottom: 8,
      width: 375,
      textAlign: "center"
    },
    nominput: {
      marginTop: 20,         
      borderBottomWidth: 1,
      borderColor: "#D9D5DC",
      fontSize: 16,
      alignSelf: "center",
      lineHeight: 20,
      paddingTop: 8,
      paddingBottom: 8,
      width: 375,
      textAlign: "center"
    },
    prenominput: {
      marginTop: 20,         
      borderBottomWidth: 1,
      borderColor: "#D9D5DC",
      fontSize: 16,
      alignSelf: "center",
      lineHeight: 20,
      paddingTop: 8,
      paddingBottom: 8,
      width: 375,
      textAlign: "center"
    },
    datenaissanceinput: {
      marginTop: 20,         
      borderBottomWidth: 1,
      borderColor: "#D9D5DC",
      fontSize: 16,
      alignSelf: "center",
      lineHeight: 20,
      paddingTop: 8,
      paddingBottom: 8,
      width: 375,
      textAlign: "center"
    },
    emailinput: {
      marginTop: 20,         
      borderBottomWidth: 1,
      borderColor: "#D9D5DC",
      fontSize: 16,
      alignSelf: "center",
      lineHeight: 20,
      paddingTop: 8,
      paddingBottom: 8,
      width: 375,
      textAlign: "center"
    },
    codepostalinput: {
      marginTop: 20,         
      borderBottomWidth: 1,
      borderColor: "#D9D5DC",
      fontSize: 16,
      alignSelf: "center",
      lineHeight: 20,
      paddingTop: 8,
      paddingBottom: 8,
      width: 375,
      textAlign: "center"
    },
    mdpinput: {
      marginTop: 20,         
      borderBottomWidth: 1,
      borderColor: "#D9D5DC",
      fontSize: 16,
      alignSelf: "center",
      lineHeight: 20,
      paddingTop: 8,
      paddingBottom: 8,
      width: 375,
      textAlign: "center"
    },
    bouttoninscription: {
      marginTop: 40,
      alignSelf:'center'
    }
  });

export default SignUp;