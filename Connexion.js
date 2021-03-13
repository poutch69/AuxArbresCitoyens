import React from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';



const Connexion = ({ navigation }) => {
    return (
        <View>
            <Text style={styles.connexiontxt}>Connexion</Text>
            <TextInput placeholder='Pseudo' style={styles.pseudoinput}></TextInput>
            <TextInput placeholder='Mot de passe' style={styles.mdpinput}></TextInput>  
            <Button title='Connexion' style={styles.bouttonconnexion} onPress={()=> navigation.navigate('TabBasedNavigation')}></Button>                                                
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    connexiontxt: {
        color: "rgba(0,0,0,1)",
        fontSize: 35,
        textAlign: "center",
        marginTop: 50   
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
      bouttonconnexion: {
        marginTop: 40,
        alignSelf:'center'
      }     
  });

export default Connexion;