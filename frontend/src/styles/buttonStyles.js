import { StyleSheet } from "react-native";

const buttonStyles = StyleSheet.create({
    
    grayOutlinedIconButton: {
        borderColor: 'lightgray',
        borderWidth: 1,
        borderRadius: 4,
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginHorizontal: 10,
        fontFamily: "Quicksand_400Regular",

    },
    filledButton: {
        borderRadius: 4,
        paddingVertical: 10,
        paddingHorizontal: 50,
        backgroundColor: '#ff4040',
        fontFamily: "Quicksand_400Regular",

    },
    buttonContainer1:{
        justifyContent:'center',
        alignItems:'center',
    },
    buttonContainer2:{
flexDirection:'row'
    },
    followButton: {
        height: 31,
        width: 92,
        borderRadius: 50,
        flexDirection: 'row', 
        justifyContent: 'center',
        backgroundColor: '#ff0800',
        borderWidth: .6,
        borderColor: '#D80700',
        // paddingTop:2
    },
    saveButton: {
        height: 31,
        width: 92,
        borderRadius: 50,
        flexDirection: 'row', 
        justifyContent: 'center',
        backgroundColor: '#00A8E8',
        borderWidth: .6,
        borderColor: '#0093CB',
        paddingTop:-1
        // marginLeft: 20,


    },
    bottomButtons: {
        borderRadius: 50,
        // paddingVertical: 10,
        // paddingHorizontal: 50,
        backgroundColor: '#ff0800',
        justifyContent:'center',
        alignItems:'center',
        width: 91,
        height:25

    },
    bottomSaveButton: {
        borderRadius: 50,
        // paddingVertical: 10,
        // paddingHorizontal: 50,
        backgroundColor: '#00A8E8',
        borderWidth: .6,
        borderColor: '#0093CB',
        justifyContent:'center',
        alignItems:'center',
        width: 91,
        height:25

    },
    topButtonsText:{
        fontFamily: "Quicksand_600SemiBold",
        fontSize:19,
        color:'white',
    },
    bottomButtonsText: {
        fontFamily: "Quicksand_700Bold",
        fontSize:13,
        color:'white',
        paddingBottom:3,
        letterSpacing:.5
    },
    aboutMeButton:{
        height:25,
        width:91,
        backgroundColor:'white',
        borderWidth:.4,
        borderColor:'black',
        borderRadius:50,
        paddingHorizontal:10,
        marginTop:10,
        marginBottom:10,
        paddingTop: 1,
        alignItems: 'center',
    },
    aboutMeButtonText:{
        fontFamily: "Quicksand_500Medium",
        paddingBottom: 2,
        color:'black',
        fontSize: 13
    },
    filledButtonText: {
        color: 'white',
        fontFamily: "Quicksand_400Regular",
    },
    grayOutlinedButton: {
        marginTop: 50,
        marginLeft: 30,
        alignSelf:'flex-start',
        borderColor: 'lightgray',
        borderWidth: 1,
        borderRadius: 50,
        width: 91,
        height:25,
        position:'absolute'
    },
    grayOutlinedButtonLogout: {
        marginTop: 500,
        alignSelf:'center',
        justifyContent:'center',
        borderColor: 'lightgray',
        borderWidth: 1,
        borderRadius: 50,
        paddingBottom:4,
        width: 91,
        height:25,
        fontFamily: "Quicksand_400Regular",
        position:'absolute'
    },
    grayOutlinedButtonText: {
        alignSelf:'center',
        justifyContent:'center',
        color: 'black',
        fontFamily: "Quicksand_500Medium",
        fontSize: 13
    },

});

export default buttonStyles;