
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'
import CustomInput from '../../components/CustomInputText';
import CustomButton from '../../components/CustomBtn';
import { useNavigation } from "@react-navigation/native";
import { users, coletas } from '../../dto/users.json'
import { Snackbar } from 'react-native-paper';
import { checkConnected } from '../../services/Handle/NetworkConnection';
import Coleta from '../../services/Database/Coleta'



const LoginScreen = () => {

  const isConnected = checkConnected()
  const [cpf, setCpf] = useState("987654321")
  const [password, setPassword] = useState("321")
  const [hasConnectionWithNetwork, setConnection] = useState(false)
  const navigation = useNavigation()
  const [visible, setVisible] = useState(false);
  const [messageOfSnackbar, setMessageOfSnackBar] = useState(false);
  const onToggleSnackBar = (messageOfSnackbar) => {
    setVisible(!visible)
    setMessageOfSnackBar(messageOfSnackbar)
  }
  const onDismissSnackBar = () => setVisible(false);

  useEffect(() => {
    setConnection(isConnected)
  }, [])

  function getDataAndChangeScreen(){
    coletas.forEach((coleta)=>{
      Coleta.create(coleta).then(()=>{
        console.log("Coleta" + coleta.finalizada +  " criada");
        navigation.navigate("Hodometro_Screen")
      }).catch((ree)=>{
          onToggleSnackBar("Erro " + ree.message )
      })
    })
    
    
   
  }



  function onButtonClicked() {
    if (hasConnectionWithNetwork) {
      users.forEach((user) => {
        if (user.cpf == cpf) {
          if (user.senha == password) {
            getDataAndChangeScreen()
          } else {
            onToggleSnackBar("Senha incorreta")
          }
        } else {
          onToggleSnackBar("CPF incorreto")
        }
      })
    } else {
    
    }

  }







  return <>

    {
      hasConnectionWithNetwork ? <SafeAreaView SafeAreaView style={{ backgroundColor: '#73c1ec', height: "100%" }}>

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
            <CustomInput value={cpf} setValue={setCpf} placeholder={"777.777.777-77"} type={"number-pad"} maxLength={11} />
            <Text style={styles.txtForm}>Digite sua senha:</Text>
            <CustomInput value={password} setValue={setPassword} placeholder={"******"} maxLength={11} secureTextEntry={true} />
            <CustomButton onPress={onButtonClicked} text={"Entrar"} />
            <Text style={{ marginLeft: "4%" }} onPress={() => {
              /** trocar a rota de navegacao para trocar de tela */
              navigation.navigate("Hodometro_Screen")
            }}>Esqueceu a senha?</Text>

          </View>


        </View>

        <Snackbar
          visible={visible}
          onDismiss={onDismissSnackBar}
          action={{
            label: 'Ok'
          }}>
          {messageOfSnackbar}
        </Snackbar>

        


      </SafeAreaView> :
        <SafeAreaView SafeAreaView style={{ backgroundColor: '#73c1ec', height: "100%" }}>

          <View style={styles.header}>
            <View style={styles.innerHeader}>
              <Text style={styles.txtWelcome}>Olá, seja bem vindo!</Text>
              <Text style={styles.txtSignIn}>Por favor, conect-se a internet antes!</Text>
            </View>

            <FontAwesome5 style={{ marginRight: 16, marginTop: 8 }} name="fire" size={27} color="#F06795" />
          </View>


          <View style={styles.middle}>
            <View style={styles.insideMiddle}>
              <Text style={styles.txtForm}>Sem conexão com internet!</Text>
              <CustomButton onPress={onButtonClicked} text={"Tentar conectar"} />
            </View>
          </View>

          <Snackbar
            visible={visible}
            onDismiss={onDismissSnackBar}
            action={{
              label: 'Ok'
            }}>
            {messageOfSnackbar}
          </Snackbar>




        </SafeAreaView>

    }

  </>
}



const styles = StyleSheet.create({
  header: {
    backgroundColor: '#73c1ec',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: "15%",
    marginTop: "16%"

  },
  innerHeader: {
    marginLeft: "4%",
    marginTop: "1%",
  },
  txtWelcome: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 18,
  },
  txtSignIn: {
    color: "#FFF",
  },
  insideMiddle: {
    backgroundColor: "#CCC",
    marginLeft: "8%",
    marginRight: "8%",
    marginTop: "16%",
    borderRadius: 8,
  },
  middle: {
    backgroundColor: "#FFF",
    borderTopRightRadius: 32,
    borderTopLeftRadius: 32,
    height: "100%",
  },
  txtForm: {
    marginLeft: "4%",
    marginTop: "4%",
    marginBottom: "2%",
  },
});

export default LoginScreen;
