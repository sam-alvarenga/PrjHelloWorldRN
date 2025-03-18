import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Switch, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <StatusBar style="auto" />
        <Text style={styles.headerText}>Header | Cabeçalho</Text>
      </View>
      <View style={styles.body}>
        <Text>Hello World!! :)</Text>
        <Text>Ligar</Text>
        <Switch/>
        
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

  body:{  
    flex:2,
    justifyContent: 'center',
    

  },
  header:{
    width:'100%',
    flex: 1,
    backgroundColor:'#FF0000',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText:{
    color:'#fff',
    fontSize: 20

  }
});
