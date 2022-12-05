import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'
import HodometroI from './Componentes/HodometroI';
import HodometroF from './Componentes/HodometroF';
import { useNavigation } from '@react-navigation/native';
import { getData } from '../../services/Repository/DBMethods'
import { useEffect } from 'react';
import CustomButton from '../../components/CustomBtn';



const Hodometro = () => {
    //declarando variaveis
    const isStaring = true
    const navigation = useNavigation()
    const [value, setValue] = useState(false)
    //declarando funcoes
   

    useEffect(() => {
        getData("@hasCollect").then(result =>{
            setValue(result)
        })
    })


    function startWork() {
        navigation.navigate("Feed_Screen")
    }

    function finishWork() {
        navigation.navigate("Login_Screen")
    }

    return (
        <>
            {
                value ?

                    <SafeAreaView style={{ backgroundColor: '#73c1ec', height: "100%" }}>
                        <View style={styles.header}>
                            <View style={styles.innerHeader}>
                                <Text style={styles.txtHodometro}>Olá, motorista!</Text>
                                <Text style={styles.txtSignIn}>Bom trabalho!</Text>
                            </View>

                            <FontAwesome5 style={{ marginRight: 16, marginTop: 8 }} name="fire" size={27} color="#F06795" />
                        </View>
                        {/* trecho de código que verifica se o usuario está iniciando ou finalizando a jornada de trabalho */}
                        {isStaring ? <HodometroI onPress={() => startWork()} /> : <HodometroF onPress={() => { finishWork() }} />}
                    </SafeAreaView>
                    :
                    <SafeAreaView style={{ backgroundColor: '#c3c3c3', height: "100%" }}>
                        <View style={styles.header_two}>
                            <View style={styles.innerHeader}>
                                <Text style={styles.txtHodometro}>Olá, motorista!</Text>
                                <Text style={styles.txtSignIn_Two}>Não há trabalhos a serem feitos!</Text>
                            </View>
                            <FontAwesome5 style={{ marginRight: 16, marginTop: 8 }} name="fire" size={27} color="#F06795" />
                        </View>
                        <CustomButton onPress={()=>{
                            navigation.navigate("Login_Screen")
                        }} text={"Voltar"}/>
                    </SafeAreaView>

            }
        </>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#73c1ec',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: "20%",
        marginTop: "15%"

    },
    header_two: {
        backgroundColor: '#c3c3c3',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: "20%",
        marginTop: "15%"

    },
    innerHeader: {
        marginLeft: 16,
        marginTop: 8
    },
    txtHodometro: {
        color: "#FFF",
        fontWeight: "bold",
        fontSize: 18
    },
    txtSignIn: {
        color: "#FFF"
    },
    txtSignIn_Two: {
        color: "#FFF",
        fontSize: 24
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


export default Hodometro;