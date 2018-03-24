import React from 'react';
import { Text,View,Button } from 'react-native';

export default class Timer extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            fullTime: this.props.secs + (this.props.mins * 60)
    }
}


    startCounter = () => {
        if(!this.interval)
        this.interval = setInterval(this.count,1000)
    }
    count = () => {
        if(this.state.fullTime !== 0)
        this.setState(prevState =>( {
            fullTime: prevState.fullTime - 1
             })
         )
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            fullTime: nextProps.secs + (nextProps.mins * 60)
        })
    }

    render(){
        return (
            <View>
                <Button title='start' onPress = { this.startCounter} />
               <Text> MINS: {Math.floor(this.state.fullTime / 60)} SECS: {this.state.fullTime % 60} </Text>

            </View>
        )
    }





} 