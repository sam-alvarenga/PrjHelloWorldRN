import { Text, View, StyleSheet, Image } from "react-native";
import Button from '../Button/Button'; /* Importa um componente de botão personalizado em ./components/Button/Button. */

export default function Post() {
    return (

        <View style={styles.post}>
            <Text style={styles.postTitle}>Rio de Janeiro</Text>

            <Image style={styles.img}
                source={require('./../../assets/image/rio-de-janeiro.jpg')}

                /*É uma propriedade usada em React Native no componente <Image />. Ela controla como a imagem será redimensionada para se ajustar ao contêiner onde está sendo exibida, mantendo sua proporção original.  */
                resizeMode='cover'
            />
            <Text style={styles.textPost}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut temporibus aliquid delectus nostrum adipisci est nulla nemo quaerat. Rerum magnam aut harum aliquam velit tempore perspiciatis voluptatibus animi. Eligendi, est?
            </Text>
            <Button/>

        </View>

    )
}

const styles = StyleSheet.create({

    post: {
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
        margin: 12

    },


    img: {
        borderColor: '#c1c1c1',
        width: 'auto',
        height: 120,
        /*  marginTop: 10,   */
        /* borderRadius: 8, */
    },



});
