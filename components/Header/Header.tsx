import { Text, View} from 'react-native';
import {headerStyles} from  './HeaderStyle';
//Passo 1º Impotar a biblioteca do Font Awesome na tela que utlizará o link
import FontAwesome from '@expo/vector-icons/FontAwesome6'
export default function App() {
    return (

        <View style={headerStyles.header}>
            <Text style={headerStyles.headerText}>Só Viagens</Text>
            {/* Inserir o componente FontAweson e suas propriedades */}
            <FontAwesome size={30} name="plane-departure" color="white"/>
        </View>
    );
}

