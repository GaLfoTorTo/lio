import { StyleSheet } from "react-native";
import Colors from "../../Style/Colors";

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        padding: 3,
        backgroundColor: 'black'
    },
    cardUser: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 7,
        marginBottom: 17
    },
    borderFoto: {
        borderRadius: 49,
        padding: 3,
        marginBottom: 7
    },
    userFoto: {
        width: 90,
        height: 90,
        borderRadius: 48,
        backgroundColor: Colors.secondaryLight
    },
    userNameProfile: {
        color: Colors.light,
        fontWeight: 'bold',
        fontSize: 18,
    },
    nameUser: {
        color: Colors.secondaryLight,
        fontSize: 16
    },
    div: {
        width: '100%',
        height: 0.5,
        backgroundColor: Colors.secondaryLight,
        marginBottom: 2
    },
    itemSideBar: {
        padding: 10,
        paddingVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    textItem: {
        color: Colors.light,
        fontSize: 16,
        marginLeft: 10
    },
    itemIcon: {
        color: Colors.secondaryLight,
        marginRight: 10
    },
    footerSideBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 7,
        borderTopWidth: 0.5,
        borderTopColor: Colors.secondaryLight
    }
});

export default estilo;