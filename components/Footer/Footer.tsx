import { Text, View} from 'react-native';
import {footerStyle} from './FooterStyle';


export default function Footer() {
    return (
        <View style={footerStyle.footer}>
            <Text style={footerStyle.footerText}>  copyright © 2025  Desenvolvido por Samantha </Text>
        </View>
    )
}

