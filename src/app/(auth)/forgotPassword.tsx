import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image, Alert} from "react-native";
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { router } from "expo-router";
import {colors} from '@/src/constants/colors'
import { SafeAreaView } from "react-native-safe-area-context";


export default function forgotPassword() {
  const Alerta = () => {
    Alert.alert(
      "Enviado!",                // Título
      "Um link de recuperação foi enviado ao seu e-mail"  // Mensagem
    );
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
            <Text style={theme.title}>Alterar Senha</Text>
            <Text style={theme.littleText}>Informe o e-mail de cadastro da sua conta, para {'\n'} que possarmos enviar o link de alteração</Text>
            <TextInput 
            style={theme.input} 
            placeholder="E-mail"
            ></TextInput>
            <TouchableOpacity style={theme.button} onPress={Alerta}><Text>Enviar e-mail</Text></TouchableOpacity>
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
    backgroundColor:colors.primary,
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
  
},
forgotPasswordText:{
  fontSize:12,
  textAlign:'right',
  color:'white',
  marginRight:35
},
littleText:{
  fontSize:12,
  textAlign:"center",
  color:'white',
}
})