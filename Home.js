import React from 'react';
import { StyleSheet, View, Button, Text, Image, TouchableOpacity } from 'react-native';


const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.bienvenuetxt}>Bienvenue !</Text>
            <Image
                source={require("../assets/Logo.png")}
                style={styles.logo}
            ></Image>
            <Button title='Inscrivez-vous' onPress={()=> navigation.navigate('SignUp')}></Button>
            <Button title='Connexion' onPress={()=> navigation.navigate('Connexion')}></Button>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    bienvenuetxt: {
      color: "rgba(0,0,0,1)",
      fontSize: 35,
      textAlign: "center",
      marginTop: 1
    },
    logo: {
        aspectRatio: 0.5,
        flex: 1,
        resizeMode: 'contain',
        marginTop: 1,
        maxHeight: 350
    }
  });

export default Home;