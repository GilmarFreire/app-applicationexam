import { StyleSheet } from "react-native";
import { color } from "react-native-elements/dist/helpers";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
       
  },
  button: {
    
    margin: 10,
    width: 350,
    borderRadius: 25,
    padding:10     
  },

  icon: {
    margin: 30
  },

  paragraph: {
    margin: 10, 
    color: 'red'
  }


  

});

export default styles