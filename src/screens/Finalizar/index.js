import React, { useState } from 'react';
import { View, StyleSheet, Switch, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native';
import { Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'
import CustomInput from '../../components/CustomInputText';
import CustomButton from '../../components/CustomBtn';
import { useNavigation } from '@react-navigation/native';
import Coleta from '../../services/Database/Coleta'
import { checkConnected } from '../../services/Handle/NetworkConnection';


const Finalizar = (props) => {

    const navigation = useNavigation()
    const [isEnabled, setIsEnabled] = useState(false);
    const [isPositive, setIsPostive] = useState("");
    const [isClicked, setIsClicked] = useState(false);

    const numAmostra = props.route.params.numAmostra
    const volumeLitro = props.route.params.volumeLitro
    const tempTanque = props.route.params.tempTanque
    const compartimentoCaminhao = props.route.params.compartimentoCaminhao
    const testeAlisoral = props.route.params.testeAlisoral
    const finalizada = props.route.params.finalizada
    const id = props.route.params.id

    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState)
        if (isEnabled) {
            setIsPostive("Negativo")
        } else {
            setIsPostive("Positivo")
        }
    }

    const clickButton = () => {
        setIsClicked(true)
    }

    function cancel() {
        navigation.navigate("Feed_Screen")
    }


    function atualizarColeta(id, amostra, volume, temperatura, compartimentoCaminhao, testeAlisoral) {
        clickButton()
        const coleta = { numAmostra:amostra,volumeLitro:volume,tempTanque: temperatura, compartimentoCaminhao:compartimentoCaminhao, testeAlisoral:testeAlisoral, finalizada:true }
        Coleta.update(id, coleta).then((res)=>{
            console.log("Objeto atualizado" + res);
            navigation.navigate("Feed_Screen")
        }).catch((err) => {
            console.log(err);
        })
    }


    return <>

        {finalizada 
            ?

            <SafeAreaView style={styles.root}>

            <View style={styles.container}>

                <View style={styles.insideContainer}>

                    <View style={styles.insideOfInsideContainer}>
                        <Text style={styles.txtColeta}>Coleta: </Text>
                        <Text style={styles.txtNumeroColeta}>{finalizada}</Text>
                        <FontAwesome5 style={{ alignSelf: "center", marginLeft: "45%" }} name="times" size={32} color="#252525" onPress={() => cancel()} />
                    </View>
                    <Text style={[styles.txtFazenda, styles.txtDono]}>{numAmostra}</Text>
                    <Text style={styles.txtFazenda}>Dono: João</Text>

                    <CustomInput placeholder={"Número da Amostra Ex. ABC123"} />
                    <CustomInput placeholder={"Volume Litro Ex. 87,5"} type={"number-pad"} />
                    <CustomInput placeholder={"Temperatura do Tanque Ex. 22,5"} type={"number-pad"} />
                    <CustomInput placeholder={"Compartimento Caminhao Ex. AB2"} />

                    <Text style={{ alignSelf: "center", fontWeight: "bold", color: "#252525" }}>Teste Alisoral: {isPositive}</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isEnabled ? "#73c1ec" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                        style={{ alignSelf: "center" }}
                    />

                    <View style={{ flexDirection: "row", alignSelf: "center" }}>
                            <CustomButton onPress={() => {
                                navigation.navigate("Feed_Screen")
                            }} text={"Coleta finalizada"} />
                        
                    </View>
                </View>
            </View>

        </SafeAreaView>

            :

            <SafeAreaView style={styles.root}>

            <View style={styles.container}>

                <View style={styles.insideContainer}>

                    <View style={styles.insideOfInsideContainer}>
                        <Text style={styles.txtColeta}>Coleta: </Text>
                        <Text style={styles.txtNumeroColeta}>{finalizada}</Text>
                        <FontAwesome5 style={{ alignSelf: "center", marginLeft: "45%" }} name="times" size={32} color="#252525" onPress={() => cancel()} />
                    </View>
                    <Text style={[styles.txtFazenda, styles.txtDono]}>{numAmostra}</Text>
                    <Text style={styles.txtFazenda}>Dono: João</Text>

                    <CustomInput placeholder={"Número da Amostra Ex. ABC123"} />
                    <CustomInput placeholder={"Volume Litro Ex. 87,5"} type={"number-pad"} />
                    <CustomInput placeholder={"Temperatura do Tanque Ex. 22,5"} type={"number-pad"} />
                    <CustomInput placeholder={"Compartimento Caminhao Ex. AB2"} />

                    <Text style={{ alignSelf: "center", fontWeight: "bold", color: "#252525" }}>Teste Alisoral: {isPositive}</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isEnabled ? "#73c1ec" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                        style={{ alignSelf: "center" }}
                    />

                    <View style={{ flexDirection: "row", alignSelf: "center" }}>
                    <CustomButton onPress={() => {
                                atualizarColeta(id, "ABC12322", 835.4, 645.5, "abc123", 0)
                            }} text={"Finalizar"} />
                    </View>
                </View>
            </View>

        </SafeAreaView>

        
        }

    

    </>;
}

const styles = StyleSheet.create({
    root: {
        backgroundColor: "#FFF",
        height: "100%"
    },
    container: {
        backgroundColor: "#dcdcdc",
        marginTop: "15%",
        height: "85%",
        marginHorizontal: "5%",
        borderRadius: 16
    },
    insideContainer: {
        padding: 16,
        height: "60%"
    },
    insideOfInsideContainer: {
        flexDirection: 'row'
    },
    txtColeta: {
        color: "#252525",
        marginLeft: "4%",
        fontWeight: "bold",
        fontSize: 22
    },
    txtFazenda: {
        marginTop: "2%",
        marginBottom: "2%",
        marginLeft: "4%",
        color: "#252525",
        fontSize: 16
    },
    txtNumeroColeta: {
        marginTop: "2%",
        color: "#252525",
        fontSize: 16
    },
    txtDono: {
        fontWeight: "bold",
        color: "#252525"
    }
});

export default Finalizar;