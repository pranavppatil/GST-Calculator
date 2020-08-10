import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'

export class Heading extends Component {
    render() {
        return (
            <View style={styles.heading}>
                <Text style={styles.headingText}>GST Calculator</Text>
            </View>
        )
    }
}

export default Heading

const styles = StyleSheet.create({

    heading: {
        paddingTop: 30,
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        fontSize: 60,
    },
    headingText: {
        alignContent: 'center',
        fontSize: 40,
        color: 'white',
    },
});