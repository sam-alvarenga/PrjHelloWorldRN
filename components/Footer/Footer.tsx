import { StyleSheet, Text, View, } from 'react-native';


export default function Footer() {
    return (
        <View style={styles.footer}>
            <Text style={styles.footerText}>  copyright © 2025  Desenvolvido por Samantha </Text>
        </View>
    )
}

const styles = StyleSheet.create({
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