import React, { useState } from 'react'
import { View } from "react-native";
import { Button, Input, Text } from 'react-native-elements';
import Icon  from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/MainStyle';


//Title da Home
export default function Login({navigation}){

const [email, setEmail] = useState(null)
const [password, setPassword] = useState(null)
const [errorEmail, setErrorEmail] = useState(null)
const [errorPassword, setErrorPassword] = useState(null)

const validar = () => {
    let error = false
    setErrorEmail(null)

    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  

    if(!re.test(email)) {
        alert("Usuario não encontrado, digite o campo corretamente")
        setErrorEmail("Preencha seu e-mail corretamente")
        error = true
    } 
    if(password == null){
        alert("Senha incorreta ou espaço vazio, tente novamente")
        setErrorPassword("Preencha sua senha corretamente")
        error = true
    }
    return !error   
}

const entrar = () => {
    if(validar()){
        alert("Seja Bem Vindo!!!")
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
            <Text h3>Epistemic</Text>
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
                
               <Input 
                    placeholder="Digite seu password"
                    leftIcon={{type: 'font-awesome', name: 'key'}}
                    onChangeText={value => {
                        setPassword(value)
                        setErrorPassword(null)   
                    }}   
                    secureTextEntry={true}  
                    errorMessage={errorPassword}             
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
                    onPress={() => entrar()}
                />

                <Button
                    icon={
                        
                        <Icon 
                            name="user"
                            size={15}
                            color="white"
                        />                        
                    }
                    title="Não tem Cadastro? Cadastre-se"
                    buttonStyle={styles.button}
                    onPress={() => cadastrar()}
                />
          </View>
    );
}
