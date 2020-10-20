import React from 'react';
import { Component } from 'react';
import { View, Text} from 'react-native';

export default class JustifyContent extends Component {
    render() {
        return (
            <View style={{
                height: 500,
                backgroundColor: 'grey',
                flexDirection: 'column',
                // justifyContent: 'flex-start',
                // justifyContent: 'flex-end',
                // justifyContent: 'center',
                // justifyContent: 'center',
                justifyContent: 'space-around',
            }}>
                
                <Text style={{ height:60, backgroundColor: 'red', marginBottom:15}}></Text>
                <Text style={{ height:60, backgroundColor: 'yellow', marginBottom: 15}}></Text>
                <Text style={{ height:60, backgroundColor: 'blue'}}></Text>
            </View>
        );
    }
}