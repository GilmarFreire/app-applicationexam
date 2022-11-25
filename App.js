import React, { useState } from 'react'
import { View, StyleSheet } from "react-native";
import { Button, Icon, Input, Text } from 'react-native-elements';
import styles from './styles/MainStyle';


//Title da Home
export default function App(){

const [email, setEmail] = useState(null)
const [password, setPassword] = useState(null)

const entrar = () => {
  console.log('entrou')
  console.log(email)
  console.log(password)
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
                      <Icon name="home" color="white" />
                    }
                    title='ENTRAR'                  
                    onPress={() => entrar()}
                />
          </View>
    );
}

