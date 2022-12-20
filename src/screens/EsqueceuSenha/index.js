
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ActivityIndicator } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'
import CustomInput from '../../components/CustomInputText';
import CustomButton from '../../components/CustomBtn';
import { Snackbar } from 'react-native-paper';

const EsqueceuSenha = () => {
    const [cpf, setCpf] = useState("")
    return <>
        <SafeAreaView SafeAreaView style={{ backgroundColor: '#73c1ec', height: "100%" }}>

            <View style={styles.header}>
                <View style={styles.innerHeader}>
                    <Text style={styles.txtWelcome}>Recupere sua senha</Text>
                </View>

                <FontAwesome5 style={{ marginRight: 16, marginTop: 8 }} name="fire" size={27} color="#F06795" />
            </View>

            <View style={styles.middle}>
                <View style={styles.insideMiddle}>
                    <Text style={styles.txtForm}>Digite seu CPF:</Text>
                    <CustomInput value={cpf} setValue={setCpf} placeholder={"777.777.777-77"} type={"number-pad"} maxLength={11} />
                    <CustomButton onPress={() => {
                        //precisa implementar a chamada de recuperar a senha    
                    }
                    } text={"Recuperar"} />
                    <ActivityIndicator size="small" color="#0000ff" animating={showIndicator} />
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

export default EsqueceuSenha;