import { router } from "expo-router";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {colors} from '@/src/constants/colors'
import { SafeAreaView } from "react-native-safe-area-context";

export default function index() {
  return (
    <SafeAreaView style={{flex:1}}>
    <ScrollView style={authTheme.background}>
        <View style={authTheme.container}>
          <Image
          source={require('@/assets/images/icon-anotei.png')}
          style={{ width: 200, height: 200, alignSelf:'center', marginTop:10}}
          />
        </View>
        <View style={authTheme.splashContainer}>
          <Text style={{color:'white'}}>Carrossel</Text>
        </View>
        <View style={authTheme.buttonContainer}>
            <TouchableOpacity style={authTheme.button}>
            <Text 
              style={authTheme.textButton} 
              onPress={() => router.navigate('/(auth)/login')}
              >
                Entrar
            </Text>
            </TouchableOpacity>
            <TouchableOpacity style={authTheme.button}>
              <Text style={authTheme.textButton} onPress={() => router.navigate('/(auth)/register')}>Cadastre-se</Text>
            </TouchableOpacity>
        </View>
    </ScrollView>
    </SafeAreaView>
  );
}


const authTheme = StyleSheet.create({

  background:{
      backgroundColor:colors.background,
      flex:1
  },
  container:{
      alignSelf:'center',
      marginTop:40,
      flex:1
      
  },
  buttonContainer:{
      flexDirection:'row',
      justifyContent:'space-between',
      marginTop:60,
      flex:1
  },
  splashContainer:{
      alignItems:'center',
      paddingVertical:100,
      //backgroundColor:'green'
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
      marginTop:8

  },
  button:{
      marginLeft:35,
      marginRight:35,
      backgroundColor:colors.primary,
      flex:1,
      alignItems:'center',
      padding:10,
      borderRadius:10,
  },
  textButton:{
      textAlign:'center',
      padding:8,
  },
})
