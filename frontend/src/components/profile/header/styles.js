import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        paddingTop:15,
        alignItems: 'center',
        paddingHorizontal: 65,
        height: 335,
        fontFamily: "Quicksand_400Regular",
        alignItems:'center'
        // borderBottomWidth: .3,
        // borderColor: 'lightgray',
        // borderWidth:3,
    },
    counterContainer: {
        paddingBottom: 20,
        flexDirection: 'row',
        marginHorizontal:20
    },
    counterContainerBox:{
paddingHorizontal:15
    },
    counterItemContainer: {
        flex: 1,
        alignItems: 'center',
    },
    infoBox: {
        justifyContent:'center',
        alignItems:'center',
        height:235
    },
    infoText: {
        // paddingVertical:1,
        fontFamily: "Quicksand_500Medium",
        color:'black'


    },
    logout:{
height:100,
width:100
    },
    counterNumberText: {
        fontSize: 16,
        fontFamily: "Quicksand_600SemiBold",

    },
    counterLabelText: {
        color: 'gray',
        fontSize: 11,
        fontFamily: "Quicksand_600SemiBold",
        paddingBottom:3.5

    },
    image: {
        height: 100,
        width: 100,
        borderRadius: 50,
        borderColor: 'black',
        borderWidth: .1
            }
});

export default styles;