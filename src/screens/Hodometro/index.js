import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, Text, TextInput } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'
import HodometroI from './Componentes/HodometroI';
import { useNavigation } from '@react-navigation/native';
import { getData } from '../../services/Repository/DBMethods'
import { useEffect } from 'react';
import { getServiceOfDay } from '../../services/Axios/ApiAxios'
import CustomInput from '../../components/CustomInputText'


const Hodometro = () => {
    //declarando variaveis
    const navigation = useNavigation()
    const [userId, setUserId] = useState("")
    const [value, setValue] = useState("")
    const isStaring = true





    //declarando funcoes
    useEffect(() => {
        //recupera id do usuario
        getData("@userId").then(result => {
            setUserId(result)
        })
    }, [])


    function startWork() {

        getServiceOfDay(value, userId, navigation)

    }

    return (
        <>
            <SafeAreaView style={{ backgroundColor: '#FFF', height: "100%" }}>
                <View style={styles.header}>
                    <View style={styles.innerHeader}>
                        <Text style={styles.txtHodometro}>{`Olá, seu id é:  ${userId}`}</Text>
                        <Text style={styles.txtSignIn}>Bom trabalho!</Text>
                       
                    </View>

                    <FontAwesome5 style={{ marginRight: 16, marginTop: 8 }} name="fire" size={27} color="#F06795" />
                </View>

                <View style={{ backgroundColor: "#73c1ec", padding: 8, marginBottom: "50%" }}>
                    <TextInput value={value}
                        onChangeText={setValue}
                        placeholder={"Odometro inicial"}
                        style={styles.contanier}
                        keyboardType={"number-pad"}
                         />
                    <HodometroI onPress={() => startWork()} />
                </View>


            </SafeAreaView>

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
    contanier:{
        backgroundColor: "white",
        width: "90%",
        marginLeft:"4%",
        marginBottom:"2%",
        height: "18%",
        padding: 4,
        fontWeight: '500',
    },
    insideSnack: {
        backgroundColor: "#CCC",
        marginTop: "95%"
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
        marginTop: 8,
        borderTopRightRadius: 32,
        borderTopLeftRadius: 32,
        borderRadius: 8

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

        height: "100%"
    },
    txtForm: {
        marginLeft: "4%",
        marginTop: "4%",
        marginBottom: "2%"
    }

});


export default Hodometro;