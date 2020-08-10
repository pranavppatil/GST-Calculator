//Component Which contains input fields

import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Picker, TouchableHighlight, ToastAndroid } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { styles } from '../Styles/inputStyle';
import Result from './Result';

export default class Inputs extends Component {
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
        const { netPrice } = this.props
        const submitValue =() => {
            Result.submitval()
        }
        return (
            <View style={styles.container} >
                <View style={styles.subcontainer}>
                    <View style={{ flex: 2 }}>
                        <Text style={styles.inputTextIntrest}>Net Price:  </Text>
                    </View>
                    <View style={{ flex: 2 }}>
                        <View style={styles.input}>
                            <Image
                                source={require('../Images/rupee.png')} style={styles.ImageStyle}
                            />

                            <TextInput
                                style={{ flex: 1 }}
                                onChangeText={this.props.inputVal}
                                placeholder="Enter the Net Price"
                                underlineColorAndroid='transparent'
                                keyboardType={'numeric'}
                            />

                        </View>


                    </View>
                </View>

                <View style={styles.subcontainer}>
                    <View style={{ flex: 2 }}>
                        <Text style={styles.inputTextIntrest}>Rate of Intrest:  </Text>

                    </View>
                    <View style={{ flex: 2 }}>
                        <View style={styles.inputpicker}>

                            <Picker style={styles.pickerStyle} selectedValue={this.props.rateOfIntrest} onValueChange={this.props.updateUse}>
                                <Picker.Item label="5%" value="5" />
                                <Picker.Item label="12%" value="12" />
                                <Picker.Item label="18%" value="18" />
                                <Picker.Item label="28%" value="28" />
                            </Picker>
                        </View>
                    </View>
                </View>

                <View style={styles.subcontainer}>
                    <TouchableHighlight>
                        <View style={styles.button}>
                            <Text style={styles.text} onPress={()=> submitValue()}>Calculate </Text>
                        </View>
                    </TouchableHighlight>
                </View>
                    <Result netPrice={this.props.netPrice} rateOfIntrest={this.props.rateOfIntrest} />
            </View >
        );

    }
}