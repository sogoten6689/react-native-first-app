import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Blink extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showText: true
        };
        var taskToDo = () => {
            this.setState(previousState => {
                return {
                    showText: !previousState.showText
                };
            });
        }
        const timeToBlink = 1000;
        setInterval(taskToDo, timeToBlink);
    }
    render() {
        let textToDisplay = this.state.showText ? this.props.inputText : '';
        return (
            <Text>{textToDisplay}</Text>
        );
    }
}

export default class TextBlink extends React.Component {
    render() {
        return (
            <View>
                <Blink inputText="Lammm"></Blink>
                <Blink inputText="123412 ok"></Blink>
                <Blink inputText="12232312"></Blink>
            </View>
        );
    }
}