import { Text, View, StyleSheet, Image } from "react-native";
import Button from '../Button/Button'; /* Importa um componente de botão personalizado em ./components/Button/Button. */


type Props = {
    titulo: string,
    descricao: string,
    imagem: object,
    textButton: string
}



export default function Post(props: Props) {


    return (

        <View style={styles.post}>
            <Text style={styles.postTitle}>{props.titulo}</Text>

            <Image style={styles.img}
                source={props.imagem}
            />
            <Text style={styles.textPost}> {props.descricao}
            </Text>
            <Button text={props.textButton}/>

        </View>

    )
}

const styles = StyleSheet.create({

    post: {
        width:'100%',
        /*  ocupará 3 vezes mais espaço do que o header e o containe, Ou seja, ela vai "crescer" mais e ocupar o triplo do espaço em relação aos outros componentes que têm flex: 1 ou 2. */
        flex: 3
    },

    postTitle: {
        color: '#000',
        backgroundColor: '#c1c1c1',
        fontSize: 20,
        textAlign: 'center',
        /* Aplica 1px de espaçamento interno em cima e embaixo */
        paddingVertical: 1,
        /*  paddingHorizontal: 10,  Aplica 10px de espaçamento internos nas laterais */
        fontWeight: 'bold'
    },

    textPost: {
        fontSize: 14,
        //aplica 12px de espaço externos em todos os quatro lados do componente 
        margin: 12,
        textAlign: 'center'

    },


    img: {
        borderColor: '#c1c1c1',
        width: 'auto',
        height: 120,
        /*  marginTop: 10,   */
        /* borderRadius: 8, */
    },



});
