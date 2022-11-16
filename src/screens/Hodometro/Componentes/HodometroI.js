import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, Text } from 'react-native';
import CustomInput from '../../../components/CustomInputText';
import CustomButton from '../../../components/CustomBtn';
import { Snackbar } from 'react-native-paper';

const HodometroI = ({ onPress }) => {

    const [value, setValue] = useState("")
    const [visible, setVisible] = useState(false);

    const [messageOfSnackbar, setMessageOfSnackBar] = useState(false);
    const onToggleSnackBar = (messageOfSnackbar) => {
        setVisible(!visible)
        setMessageOfSnackBar(messageOfSnackbar)
    }
    const onDismissSnackBar = () => setVisible(false);


    function isEmpty() {
        if (value != "") {
            onPress()
        } else {
            onToggleSnackBar("Preencha seu valor de hodometro")
        }
    }



    return <>
        <SafeAreaView style={styles.middle}>
            <View style={styles.insideMiddle}>
                <Text style={styles.txtItems}>Data: 22/05 - 05:00</Text>
                <Text style={styles.txtItems}>Último login: 21/05 - 18:00</Text>
                <Text style={styles.txtItems}>Carro: HNI-8569</Text>
                <Text style={styles.txtForm}>Hodometro Inicial:</Text>
                <CustomInput value={value} setValue={setValue} placeholder={"00000000"} type={"number-pad"} />             
                <CustomButton onPress={isEmpty} text={"Iniciar Jornada!"} />
            </View>

            <View style={styles.insideSnack}>
                <Snackbar
                    visible={visible}
                    onDismiss={onDismissSnackBar}
                    action={{
                        label: 'Ok'
                    }}>
                    {messageOfSnackbar}
                </Snackbar>
            </View>


        </SafeAreaView>
    </>;
}

const styles = StyleSheet.create({
    insideMiddle: {
        backgroundColor: "#CCC",
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