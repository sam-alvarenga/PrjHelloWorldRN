import { Button, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';

export default function Button() {
    return (
        {/*  <Button title="Saiba mais" color= ""></Button>   */ }
        < TouchableOpacity style = { styles.button } >
            <Text style={styles.buttonText} >Saiba mais</Text>
        </TouchableOpacity >

    )



}

const styles = StyleSheet.create({
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
});