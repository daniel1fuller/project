import { Dimensions, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        // width: Dimensions.get('window').width,


        // bottom: 0,
        // justifyContent: 'space-between',
        // padding: 5,
        // marginBottom: 10,
        marginHorizontal:11,
        // marginVertical:5,
        marginBottom:20,
    },
    top: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        // borderColor: 'white',
        // borderWidth: 3
    },
    popIconBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
        marginHorizontal: 13,
        // borderColor: 'black',
        // borderWidth: 3,
        flex: 1
    },
    popIconButton: {
        justifyContent: 'center'

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
    commentIcon: {
        height: 15,
        width: 22,
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
    likeIconBubble: {
        borderWidth: .6,
        borderColor: 'black',
        alignSelf:'center',

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
    liveChatText: {
        color: 'black',
        fontFamily: "Quicksand_600SemiBold",
        height: 37,
        width: 37,
        borderWidth: .3,
        borderColor: 'black',
        borderRadius: 50,
        textAlign: 'center',
        justifyContent: 'center',
        textAlignVertical: 'center',
        fontSize: 10,
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

})

export default styles