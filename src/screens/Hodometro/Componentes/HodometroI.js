import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, Text,ActivityIndicator } from 'react-native';
import CustomButton from '../../../components/CustomBtn';
import { Snackbar } from 'react-native-paper';
import { getServiceOfDay } from '../../../services/Axios/ApiAxios'


const HodometroI = ({ onPress }) => {

  


    function click() {
          onPress()
    }



    return <>
        <SafeAreaView style={styles.middle}>
            <View style={styles.insideMiddle}>
                         
                         
            <Text style={styles.txtSignIn}>Caso voce nao possuoa coletas agendadas, retornará para a tela inicial!</Text>
                <CustomButton onPress={click} text={"Iniciar Jornada!"} />

            </View>


        </SafeAreaView>
    </>
}

const styles = StyleSheet.create({
    insideMiddle: {
        marginLeft: "8%",
        marginRight: "8%",
        marginTop: "16%",
        borderRadius: 8
    },
    insideSnack: {
        backgroundColor: "#CCC",
        marginTop: "95%"
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
    },
    txtItems:{
        marginLeft: "4%",
        marginTop: "4%",
        marginBottom: "2%",
        fontWeight:"bold",
        color:"#252525"
    }

});

export default HodometroI;