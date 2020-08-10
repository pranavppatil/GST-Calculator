import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Inputs from './Inputs'

export class Render extends Component {
    state = {
        netPrice:0,
        rateOfIntrest: 5,
    }

    inputValue = (inputVal) => this.setState({ netPrice: inputVal})
    updateUser = (updateUse) => this.setState({ rateOfIntrest: updateUse })



    render() {
        return (
            <Inputs inputVal={this.inputValue} updateUse={this.updateUser} rateOfIntrest={this.state.rateOfIntrest} netPrice={this.state.netPrice} />

        )
    }rateOfIntrest
}

export default Render
