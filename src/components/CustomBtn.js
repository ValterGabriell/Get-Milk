import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const CustomButton = ({onPress, text, type}) => {
    return (
        <TouchableOpacity onPress={(onPress)} style={styles.contanier} type={type}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    contanier:{
        backgroundColor: "#73c1ec",
        width: 150,
        padding: 15,
        marginVertical: 10,
        alignSelf: "center",
        alignItems:'center',
        elevation: 4,
    },
    text:{
        fontWeight: "bold",
        color: '#FFF',
    }
});

export default CustomButton;