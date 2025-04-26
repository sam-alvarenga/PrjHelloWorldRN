import { StyleSheet, Text, TouchableOpacity } from 'react-native';


type Props = {
    text: string
}

export default function Button(props: Props) {
    return (
        <TouchableOpacity style={styles.button} >
            <Text style={styles.buttonText}>{props.text}</Text>
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