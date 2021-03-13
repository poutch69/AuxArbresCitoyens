import React from 'react';
import { StyleSheet, View, Button, Text, Dimensions } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import MapView from 'react-native-maps';



const MapPage = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <MapView style={styles.map} initialRegion={{ latitude: 48.880145, longitude: 2.271636, latitudeDelta: 0.0922, longitudeDelta: 0.0421}} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
  });

export default MapPage;