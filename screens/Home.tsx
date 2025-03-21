import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native'; /* Importa componentes do react-native que serão utilizados no projeto */
import Header from '../components/Header/Header'; /* Importa um componente personalizado chamado Header de um arquivo localizado em ./components/Header/Header.  */
import Footer from '../components/Footer/Footer'; /* Importa o componente Footer, que provavelmente é responsável por exibir o rodapé da tela. em ./components/Footer/Footer. */
import Post from '../components/Post/Post'; /* Importa um componente Post, que pode ser responsável por exibir posts (ou qualquer conteúdo específico) na interface do aplicativo em ./components/Post/Post. */






/* View: O componente básico de layout em React Native. Ele é semelhante a um <div> no HTML. */
/*  O comportamento de layout da View é baseado no sistema de flexbox, que ajuda a distribuir os elementos de forma flexível e responsiva. */
/* flexDirection: Define a direção dos elementos dentro da View. row: Os elementos serão dispostos horizontalmente (lado a lado). column (padrão): Os elementos serão dispostos verticalmente (um abaixo do outro) */
export default function App() {
    //<></> = fragment
    return (
        <View style={styles.container}>

            {/* controle da barra de status do dispositivo (a parte superior da tela que normalmente exibe a hora, bateria, rede, etc.). */}
            <StatusBar style="auto" />  {/* significa que o estilo da barra de status será automaticamente ajustado de acordo com o fundo da tela */}
            <Header />
            <Post />
            <Post />
            <Footer />
        </View>

    );
}




/* criando uma variável styles  */
/* StyleSheet.create() cria os estilos  */
/* permitem definir um conjunto fixo de estilos que não serão modificados */
const styles = StyleSheet.create({
    container: {
        /* flex: 1: O componente ocupa uma parte igual do espaço disponível. */
        flex: 1, /*  A View principal ocupa toda a tela */
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});