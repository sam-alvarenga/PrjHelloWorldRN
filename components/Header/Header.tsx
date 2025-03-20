import { Text, View, StyleSheet } from 'react-native';

export default function App() {
    return (

        <View style={styles.header}>
            <Text style={styles.headerText}>Só Viagens</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    header: {
        width: '100%',
        /* ocupa uma parte do espaço disponível no contêiner. Como ela tem flex: 1, ela vai dividir o espaço de maneira igual com outros componentes que também têm flex: 1. */
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

});