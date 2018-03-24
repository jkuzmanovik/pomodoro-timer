import React from 'react';
import { Text,View,Button } from 'react-native';
import Input from './input'
import Timer from './timer'
export default class Counter extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            mins:'',
            secs:'',
            showCounter: true 
        }
    }
    updateMins = (mins) => { this.setState({mins}) } 
    updateSecs = (secs) => { this.setState({secs}) } 

    render(){
       return(
            <View>
                <Timer mins = {this.state.mins - '0'} secs = {this.state.secs - '0'} />
                <Input changeMins= {this.updateMins} changeSecs = {this.updateSecs} mins = {this.state.mins} secs={this.state.secs}/>

            </View>
        )
    }
}