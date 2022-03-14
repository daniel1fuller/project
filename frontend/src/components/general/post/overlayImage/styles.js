import { Dimensions, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,

        bottom: 0,
        justifyContent: 'space-between',
        padding: 5,
        marginBottom: 10
    },
    top: {
        flexDirection: 'row',
        alignItems: 'flex-start',

    },
    bottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    descriptionBox: {
        width: 600,
        height: 21,
        // borderColor: 'black',
        // borderWidth: 3,
    },
    descriptionBoxText: {
        color: 'black',
        fontFamily: "Quicksand_600SemiBold",
        height: 75,
        fontSize: 14,
        paddingRight: 2,

    },
    popIconBox: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        // paddingTop: 5,
        // flex: 1
    },
    nameBox: {
        // borderColor: 'black',
        // borderWidth: 3,
        width: 210,
        marginBottom:10,
        marginTop:8,
    },
    followSaveBox: {

        flexDirection: 'row',

        // justifyContent: 'space-between',
        // alignSelf: 'flex-end',
        flex: 1
    },
    followSaveText: {
        color: 'black',
        fontFamily: "Quicksand_500Medium",
        justifyContent: 'center',
        fontSize: 11,
        textAlign: 'center',
        width: 83
        // borderColor: 'white',
        // borderWidth: 3,
    },
    bottomIconFollow: {
        height: 31,
        width: 83,
        marginRight: 15,
        borderRadius: 50,
        flexDirection: 'row', 
        justifyContent: 'center',
        backgroundColor: '#ff0800',
        borderWidth: .6,
        borderColor: '#D80700',
    },
    bottomIconSave: {
        height: 31,
        width: 83,
        borderRadius: 50,
        flexDirection: 'row', 
        justifyContent: 'center',
        backgroundColor: '#00A8E8',
        borderWidth: .6,
        borderColor: '#0093CB',
        // marginLeft: 20,

    },
    bottomIconText: {
        color: 'white',
        justifyContent: 'center',
        fontFamily: "Quicksand_700Bold",
        fontSize: 15,
        textAlignVertical: 'center',
        paddingBottom: 4,
        letterSpacing: .6
    },
    popIconButton: {
        justifyContent: 'center',
        marginLeft: 15
        
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
    shareIcon: {
        height: 18,
        width: 18,
        justifyContent: 'center',
        alignContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
    },
   
    likeIcon: {
        height: 31,
        width: 31,
        borderRadius: 50,
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 11,
    },
    commentIcon: {
        height: 15,
        width: 22,
        justifyContent: 'center',
        alignContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',

    },

    displayNameButton: {
        flexDirection: 'row',
        textAlign: 'center',
        height: 32,
        // borderWidth: 2,
        // borderColor: 'white',

    },
    displayNameText: {
        color: 'black',
        fontSize: 13,  
        fontFamily: "Quicksand_500Medium",
        marginLeft: 5,
        alignSelf: 'center',
        textAlignVertical: 'center',
        // borderWidth: 2,
        // borderColor: 'black',
        paddingBottom: 4

    },
    avatar: {
        height: 22,
        width: 22,
        borderRadius: 50,
        justifyContent: 'center',
        alignSelf: 'center'
    },

})

export default styles