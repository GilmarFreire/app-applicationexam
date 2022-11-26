import React, { useState } from 'react'
import { View } from "react-native";
import { Button, Input, Text } from 'react-native-elements';
import Icon  from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/MainStyle';


//Title da Home
export default function Cadastro({navigation}){

const [email, setEmail] = useState(null)
const [password, setPassword] = useState(null)
const [errorEmail, setErrorEmail] = useState(null)

const validar = () => {
    let error = false
    
    setErrorEmail(null)

    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  

    if(!re.test(email)) {
        alert("Houve um erro ao cadastrar o usuario, tente novamente")
        setErrorEmail("Preencha seu e-mail corretamente")
        error = true
    } 
    
    return !error   
}

const salvar = () => {
    if(validar()){
        alert("Usuario Cadastrado com Sucesso")
        navigation.reset({
            index: 0,
            routes: [{name: "Home"}]})
    }                
} 

const cadastrar = () => {
    navigation.navigate("Cadastro")
}

    return(
        <View style={styles.container}>
            <Text h3>Cadastre-se</Text>
            <Input 
                    placeholder="Digite um email valido"
                    leftIcon={{type: 'font-awesome', name: 'envelope'}}
                    keyboardType="email-address"
                    onChangeText={value => {
                        setEmail(value)
                        setErrorEmail(null)
                    }}
                    errorMessage={errorEmail}
                />
                
                <Button
                    icon={
                        <Icon 
                            name="home"
                            size={15}
                            color="white"
                        />
                    }
                    title="Entrar"
                    buttonStyle={styles.button}
                    onPress={() => salvar()}
                />
          </View>
    );
}
