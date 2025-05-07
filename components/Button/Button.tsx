import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';



type Props = {
    text: string;
    city: string;
}

export default function Button(props: Props) {
    const [button, setLido] = useState(props.text);

    function buttonRead() {
        if (props.text == "Saiba mais") {
            setLido("Lido")
        }
         
        Alert.alert(`Você clicou no Post  "${props.city}"`);
    }

    return (
        <TouchableOpacity onPress={buttonRead} style={styles.button} >
            <Text style={styles.buttonText}>{button}</Text>
        </TouchableOpacity >
    );
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
    }
});