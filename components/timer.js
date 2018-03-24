import React from 'react';
import { Text,View,Button } from 'react-native';

export default class Timer extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            fullTime: this.props.secs + (this.props.mins * 60),
            show: props.show,
            showButton: false,
    }
}
    resetCounter = () => {
        this.setState({
            fullTime: this.props.secs + (this.props.mins * 60)
        })
 
    }

    stopCounter = () => {
         clearInterval(this.interval) 
         this.interval = null 
         this.setState(prevState => ({...prevState}))
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

    componentDidMount() {
        this.startCounter
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            fullTime: nextProps.secs + (nextProps.mins * 60),
            show: nextProps.show
        })
    }

    render(){
        return (
            <View>
                <Button title='reset' onPress = { this.resetCounter} />
                     {this.interval &&  <Button title='stop' onPress = { this.stopCounter} /> }
                     {!this.interval &&  <Button title='start' onPress = { this.startCounter} />}
               <Text>  {Math.floor(this.state.fullTime / 60)}:{this.state.fullTime % 60} </Text>
            </View>
        )
    }
} 