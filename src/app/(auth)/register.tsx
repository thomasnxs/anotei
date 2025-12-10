import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image} from "react-native";
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { router } from "expo-router";
import {colors} from '@/src/app/constants/colors'


export default function () {
  return (
    <ScrollView style={theme.background}>
        <View style={theme.container}>
          <TouchableOpacity style={theme.backButton} onPress={router.back}>
            <Ionicons name="arrow-back-circle" size={52} color="#C2FFF5" />
          </TouchableOpacity>
            <Image
              source={require('@/assets/images/icon-anotei.png')}
              style={{ width: 200, height: 200, alignSelf:'center', marginTop:40}}
              
            />
            <Text style={theme.title}>Crie sua conta</Text>
            <TextInput 
              style={theme.input} 
              placeholder="Email"
            ></TextInput>
            <TextInput 
              style={theme.input}
              placeholder="Senha"
              secureTextEntry
            ></TextInput>
            <TextInput 
              style={theme.input}
              placeholder="Confirmar senha"
              secureTextEntry
            ></TextInput>
            <TouchableOpacity style={theme.button}><Text>Criar Conta</Text></TouchableOpacity>
        </View>
    </ScrollView>
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
    borderBlockColor:'grey',
    alignItems:'center',
    backgroundColor:'white',
    padding:20,
    borderRadius:10,
    flex:1,
    marginLeft:35,
    marginRight:35,
    borderWidth:2,
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
  marginTop:30
},
title:{
  fontSize:25,
  color:'white',
  textAlign:'center',
  marginBottom:18
  
}
})