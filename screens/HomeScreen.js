import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useAuth } from '../context/AuthContext';

export default function HomeScreen() {
  const { logout } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenidos ...!</Text>
      <TouchableOpacity style={styles.button} onPress={logout}><Text style={styles.buttonText}>Cerrar sesión</Text></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{flex:1,justifyContent:'center',alignItems:'center',padding:20},
  title:{fontSize:26,fontWeight:'bold',marginBottom:40},
  button:{backgroundColor:'#FF3B30',padding:15,borderRadius:8},
  buttonText:{color:'#fff',fontWeight:'bold'}
});
