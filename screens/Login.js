import React, { useState } from 'react'
import { View } from "react-native";
import { Button, Input, Text } from 'react-native-elements';
import Icon  from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/MainStyle';


//Title da Home
export default function Login({navigation}){

const [email, setEmail] = useState(null)
const [password, setPassword] = useState(null)

const entrar = () => {
  navigation.reset({
    index: 0, 
    routes: [{name: "Home"}]
  })
}

const cadastrar = () => {
    navigation.navigate("Cadastro")
}

    return(

        
        <View style={styles.container}>
            <Text h3>Epistemic</Text>
                <Input
                    placeholder="Entre com seu E-mail"
                    leftIcon={{ type: 'font-awesome', name: 'envelope' }}
                    onChangeText={value => setEmail(value)}
                    keyboardType='email-address'
                />

                <Input
                    placeholder="Digite sua senha para entrar"
                    leftIcon={{ type: 'font-awesome', name: 'key' }}
                    onChangeText={value => setPassword(value)}
                    secureTextEntry={true}
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
