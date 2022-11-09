import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const CustomInput = ({value, setValue, placeholder, secureTextEntry, type,maxLength}) => {
    return (
        <TextInput
            value={value}
            onChangeText={setValue}
            placeholder={placeholder} 
            style={estilos.contanier}
            secureTextEntry={secureTextEntry}
            keyboardType={type}
            maxLength={maxLength}
            
        />

    );
};

const estilos = StyleSheet.create({
    contanier:{
        backgroundColor: "white",
        width: "90%",
        marginLeft:"4%",
        marginBottom:"2%",
        height: 55,
        padding: 16,
        fontWeight: '500',
    },

});

export default CustomInput;