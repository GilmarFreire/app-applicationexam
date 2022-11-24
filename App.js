import React from 'react'
import { View, Text, StyleSheet } from "react-native";

//Title da Home

export default function App(){
    return(
        <View style={styles.container}>
            <Text>Epistemic</Text>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
       
  },
});