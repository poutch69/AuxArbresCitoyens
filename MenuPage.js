import React from 'react';
import { StyleSheet, View, Button, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const MenuPage = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Ionicons style={styles.pdpicon} name={'person-outline'} size={80} color={'black'}></Ionicons>
            <Text style={styles.nomtxt}>Paul Rochelle</Text> 
            <Ionicons style={styles.profilicon} name={'person-circle-outline'} size={30} color={'black'}></Ionicons>
            <Button title={'Profil'} style={styles.profilbutton} onPress={() => {Alert.alert('You tapped the Decrypt button!');}}></Button>      
            <Ionicons style={styles.shopicon} name={'card-outline'} size={30} color={'black'}></Ionicons>   
            <Button title={'Magasin'} style={styles.shopbutton} onPress={() => {Alert.alert('You tapped the Decrypt button!');}}></Button>  
            <Ionicons style={styles.chaticon} name={'chatbox-outline'} size={30} color={'black'}></Ionicons>           
            <Button title={'Messagerie'} style={styles.chatbutton} onPress={() => {Alert.alert('You tapped the Decrypt button!');}}></Button>                                              
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center'
    },
    pdpicon: {
      marginTop: 40
    },
    nomtxt: {

    },
    profilbutton: {

    },
    profilicon: {
        marginTop: 35
    },
    shopbutton: {

    },
    shopicon: {
        marginTop: 35
    },
    chatbutton: {

    },
    chaticon: {
        marginTop: 35
    }
  });


export default MenuPage;