import React from 'react';
import { Text, View } from 'react-native';

class Greeting extends React.Component {
    render() {
        let GreetingText = `Hello ${ this.props.name }! how are you \n`;
        return (
        <Text>{GreetingText}</Text>
        );
    }
}

export default class MultipleGreetings extends React.Component {
    render() {
        return (
            <View style={{alignItems: 'center'}}>
                <Greeting name="Lam nguyen ngoc"></Greeting>
                <Greeting name="Le thi bich phuong"></Greeting>
            </View>
        );
    }
}