import React from 'react';
import { Text,View } from 'react-native';

export default class Timer extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            fullTime: this.props.secs + (this.props.mins * 60)
    }
}

    componentWillReceiveProps(nextProps){
        this.setState({
            fullTime: nextProps.secs + (nextProps.mins * 60)
        })
    }

    render(){
        return (
            <View>
               <Text> MINS: {Math.floor(this.state.fullTime / 60)} SECS: {this.state.fullTime % 60} </Text>

            </View>
        )
    }





} 