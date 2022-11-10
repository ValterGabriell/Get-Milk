import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, useWindowDimensions } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'
import CustomInput from '../components/CustomInputText';
import CustomButton from '../components/CustomBtn';

const LoginScreen = () => {

  const window = useWindowDimensions();
  const [cpf, setCpf] = useState()
  const [password, setPassword] = useState()
  function onButtonClicked() {

  }


  return <>
    <SafeAreaView style={{ backgroundColor: '#73c1ec', height: "100%" }}>

      <View style={styles.header}>
        <View style={styles.innerHeader}>
          <Text style={styles.txtWelcome}>Olá, seja bem vindo!</Text>
          <Text style={styles.txtSignIn}>Entre na sua conta!</Text>
        </View>

        <FontAwesome5 style={{ marginRight: 16, marginTop: 8 }} name="fire" size={27} color="#F06795" />
      </View>




      <View style={styles.middle}>
        <View style={styles.insideMiddle}>
          <Text style={styles.txtForm}>Digite seu CPF:</Text>
          <CustomInput value={cpf} setValue={setCpf} placeholder={"777.777.777-77"} />
          <Text style={styles.txtForm}>Digite sua senha:</Text>
          <CustomInput value={password} setValue={setPassword} placeholder={"******"}/>
          <CustomButton onPress={onButtonClicked} text={"Entrar"}/>

        </View>


      </View>




    </SafeAreaView>
  </>
}


const styles = StyleSheet.create({
  header: {
    backgroundColor: '#73c1ec',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: "15%"

  },
  innerHeader: {
    marginLeft: 16,
    marginTop: 8

  },
  txtWelcome: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 18
  },
  txtSignIn: {
    color: "#FFF"
  },
  insideMiddle: {
    backgroundColor: "#CCC",
    marginLeft: "8%",
    marginRight: "8%",
    marginTop: "16%",
    borderRadius: 8
  },
  middle: {
    backgroundColor: "#FFF",
    borderTopRightRadius: 32,
    borderTopLeftRadius: 32,
    height: "100%"
  },
  txtForm: {
    marginLeft: "4%",
    marginTop: "4%",
    marginBottom: "2%"
  }

});

export default LoginScreen;

