import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  container: {
    flex: 1,
  
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

  tituloTermos: {
    color: 'red'
  },

  containerTermos: {
    padding: 15,
    paddingStart: 25,   
  },

  paragraphTermos: {
    padding: 15,
    paddingStart: 5,
    textAlign: "justify"    
  },

  footer: {
    flex: 1,
    flexDirection:"column",
    justifyContent:"flex-end",
  },

  footerText: {
   margin:30,
   color: "red"
  },

cadastrar: {
  color: 'red'
},

});

export default styles