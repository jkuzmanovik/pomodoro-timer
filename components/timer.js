import React from 'react';
import { Text,View,Button } from 'react-native';
import Input from './input'

export default class Timer extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            secs:10,
            showCounter: true 
        }
    }

    startCounter = () => {
        this.setState(prevState => ({ showCounter: !prevState.showCounter }))
        this.interval = setInterval(this.startCount,1000)
    }

    startCount = () => {
        if(this.state.secs !== 0)
            this.setState(prevState =>({ secs: prevState.secs + - 1 })) 
        else 
            clearInterval(this.interval)
        }
    
    updateSecs = (secs) => { this.setState(prevState => ({ secs: prevState.secs + (secs - '0') })) }
    
    updateMins = (mins) => { this.setState(prevState => ({ secs: prevState.secs + (mins- '0') * 60 })) }    

    stopCounter = () => {
        clearInterval(this.interval)
         this.setState(prevState => ({ showCounter: !prevState.showCounter }))
    }

    componentWillUnmount(){
        clearInterval(this.interval)
    }
    componentDidMount(){
        this.startCounter()
    }

    render(){
        let showButton  = null;
        if(this.state.showCounter)
            showButton = <Button title='start' onPress={this.startCounter} />
        else
            showButton = <Button title='stop' onPress={this.stopCounter} />
        return(
            <View>
                <Text> {this.state.secs} </Text>
                <Text> restart </Text>
                {showButton}
                <Input changeMins= {this.updateMins} changeSecs = {this.updateSecs} secs={this.state.secs}/>
            </View>
        )
    }
}