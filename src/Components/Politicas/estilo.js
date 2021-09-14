import { StyleSheet } from "react-native";
import Colors from "../../Style/Colors";

const estilo = StyleSheet.create({
    container: {
        padding: 3,
        borderWidth: 1,
        borderColor: Colors.secondaryLight
    },
    bloco: {
        paddingVertical: 5
    },
    cardTitle:{
        flexDirection: "row",
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color:Colors.dark,
        paddingLeft: 3
    },
    subTitle: {
        marginVertical: 5,
        fontSize: 16,
        fontWeight: 'bold',
        color:Colors.dark,
        paddingLeft: 10,
    },
    text: {
        paddingLeft: 10,
        marginVertical: 3,
        color: Colors.secondary
    },
    textPadding: {
        paddingLeft: 25
    },
    ponto: {
        backgroundColor: 'rgb(0,230, 180)',
        width: 7,
        height: 7,
        borderRadius: 5,
        marginLeft:10
    }
});

export default estilo;