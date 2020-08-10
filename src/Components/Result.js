//Component Which contains input fields
import React, { Component, Fragment } from 'react';
import { StyleSheet, Text, View, Image, Picker, TouchableHighlight, ToastAndroid } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { styles } from '../Styles/inputStyle';

export default class Result extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showRes: false,
            totalGst: 0,
            gstVal: 0,
            sgstVal: 0,
        }
    }


    render() {

        const submitval = () => {


            this.setState({
                showRes: true,
                gstVal: parseInt(this.props.netPrice * this.props.rateOfIntrest / 100),
                sgstVal: parseInt(this.props.netPrice * this.props.rateOfIntrest / 200),
                totalGst: parseInt(this.props.netPrice) + parseInt(this.props.netPrice * this.props.rateOfIntrest / 100),

            })
        }
        return(
            <Fragment>
            {
                this.state.showRes && <View style={styles.container}>
                    <Text style={styles.inputText}>Total netPrice inclusive of GST is : {this.state.totalGst}</Text>

                    <Text style={styles.inputText}>Total GST value is: {this.state.gstVal}</Text>
                    <Text style={styles.inputText}>SGST value is: {this.state.sgstVal}</Text>
                    <Text style={styles.inputText}>CGST value is: {this.state.sgstVal}</Text>
                </View>
            }
            </Fragment>
        )
    }
}
