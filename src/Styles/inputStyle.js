import {StyleSheet} from 'react-native';

const styles=StyleSheet.create({
    container: {
        flex: 8,
        margin: 10,
    },
    subcontainer: {
        flexDirection: 'row',
        alignItems: 'stretch',

    },

    input: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: '#000',
        height: 40,
        borderRadius: 5,
        margin: 10,
    },

    ImageStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center',
    },
    inputText: {
        color: 'white',
        paddingLeft: 20,
        fontSize: 15,
        justifyContent: 'center',
        paddingTop: 15
    },
    inputTextIntrest: {
        color: 'white',
        paddingLeft: 20,
        fontSize: 20,
        justifyContent: 'center',
        paddingTop: 15,
    },
    text: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red',
        fontWeight: 'bold'
    },
    inputpicker: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: '#000',
        height: 40,
        borderRadius: 5,
        margin: 10,
    },
    pickerStyle: {
        height: 150,
        width: "100%",
        color: 'black',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: "#DDDDDD",
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 140,
        paddingRight: 140,
        textAlign: 'center',
        alignItems: 'center',
    },
});

export {styles}