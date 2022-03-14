import { Dimensions, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        position: 'absolute',
        zIndex: 999,
        bottom: 10,
        justifyContent: 'space-between',
        padding: 10

        // borderWidth: 1,
        // borderColor: 'white',
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
        width: 210,
        height: 21,
    },
    descriptionBoxText: {
        color: 'white',
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
        marginTop:10,
    },
    followSaveBox: {

        flexDirection: 'row',

        // justifyContent: 'space-between',
        // alignSelf: 'flex-end',
        flex: 1
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
        paddingBottom: 5,
        letterSpacing: .6,
        // borderWidth:3,
        // borderColor:'white'
    },
    followSaveText: {
        color: 'white',
        fontFamily: "Quicksand_500Medium",
        justifyContent: 'center',
        fontSize: 11,
        textAlign: 'center',
        width: 83
        // borderColor: 'white',
        // borderWidth: 3,
    },
    popIconButton: {
        justifyContent: 'center',
        marginLeft: 15,
        
        
    },
    popIcon: {
        height: 31,
        width: 31,
        borderWidth: .6,
        borderColor: 'white',
        borderRadius: 50,
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 11,
        // borderColor: 'white',
        // borderWidth: 3,
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
    shareIcon: {
        height: 18,
        width: 18,
        justifyContent: 'center',
        alignContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
    },
    liveChatText: {
        color: 'white',
        fontFamily: "Quicksand_700Bold",
        height: 31,
        width: 31,
        borderWidth: .6,
        borderColor: 'white',
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
        color: 'white',
        fontFamily: "Quicksand_500Medium",
        justifyContent: 'center',
        fontSize: 11,
        textAlign: 'center',
        // borderColor: 'white',
        // borderWidth: 3,
    },
    displayNameButton: {
        flexDirection: 'row',
        textAlign: 'center',
        height: 32,
        // borderWidth: 2,
        // borderColor: 'white',

    },
    displayNameText: {
        color: 'white',
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
        alignSelf: 'center',
        color:'white'
    },

})

export default styles