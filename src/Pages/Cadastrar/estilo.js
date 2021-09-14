import { StyleSheet, Dimensions } from "react-native";
import Colors from "../../Style/Colors";

const medidas = Dimensions.get('screen').width;
const estilo = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.light,
    },
    containerDark: {
        backgroundColor: Colors.dark
    },
    //intro page
    effect1: {
        backgroundColor: 'rgb(0, 220, 130)',
        width: '63%',
        height: '100%',
        borderTopRightRadius: 140,
        position: "absolute"
    },
    effect2: {
        backgroundColor: 'rgb(0, 220, 130)',
        width: '100%',
        alignSelf: 'flex-end',
        height: '60%'
    },
    effect3: {
        backgroundColor: Colors.dark,
        borderBottomLeftRadius: 150,
        height: 150,
        position: 'relative',
        left: 227 
    },
    intro: {
        zIndex: 1,
        alignItems: 'center',
        width: medidas,
        padding: 5,
    },
    boasVindas: {
        color: Colors.light,
        fontSize: 40,
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 10
    },
    desc: {
        color: Colors.light,
        fontSize: 20,
        textAlign: 'center',
        marginTop: 10,
        position: 'relative',
        top: '20%'
    },
    botaoContinuar: {
        padding: 20,
        paddingHorizontal: 25,
        backgroundColor: Colors.dark,
        borderRadius: 20,
        position: 'relative',
        top: '49%'  
    },
    imgBotao: {
        width: 30,
        height: 30,
    },
    //forms
    subContainer: {
        padding: 5
    },
    title: {
        fontSize: 25,
        textAlign: 'center',
        color: 'rgb(0, 230, 180)',
        marginBottom: 15
    },
    subTitle: {
        fontSize: 17,
        textAlign: 'center',
        color: Colors.secondaryLight,
        marginVertical: 10,
        marginHorizontal: 5
    },
    form: {
        padding: 5
    },
    div: {
        width: '100%',
        height: 1,
        backgroundColor: Colors.secondaryLight
    },
    row: {
        flexDirection: 'row',
        paddingVertical: 10
    },
    col: {
        flex: 1,
        paddingHorizontal: 5
    },
    cardLabel: {
        flexDirection: 'row'
    },
    label: {
        marginLeft: 10,
        marginBottom: 10,
        fontSize: 22,
        fontWeight: 'bold',
        color: Colors.secondary
    },
    obrigatorio: {
        color: Colors.danger
    },
    input: {
        padding: 10,
        paddingLeft: 17,
        borderRadius: 7,
        borderWidth: 1,
        borderColor: Colors.secondaryLight,
        fontSize: 18
    },
    inputAtivo: {
        borderColor: 'rgb(0, 230, 180)'
    },
    textInputData: {
        color: Colors.secondaryLight,
        fontSize: 20
    },
    cardBotoes: {
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    botao: {
        padding: 3,
        borderRadius: 13,
    },
    botaoInativo: {
        borderRadius: 13,
    },
    botaoVoltar: {
        padding: 16,
        paddingHorizontal: 25,
        borderRadius: 10,
        backgroundColor: Colors.light,
    },
    botaoProximo: {
        padding: 19,
        paddingHorizontal: 25,
    },
    botaoCadastrar:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        paddingHorizontal: 22,
    },
    botaoCadastrarInativo:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Colors.secondaryLight,
        borderRadius: 10,
        padding: 19,
        paddingHorizontal: 25,
    },
    textVoltar: {
        color: Colors.dark,
        fontSize: 17
    },
    textProximo: {
        color: Colors.light,
        fontSize: 17
    },
    textCadastrar: {
        color: Colors.light,
        fontSize: 17,
        marginRight: 5
    },
    //politicas de privacidade
    cardCheckbox: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingBottom: 3
    },
    checkbox: {
        width: 25,
        height: 25,
        borderWidth: 1,
        borderColor: Colors.secondaryLight,
        borderRadius: 3,
        padding: 2
    },
    boxSelected: {
        borderColor: 'rgb(0,230,180)',
    },
    selected: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(0,230,180)',
        width: '100%',
        height: '100%',
    },
    textCheckbox: {
        marginLeft: 10,
        fontWeight: 'bold',
        fontSize: 18,
        color: Colors.secondary
    },
    //modal
    load:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)'
    },
    //animation
    check:{
        flex: 1,
        backgroundColor: Colors.ligth,
        alignItems: 'center',
        justifyContent: 'center'
    },
    mensagem:{
        color: Colors.success,
        fontSize: 25,
        textAlign: 'center'
    },
    errorMensagem:{
        color: Colors.danger
    },
    animation:{
        width: '65%',
        height: '65%',
        alignItems: 'center',
        justifyContent: 'center'
    },
})

export default estilo;