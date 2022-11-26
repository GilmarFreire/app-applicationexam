import React, { useState } from 'react'
import { View } from "react-native";
import { Button, Input, Text } from 'react-native-elements';
import Icon  from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/MainStyle';


//Title da Home
export default function Cadastro({navigation}){

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
            <Text h3>Cadastre-se</Text>
                <Input
                    placeholder="Entre com seu E-mail"
                    leftIcon={{ type: 'font-awesome', name: 'envelope' }}
                    onChangeText={value => setEmail(value)}
                    keyboardType='email-address'
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
          </View>
    );
}
