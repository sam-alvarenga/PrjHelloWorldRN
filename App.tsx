import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, StyleSheet, Switch, Text, TouchableOpacity, View, Image } from 'react-native';

export default function App() {
  //<></> = fragment
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Text style={styles.headerText}>Só Viagens</Text>
      </View>

      <View style={styles.post}>
        <Text style={styles.headerPost}>Rio de Janeiro</Text>
        
          <Image style={styles.img}
            source={require('./assets/image/rio-de-janeiro.jpg')}
            resizeMode='cover'
          />
        <Text style={styles.textPost}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut temporibus aliquid delectus nostrum adipisci est nulla nemo quaerat. Rerum magnam aut harum aliquam velit tempore perspiciatis voluptatibus animi. Eligendi, est?
        </Text>

        {/*  <Button title="Saiba mais" color= ""></Button>   */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} >Saiba mais</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.post}>
        <Text style={styles.headerPost}>São Paulo</Text>
     
          <Image style={styles.img}
            source={require('./assets/image/Sp.jpg')}
            resizeMode='cover' 
          />       
        <Text style={styles.textPost}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut temporibus aliquid delectus nostrum adipisci est nulla nemo quaerat. Rerum magnam aut harum aliquam velit tempore perspiciatis voluptatibus animi. Eligendi, est?</Text>
        
        {/* <Button title="Saiba mais"></Button> */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Saiba mais</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>  copyright © 2025  Desenvolvido por Samantha </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },


  header: {
    width: '100%',
    flex: 1,
    backgroundColor: '#FF0000',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 22

  },

  headerText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },

  post: {
    flex: 3
  },

  headerPost: {
    color: '#000',
    backgroundColor: '#c1c1c1',
    fontSize: 20,
    textAlign: 'center',
    paddingVertical: 1,
    fontWeight: 'bold'
  },

  textPost: {    
    fontSize: 14,
    margin: 12
    
  },

  button: {
    padding: 6,
    width: 120,
    backgroundColor: "#9c0101",
    borderRadius: 8,
    alignSelf: 'center',
    margin: 12
  },

  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold'
  },

 
  img: {
    borderColor: '#c1c1c1', 
    width: 'auto',
    height: 120,
   /*  marginTop: 10,   */
    /* borderRadius: 8, */
  },


  footer: {
    width: '100%',
    backgroundColor: '#FF0000',
    flex: 0.25,
    justifyContent: 'center',


  },

  footerText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 15,
  }

});
