import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image, Alert} from "react-native";
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { router } from "expo-router";
import {colors} from '@/src/constants/colors'
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {supabase} from '../../lib/supabase'








export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);



  async function handleSingUp(){
    setLoading(true);

    const {data, error} = await supabase.auth.signUp({
      email: email,
      password: password
    })

    if(error){
      Alert.alert('Error', error.message)
      setLoading(false);
      return;

    }
    setLoading(false);
    Alert.alert('Cadastrado com sucesso!')
    router.replace('/(auth)/login')

  }


  return (
    <SafeAreaView style={{flex:1}}>
    <ScrollView style={theme.background}>
        <View style={theme.container}>
          <TouchableOpacity style={theme.backButton} onPress={router.back}>
            <Ionicons name="arrow-back-circle" size={52} color="#C2FFF5" />
          </TouchableOpacity>
            <Image
              source={require('@/assets/images/icon-anotei.png')}
              style={{ width: 200, height: 200, alignSelf:'center', marginTop:10}}
              
            />
            <Text style={theme.title}>Crie sua conta</Text>
            <TextInput 
              style={theme.input} 
              placeholder="Nome completo"
              value = {name}
              onChangeText={setName}
            ></TextInput>
            <TextInput 
              style={theme.input}
              placeholder="E-mail"
              value = {email}
              onChangeText={setEmail}
            ></TextInput>
            <TextInput 
              style={theme.input}
              placeholder="Senha"
              secureTextEntry
              value = {password}
              onChangeText={setPassword}
            ></TextInput>
            <TouchableOpacity style={theme.button} onPress={handleSingUp}><Text>Criar Conta</Text></TouchableOpacity>
        </View>
    </ScrollView>
    </SafeAreaView>
  );
}


const theme = StyleSheet.create({
  container:{
    marginTop:40,
    flex:1
  },
  button:{
    marginLeft:35,
    marginRight:35,
    backgroundColor: colors.primary,
    flex:1,
    alignItems:'center',
    padding:20,
    borderRadius:10,
    marginTop:14
  },
  input:{
    alignItems:'center',
    backgroundColor:'white',
    padding:20,
    borderRadius:10,
    flex:1,
    marginLeft:35,
    marginRight:35,
    marginBottom:8,
    marginTop:12
  },
  background:{
    backgroundColor:colors.background,
    flex:1
  },
  textButton:{
    textAlign:'center',
    padding:8,
    color:'white'
},
backButton:{
  marginLeft:30,
},
title:{
  fontSize:25,
  color:'white',
  textAlign:'center',
  marginBottom:18
  
}
})