import React, { Component } from 'react';
import { View, Text } from 'react-native';

class LifeCycle extends Component {
    constructor(props) {
        super(props);
        console.log(`${Date.now()}. This is constructor`);
        this.state = {
            numberOfRefresh: 0
        };
        setInterval(() => {
            this.setState(previousState => {
                return { numberOfRefresh: previousState.numberOfRefresh + 1}
            });
        }, 20000);
    }
    componentWillMount(){
        console.log(`${Date.now()}. This is  componentWillMount`);
    }
    componentDidMount() {
        console.log(`${Date.now()}. This is ComponentDidMount`);
    }
    shouldComponentUpdate() {
        console.log(`${Date.now()}. This is shouldComponentUpdate`);
        return true;
    }
    componentWillUpdate() {
        console.log(`${Date.now()}. This is componentWillUpdate`);
    }
    componentDidUpdate() {
        console.log(`${Date.now()}. This is componentDidUpdate`);
    }
    render() {
        console.log(`${Math.floor(Date.now())}. This is render function`);
        let textToDisplay = `Numbers of refresh: ${this.state.numberOfRefresh}`;
        return (
            <View
                style={{flex: 1,
                marginTop: 100
            }}
            >
                <Text>{textToDisplay}</Text>

            </View>
        );
    }
}
export default class LifeCycleComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        var lifeCycle = <LifeCycle propA="abc"></LifeCycle>;
        return (
            <View>
                {lifeCycle}
            </View>
        )
    }
}
