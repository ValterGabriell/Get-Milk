import React, { useState } from 'react';
import { View, StyleSheet, Switch, ActivityIndicator, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native';
import { Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'
import CustomInput from '../../components/CustomInputText';
import CustomButton from '../../components/CustomBtn';
import { useNavigation } from '@react-navigation/native';



const Finalizar = () => {

    const navigation = useNavigation()
    const [isEnabled, setIsEnabled] = useState(false);
    const [isPositive, setIsPostive] = useState("");
    const [isClicked, setIsClicked] = useState(false);

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

    function cancel(){
        navigation.navigate("Feed_Screen")
    }

    function saveData() {
        clickButton()
        setTimeout(() => {
            setIsClicked(false)
        }, 3000)
    }


    return <>

        <SafeAreaView style={styles.root}>
            
            <View style={styles.container}>

                <View style={styles.insideContainer}>

                    <View style={styles.insideOfInsideContainer}>
                        <Text style={styles.txtColeta}>Coleta: </Text>
                        <Text style={styles.txtNumeroColeta}>3d85r4</Text>
                        <FontAwesome5 style={{ alignSelf: "center", marginLeft: "45%" }} name="times" size={32} color="#252525" onPress={()=>cancel()}/>
                    </View>
                    <Text style={styles.txtFazenda}>Fazenda Leite Puro</Text>

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
                        {
                            isClicked && <ActivityIndicator size="large" color="#73c1ec" />
                        }
                        {
                            !isClicked && <CustomButton onPress={saveData} text={"Finalizar"} />
                        }
                    </View>
                </View>
            </View>

        </SafeAreaView>


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
        height: "75%"
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
        marginBottom: "16%",
        marginLeft: "4%",
        color: "#252525",
        fontSize: 16
    },
    txtNumeroColeta: {
        marginTop: "2%",
        color: "#252525",
        fontSize: 16
    }
});

export default Finalizar;