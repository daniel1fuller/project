
import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 15,
        marginRight: 15,
        marginTop: 12,
        marginBottom: 10,
        height:45
        // borderWidth: 3,
        // borderColor: 'black',

    },
    logoContainer: {

    },
    buttonContainer: {
        // borderWidth: 3,
        // borderColor: 'black',
        paddingLeft:10
        
    },
    text: {
        fontSize: 25,
        color: '#ff0800',
        // textAlign: 'center',
        fontFamily: "Quicksand_700Bold",
        paddingBottom: 7
    },
    rightContainer: {
        flexDirection: 'row',

    },
    liveChatText: {
        color: 'black',
        fontFamily: "Quicksand_600SemiBold",
        height: 31,
        width: 31,
        borderWidth: .3,
        borderColor: 'black',
        borderRadius: 50,
        textAlign: 'center',
        justifyContent: 'center',
        textAlignVertical: 'center',

        fontSize: 9,
        lineHeight:10
        // borderColor: 'white',
        // borderWidth: 3,
        
    },
    popIconButton: {
        justifyContent: 'center',
        marginLeft: 13
        
    },
    popIconText: {
        color: 'black',
        fontFamily: "Quicksand_500Medium",
        justifyContent: 'center',
        fontSize: 11,
        textAlign: 'center',
        // borderColor: 'white',
        // borderWidth: 3,
    },
    popIcon: {
        height: 31,
        width: 31,
        borderWidth: .3,
        borderColor: 'black',
        borderRadius: 50,
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 11,
        // borderColor: 'white',
        // borderWidth: 3,
    },
    inboxIcon: {
        height: 14,
        width: 22,
        marginRight: .6,
        justifyContent: 'center',
        alignContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
    },
});

export default styles;