import React from 'react';
import { Text,TextInput,View } from 'react-native';

export default (props) => (
    <View>
        <TextInput value = {props.secs} onChangeText = {props.changeMins}  />
        <TextInput value = {props.secs} onChangeText =  {props.changeSecs} />
    </View>
)