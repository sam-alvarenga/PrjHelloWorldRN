import { StyleSheet, Text, TouchableOpacity} from 'react-native';

export default function Button() {
    return (
   
        <TouchableOpacity style = { styles.button } >
            <Text style={styles.buttonText}>Saiba Mais</Text>
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