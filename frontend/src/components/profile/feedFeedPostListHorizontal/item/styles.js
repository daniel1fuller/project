import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
// borderWidth: 3,
// borderColor: 'black',
marginHorizontal:5,
marginTop: 10,

    },
    container2: {
flex: 1,

    },
    image: {
        flex: 1,
        backgroundColor: 'white',
        aspectRatio: 9/11,
borderRadius:8,
        // borderWidth: 3,
        // borderColor: 'black',
width:116,
        marginBottom:5
        


    },
    displayNameBox: {
        justifyContent:'center',
        alignItems: 'center',
        marginTop: 2

    },
    displayNameText: {
        fontFamily: 'Quicksand_400Regular',
        fontSize: 12,
        color: '#434343'

    },
    avatarSmall: {
        height: 24,
        width: 24,
        borderWidth: .1,
        borderColor: 'black',
        borderRadius: 50,
        paddingTop: 10,
        marginRight: 3,


    },
    insideButton: {
        flexDirection: 'row'
    }

});

export default styles;