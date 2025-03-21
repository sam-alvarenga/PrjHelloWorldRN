import { Text, View} from 'react-native';
import {headerStyles} from  './HeaderStyle';

export default function App() {
    return (

        <View style={headerStyles.header}>
            <Text style={headerStyles.headerText}>Só Viagens</Text>
        </View>
    );
}

