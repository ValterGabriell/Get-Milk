import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Coleta from '../../../services/Database/Coleta'
import CustomButton from "../../../components/CustomBtn";




const Item = ({ idColeta, numAmostra, volumeLitro, tempTanque, compartimentoCaminhao, testeAlisoral, finalizada, navigation }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{`Fazenda com id: ${idColeta}`}</Text>
    {
      finalizada ? <TouchableOpacity style={styles.containerButtonFinished}>
        <Text style={styles.button}>Finalizada</Text>
      </TouchableOpacity>
        :

        <TouchableOpacity style={styles.containerButton} onPress={() => {
          navigation.navigate("Finalizar_Screen", {
            idColeta: idColeta,
            numAmostra: numAmostra,
            volumeLitro: volumeLitro,
            tempTanque: tempTanque,
            compartimentoCaminhao: compartimentoCaminhao,
            testeAlisoral: testeAlisoral,
            finalizada: finalizada
          })
        }}>
          <Text style={styles.button}>Coletar</Text>
        </TouchableOpacity>
    }
  </View>
);

const App = () => {

  const navigation = useNavigation()
  const renderItem = ({ item }) => <Item idColeta={item.idColeta} numAmostra={item.numAmostra} volumeLitro={item.volumeLitro} tempTanque={item.tempTanque} compartimentoCaminhao={item.compartimentoCaminhao} testeAlisoral={item.testeAlisoral} finalizada={item.finalizada} navigation={navigation} />;
  const [listData, setListData] = useState([])
  const [finishedDay, setFinishedDay] = useState(false)
  const [showIndicator, setShowIndicator] = useState(false);

  useEffect(() => {
    navigation.addListener('focus', () => {
      var listAux = []
      Coleta.all().then((list) => {
        setListData(list)
        list.forEach((el) => {
          if (el.finalizada == true) {
            listAux.push(el)
          }
        })
        if (listAux.length == list.length) {
          setFinishedDay(true)
        }
      })
    });
  })



  return (
    <>
      {
        finishedDay ?
          <SafeAreaView style={styles.container}>
            <Text style={[styles.title, { alignSelf: "center" }]}>Parabéns por mais um dia concluído!</Text>
            <CustomButton text={"Encerrar"} onPress={() => {
                  setShowIndicator(true)
              //removendo todas as coletdas do banco
              Coleta.all().then((list) => {
                  list.forEach((el) => {
                    setTimeout(() => {
                      console.log("Enviando coleta: " + el.idColeta);
                      //tem que primeiro enviar, e se der certo, remover
                      /**
                       * function sendToAPI().then(Coleta.remove(id))...
                       */
                      Coleta.remove(el.idColeta).then((res) => {
                       navigation.navigate("Login_Screen")
                      }).catch((err) => {
                        console.log("err" + err.message);
                      })
                    }, 2000)
                  })                
              })
            }} />
             <ActivityIndicator size="small" color="#0000ff" animating={showIndicator} />


          </SafeAreaView> :
          <SafeAreaView style={styles.container}>
            <FlatList
              data={listData}
              renderItem={renderItem}
              keyExtractor={(item) => item.idColeta}
            />
          </SafeAreaView>
      }

    </>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#F1F1F1",
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    borderRadius: 6,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 18,
  },
  containerButton: {
    height: 40,
    width: "20%",
    backgroundColor: "#2C7BBF",
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  containerButtonFinished: {
    height: 40,
    width: "40%",
    backgroundColor: "#FF0000",
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    color: "white",
    fontSize: 18,
  },
});

export default App;
